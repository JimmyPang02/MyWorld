import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>ShanYang&apos;s World</title>
        <meta name="description" content="彭山羊的自我介绍" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}