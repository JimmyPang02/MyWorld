'use client';

import Link from 'next/link'; // Import the Link component
import { FaEnvelope, FaGithub, FaTwitter, FaGlobe, FaPenFancy } from 'react-icons/fa'; // Import the icons

const Contact = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '50%', padding: '20px', background: '#333', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Contact Me</h1>

        {/* Navigation Bar */}
        <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '20px', zIndex: 10, color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '20px', flex: 1, justifyContent: 'center' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link href="/Projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
            <Link href="/Contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </div>
        </nav>
        
        {/* Contact Information */}
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaEnvelope size={24} />
            <a href="mailto:jimmypeng@qq.com" style={{ color: '#fff', textDecoration: 'none' }}>jimmypeng@qq.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaGithub size={24} />
            <a href="https://github.com/JimmyPang02" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>GitHub</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaPenFancy size={24} />
            <a href="https://okjk.co/PyCfb2" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>即刻</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaGlobe size={24} />
            <a href="https://blog.goatpeng.cn/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>个人网站</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaTwitter size={24} />
            <a href="https://twitter.com/JimmyPeng02" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;