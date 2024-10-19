'use client';

import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls
import { FaArrowRight, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Import the icons
import { motion } from 'framer-motion'; // Import framer-motion for animations
import Link from 'next/link'; // Import the Link component

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/goatboy.glb');
  return <primitive object={gltf.scene} />;
};

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleExploreClick = () => {
    setShowMain(true);
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111', position: 'relative', overflow: 'hidden' }}>
      <audio ref={audioRef} src="/audio/KanyeWestMoon.mp3" autoPlay loop />
      {!showMain ? (
        <>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center', zIndex: 10 }}
          >
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
          </motion.div>
        </> 
      ) : (
        <>
          {/* Navigation Bar */}
          <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '20px', zIndex: 10, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', flex: 1, justifyContent: 'center' }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <Link href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
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

          {/* About Me */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            style={{ position: 'absolute', top: '20%', left: '5%', color: '#fff', zIndex: 10 }}
          >
            <h2>👋 Quick Introduction</h2>
            <p>Hello, I&apos;m Goat🐐, looking forward to becoming friends with you~</p>
            <p>Currently a first-year joint PhD student at Zhejiang University & Shanghai AI Institute</p>
            <p>02 | ENTJ/P | AI Algorithm Research | Full Stack Developer | Security</p>
            <p>Visual Perception | Multimodal | AIGC | Embodied Intelligence</p>
          </motion.div>

          {/* What I'm Doing Recently */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }} 
            style={{ position: 'absolute', top: '60%', left: '5%', color: '#fff', zIndex: 10 }}
          >
            <h2>🤯 What I&apos;m Doing Recently</h2>
            <p>Thinking about choosing a PhD advisor and research direction</p>
            <p>Launching Hypatia product</p>
            <p>Exploring AI startup directions</p>
          </motion.div>

          {/* What I'm Good At */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.6 }} 
            style={{ position: 'absolute', top: '80%', left: '5%', color: '#fff', zIndex: 10 }}
          >
            <h2>😴 What I&apos;m Good At</h2>
            <p>AI Algorithms, Front-end Development, Back-end Development, LLM/AI Agent Engineering, Web Security, AI Security, AI Product Usage</p>
            <p>New Media Operations, Interviews, Content, Design, Editing</p>
          </motion.div>
        </>
      )}
    </div>
  );
}