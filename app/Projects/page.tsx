'use client';

import Link from 'next/link'; // Import the Link component
import { FaCode, FaLightbulb, FaRobot, FaEye } from 'react-icons/fa'; // Import the icons

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', padding: '20px' }}>

      {/* Navigation Bar */}
      <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '20px', zIndex: 10, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '20px', flex: 1, justifyContent: 'center' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link href="/Projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
            <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>

      {/* Project List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                {/* Project 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaLightbulb size={48} style={{ color: '#ffcc00' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>EP 2024 - Hypatia - An AI泛心理咨询产品</h2>
            <p style={{ fontSize: '16px' }}>Building an AI-powered psychological counseling product. 已入驻浙大紫金创业元空间</p>
          </div>
        </div>

        {/* Project 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaCode size={48} style={{ color: '#00ccff' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>SparkLab - AI Software Development Course Mentor & HackLead</h2>
            <p style={{ fontSize: '16px' }}>Mentoring and leading AI software development courses. 设计课程大纲、学习roadmap、实验代码以及线上直播教学为期8天的bootcamp课程</p>
          </div>
        </div>

        {/* Project 3 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaRobot size={48} style={{ color: '#ff6600' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>AI夏令营 - 多模态大模型高效微调 - 课题第1名</h2>
            <p style={{ fontSize: '16px' }}>Achieved first place in the multi-modal large model efficient fine-tuning project. 在Dr. Yi Wang和 Prof. Yanwei Fu指导下，构建高质量文生图微调数据集，并设计高效的微调策略</p>
          </div>
        </div>

        {/* Project 4 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
              <FaEye size={48} style={{ color: '#66ff66' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>vivo科研实习 - 视觉感知多任务模型omnitasker项目</h2>
            <p style={{ fontSize: '16px' }}>Working on a visual perception multi-task model project at vivo. 参与将应用于VIVO手机影像算法中的视觉感知多任务模型omnitasker项目</p>
          </div>
        </div>

        {/* Project 5 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaCode size={48} style={{ color: '#00ccff' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>视觉感知&域泛化研究</h2>
            <p style={{ fontSize: '16px' }}>研究通过迁移学习技术提高视觉感知任务的准确率和鲁棒性，提出了一种新的语义分割域泛化方法</p>
          </div>
        </div>

        {/* Project 6 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaRobot size={48} style={{ color: '#ff6600' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>文泉ChatSpring</h2>
            <p style={{ fontSize: '16px' }}>23.03 OpenAI 刚开放GPT API时期，做的一款AI工具箱APP. 利用GPT API和预制system prompt的方式来构建不同的AI ChatBot</p>
          </div>
        </div>

        {/* Project 7 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaEye size={48} style={{ color: '#66ff66' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>GenBlog智博客</h2>
            <p style={{ fontSize: '16px' }}>23.03 OpenAI 刚开放GPT API时期，做的一款AI博客网站. 利用GPT API加入了一些AI Feature</p>
          </div>
        </div>

        {/* Project 8 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaCode size={48} style={{ color: '#00ccff' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>inforsec夏令营</h2>
            <p style={{ fontSize: '16px' }}>一个网络安全夏令营. 学习内容很杂，从软件供应链安全、邮件安全、僵尸网络等，学到物联网安全、AI安全</p>
          </div>
        </div>

        {/* Project 9 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaRobot size={48} style={{ color: '#ff6600' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>新冠患者病情预测</h2>
            <p style={{ fontSize: '16px' }}>与某省人民医院的合作项目，基于COVID-19临床患者信息表，利用深度学习算法预测病情</p>
          </div>
        </div>

        {/* Project 10 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaEye size={48} style={{ color: '#66ff66' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>古代文物成分分析</h2>
            <p style={{ fontSize: '16px' }}>全国大学生数学建模竞赛的题目，拿了省一. 基于机器学习等方法，分析古代文物玻璃珠的分类规律、化学成分含量、微量成分含量等</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;