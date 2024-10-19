'use client';

import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls
import { FaArrowRight, FaVolumeMute, FaVolumeUp, FaComment } from 'react-icons/fa'; // Import the icons
import { AnimatePresence, motion } from 'framer-motion'; // Import framer-motion for animations
import Link from 'next/link'; // Import the Link component
import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
 });

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/goatboy.glb');
  return <primitive object={gltf.scene} />;
};

const generateAudioResponse = async (prompt: string) => {
  const informationResponse = await fetch('/information.txt');
  const information = await informationResponse.text();
  const fullPrompt = `${information} 请根据以上彭孜勉(网名山羊，英文名Jimmy Peng)的个人信息，你作为彭孜勉本人，以男生第一人称，去回答问题${prompt}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-audio-preview",
    modalities: ["text", "audio"],
    audio: { voice: "alloy", format: "wav" },
    messages: [
      {
        role: "user",
        content: fullPrompt
      }
    ]
  });

  return response.choices[0].message.audio.data;
};

const ExpandableSection = ({ title, children, style }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      style={{ ...style, color: '#fff', zIndex: 10 }}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
        {title}
      </h2>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [message, setMessage] = useState('');
  const [isResponding, setIsResponding] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const responseAudioRef = useRef<HTMLAudioElement>(null);

  const handleExploreClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
    setShowMain(true);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      setIsResponding(true);
      try {
        const audioData = await generateAudioResponse(message);
        if (responseAudioRef.current) {
          responseAudioRef.current.src = `data:audio/wav;base64,${audioData}`;
          responseAudioRef.current.play();
          setIsAudioPlaying(true);
          responseAudioRef.current.onended = () => setIsAudioPlaying(false);
        }
      } catch (error) {
        console.error("Error generating audio response:", error);
      } finally {
        setIsResponding(false);
      }
    }
  };
  
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111', position: 'relative' }}>
      <audio ref={audioRef} src="/audio/KanyeWestMoon.mp3" autoPlay loop />
      <audio ref={responseAudioRef} />
      {!showMain ? (
        <>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center', zIndex: 10 }}>
            <h1 style={{ fontSize: '72px', margin: 0 }}>Welcome to My World!</h1>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>I&apos;m ShanYang🐐, <br></br>an AI Phd Student & Full Stack Developer</p>
            <motion.button 
              onClick={handleExploreClick} 
              style={{ fontSize: '24px', padding: '10px 20px', marginTop: '20px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', display: 'inline-flex', alignItems: 'center' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore My World <FaArrowRight style={{ marginLeft: '10px' }} />
            </motion.button>
          </div>
        </> 
      ) : (
        <>
          {/* Navigation Bar */}
          <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '20px', zIndex: 10, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', flex: 1, justifyContent: 'center' }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <Link href="/Projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
              <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
            </div>
            <button onClick={toggleMute} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}>
              {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
            </button>
          </nav>

          <Canvas camera={{ position: [0, 0, 5] }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls /> {/* Add OrbitControls */}
          </Canvas>


          {/* Quick Introduction & My Perspective */}
          <ExpandableSection title="👋 Quick Introduction" style={{ position: 'absolute', top: '10%', left: '5%' }}>
            <p>目前是 [浙江大学 & 上海某AI学院 联培博士 一年级]</p>
            <p>02年 | ENTJ/P | AI算法研究 | 全栈开发 | Security</p>
            <p>视觉感知 | 多模态 | AIGC | 具身智能</p>
            <p>（至少）有三个我：</p>
            <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
              <li>追求自洽，做有自我价值感的事情😇</li>
              <li>追求卓越，做有影响力的事情💥</li>
              <li>追求个性，冒险探索新鲜事物🙋</li>
            </ul>
            <p>未来想成为：</p>
            <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
              <li>professor</li>
              <li>startup founder</li>
            </ul>
          </ExpandableSection>

          {/* What I'm Good At */}
          <ExpandableSection title="😴 What I&apos;m Good At" style={{ position: 'absolute', top: '10%', right: '5%' }}>
            <ul>
              <li>AI算法（偏视觉）</li>
              <li>全栈开发（web、app、小程序等）</li>
              <li>LLM/AI Agent工程开发</li>
              <li>Web安全，AI安全</li>
              <li>各种AI产品的使用</li>
              <li>运营、采访、内容、设计、剪辑(浅)</li>
            </ul>
          </ExpandableSection>

          {/* My Life */}
          <ExpandableSection title="🤩 My Life" style={{ position: 'absolute', bottom: '10%', left: '5%' }}>
            <ul>
              <li>有感情很好的女朋友</li>
              <li>喜欢旅行，和不同的人交流，听故事</li>
              <li>说唱爱好者，纯度很高的哈人，经常去livehouse看演出</li>
              <li>健身入门中，想变猛男</li>
              <li>飞盘、篮球、足球、台球、……</li>
              <li>桌游（德扑就是玩梭哈）</li>
              <li>喜欢玲娜贝儿（治愈）</li>
            </ul>
          </ExpandableSection>

          {/* What I'm Doing Recently */}
          <ExpandableSection title="🤯 What I&apos;m Doing Recently" style={{ position: 'absolute', bottom: '10%', right: '5%' }}>
            <ul>
              <li>选择博士阶段的导师和研究方向🤔</li>
              <li>把hypatia产品做上线</li>
              <li>寻找AI创业方向</li>
            </ul>
          </ExpandableSection>

          {/* Siri-like Response Icon */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: isAudioPlaying ? 1 : 0 }} 
            transition={{ duration: 0.5 }} 
            style={{ position: 'absolute', bottom: '10%', right: '5%', color: '#fff', zIndex: 10 }}
          >
            <FaComment size={48} />
          </motion.div>

          {/* Message Input Box */}
          <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '10px', zIndex: 10 }}>
            <input 
              type="text" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              style={{  width: '300px', padding: '10px', borderRadius: '20px', border: 'none', background: 'rgba(255, 255, 255, 0.1)', color: '#fff'  }} 
            />
            <button 
              onClick={() => {
                handleSendMessage();
                setMessage(''); // 清空信息框内容
              }} 
              style={{ padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer'  }}
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}