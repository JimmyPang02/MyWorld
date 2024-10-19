'use client';

import Link from 'next/link'; // Import the Link component
import { FaCode, FaLightbulb, FaRobot, FaEye } from 'react-icons/fa'; // Import the icons

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', textAlign: 'center' }}>My Projects</h1>

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
            <p style={{ fontSize: '16px' }}>Building an AI-powered psychological counseling product.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaCode size={48} style={{ color: '#00ccff' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>SparkLab - AI Software Development Course Mentor & HackLead</h2>
            <p style={{ fontSize: '16px' }}>Mentoring and leading AI software development courses.</p>
          </div>
        </div>

        {/* Project 3 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaRobot size={48} style={{ color: '#ff6600' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>AI夏令营 - 多模态大模型高效微调 - 课题第1名</h2>
            <p style={{ fontSize: '16px' }}>Achieved first place in the multi-modal large model efficient fine-tuning project.</p>
          </div>
        </div>

        {/* Project 4 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#333', padding: '20px', borderRadius: '10px' }}>
          <FaEye size={48} style={{ color: '#66ff66' }} />
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>vivo科研实习 - 视觉感知多任务模型omnitasker项目</h2>
            <p style={{ fontSize: '16px' }}>Working on a visual perception multi-task model project at vivo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;