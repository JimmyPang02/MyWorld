import './globals.css';
import { ReactNode } from 'react';
// import AudioPlayer from './components/AudioPlayer'; // Import the AudioPlayer component
// import NavBar from './components/NavBar'; // Import the NavBar component

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>ShanYang&apos;s World</title>
        <meta name="description" content="彭山羊的自我介绍" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}