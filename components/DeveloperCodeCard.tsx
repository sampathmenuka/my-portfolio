import React from 'react';

interface BadgeProps {
  name: string;
  className: string;
  delay: string;
  duration: string;
  icon?: React.ReactNode;
}

function FloatingBadge({ name, className, delay, duration, icon }: BadgeProps) {
  return (
    <div
      className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full border bg-[#111827]/90 text-sm font-medium shadow-lg backdrop-blur-sm select-none transition-transform duration-300 hover:scale-110 z-20 ${className}`}
      style={{
        animation: `float ${duration} ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span className="text-xs tracking-wider">{name}</span>
    </div>
  );
}

export default function DeveloperCodeCard() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto aspect-video sm:aspect-auto select-none group" data-aos="fade-left" data-aos-delay="300">
      
      {/* Subtle background green glow */}
      <div className="absolute inset-0 bg-[#4ade80]/5 rounded-2xl blur-3xl -z-10 group-hover:bg-[#4ade80]/10 transition-all duration-700"></div>
      
      {/* Glow Ring border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4ade80]/20 via-[#64ffda]/10 to-[#4ade80]/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

      {/* Editor Main Window */}
      <div className="relative bg-[#16162a] border border-[#374151] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
        
        {/* Editor Top Bar / Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-[#374151]">
          {/* Circular window control dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80 hover:opacity-100 transition-opacity"></span>
            <span className="w-3 h-3 rounded-full bg-[#f59e0b] opacity-80 hover:opacity-100 transition-opacity"></span>
            <span className="w-3 h-3 rounded-full bg-[#10b981] opacity-80 hover:opacity-100 transition-opacity"></span>
          </div>

          {/* Active file tab */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#16162a] rounded-t-lg border-t border-x border-[#374151] text-xs text-[#ccd6f6] font-mono select-none">
            <span className="text-[#64ffda]">TypeScript</span>
            <span>developer.ts</span>
          </div>

          {/* Terminal / Edit Status */}
          <div className="text-[10px] text-[#8892b0] font-mono hidden sm:block">
            UTF-8
          </div>
        </div>

        {/* Code Content Editor Area */}
        <div className="p-6 font-mono text-sm leading-relaxed text-[#a8b2d1] overflow-x-auto">
          <pre>
            <div>
              <span className="text-[#64ffda]">const</span>{' '}
              <span className="text-[#ccd6f6]">developer</span> = {'{'}
            </div>
            <div className="pl-4">
              <span className="text-[#a8b2d1]">name</span>:{' '}
              <span className="text-[#4ade80]">&quot;Sampath Menuka&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-[#a8b2d1]">role</span>:{' '}
              <span className="text-[#4ade80]">&quot;Full Stack Developer&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-[#a8b2d1]">skills</span>: [
            </div>
            <div className="pl-8 text-[#4ade80]">
              &quot;Next.js&quot;,<br />
              &quot;Node.js&quot;,<br />
              &quot;Spring Boot&quot;,<br />
              &quot;Java&quot;
            </div>
            <div className="pl-4">
              ],
            </div>
            <div className="pl-4">
              <span className="text-[#a8b2d1]">passion</span>:{' '}
              <span className="text-[#4ade80]">&quot;Building great products&quot;</span>
            </div>
            <div>
              {'};'}
              <span className="inline-block w-2.5 h-4 bg-[#4ade80] ml-1 align-middle cursor-blink"></span>
            </div>
          </pre>
        </div>
      </div>

      {/* Floating Badges */}
      
      {/* Next.js Badge */}
      <FloatingBadge
        name="Next.js"
        className="top-[-16px] left-[-16px] md:left-[-32px] border-white/20 text-white"
        delay="0.5s"
        duration="6s"
        icon={
          <svg className="w-3.5 h-3.5" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="90" fill="white"/>
            <path d="M140.082 121.764L76.8854 41.2001H60V138.8H73.3438V60.9168L126.969 128.932C131.906 126.837 136.295 124.428 140.082 121.764Z" fill="black"/>
            <path d="M110 41.2001H123.344V138.8H110V41.2001Z" fill="black"/>
          </svg>
        }
      />

      {/* Node.js Badge */}
      <FloatingBadge
        name="Node.js"
        className="top-[-28px] right-[40px] md:right-[60px] border-[#4ade80]/20 text-[#4ade80]"
        delay="1.5s"
        duration="5s"
        icon={
          <svg className="w-3.5 h-3.5 text-[#4ade80]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.04 19.34l-3.32-1.92V13.6L9.04 15.5v3.84zm0-5.11l-3.32-1.91v-3.82l3.32 1.91v3.82zm5.92 5.11l3.32-1.92V13.6l-3.32 1.9v3.84zm0-5.11l3.32-1.91v-3.82l-3.32 1.91v3.82zM12 9.47L8.68 7.56 12 5.65l3.32 1.91L12 9.47zm0 5.12L8.68 12.68 12 10.77l3.32 1.91-3.32 1.91zm0-10.23L4.16 8.76v8.48L12 21.76l7.84-4.52V8.76L12 4.36z"/>
          </svg>
        }
      />

      {/* Spring Boot Badge */}
      <FloatingBadge
        name="Spring Boot"
        className="top-[40%] right-[-32px] md:right-[-48px] border-[#22c55e]/20 text-[#22c55e]"
        delay="0s"
        duration="7s"
        icon={
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.03 2.05c-5.5 0-9.97 4.47-9.97 9.97 0 3.73 2.05 6.98 5.1 8.68-.07-.37-.12-.76-.12-1.17 0-3.32 2.69-6.01 6.01-6.01.63 0 1.22.1 1.78.28.37-1.42 1.34-2.58 2.65-3.18-.08-.43-.13-.88-.13-1.34.01-4.01 3.26-7.23 7.23-7.23H24c.02.43-.04.88-.17 1.32-.6 1.99-2.22 3.51-4.26 3.99.12.59.18 1.21.18 1.83 0 5.5-4.47 9.97-9.97 9.97-1.12 0-2.2-.19-3.21-.52-.39-.13-.77-.29-1.14-.49-.49.49-1.17.79-1.92.79-1.5 0-2.72-1.22-2.72-2.72 0-.69.26-1.32.68-1.8-.75-.85-1.2-1.98-1.2-3.22 0-2.69 2.18-4.88 4.88-4.88.75 0 1.47.17 2.11.48.56-.56 1.33-.9 2.18-.9 1.71 0 3.1 1.39 3.1 3.1 0 .61-.18 1.18-.49 1.66 1.05.51 1.85 1.51 2.12 2.72.63-.44 1.39-.7 2.22-.7 2.09 0 3.79 1.7 3.79 3.79 0 .42-.07.82-.19 1.2 2.63-1.74 4.37-4.76 4.37-8.19 0-5.5-4.47-9.97-9.97-9.97zm0 15.65c-3.14 0-5.68-2.54-5.68-5.68s2.54-5.68 5.68-5.68 5.68 2.54 5.68 5.68-2.54 5.68-5.68 5.68zm-.01-8.52c-1.57 0-2.84 1.27-2.84 2.84s1.27 2.84 2.84 2.84 2.84-1.27 2.84-2.84-1.27-2.84-2.84-2.84z"/>
          </svg>
        }
      />

      {/* Java Badge */}
      <FloatingBadge
        name="Java"
        className="bottom-[-16px] right-[-16px] md:right-[-24px] border-[#ea580c]/20 text-[#ea580c]"
        delay="2s"
        duration="5.5s"
        icon={
          <svg className="w-3.5 h-3.5 text-[#ea580c]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.46 17.1c-.26-.14-.52-.27-.8-.4-.73-.3-1.4-.64-2.12-.95-.36-.16-.76-.32-1.15-.49-.78-.34-1.57-.69-2.34-1.07l-.76-.37c-.75-.38-1.52-.77-2.25-1.2l-.72-.42c-.75-.45-1.48-.94-2.22-1.42l-.58-.39c-.76-.52-1.51-1.05-2.24-1.62-.25-.2-.5-.4-.73-.62l-.46-.43c-.7-.67-1.35-1.37-1.95-2.12-.3-.37-.58-.75-.84-1.15l-.26-.41c-.48-.79-.88-1.63-1.2-2.5.42.22.84.45 1.28.66.7.34 1.41.67 2.14.97.36.15.75.31 1.12.44.75.29 1.51.57 2.29.83l.74.24c.73.23 1.48.45 2.22.65l.7.17c.72.16 1.46.3 2.2.43l.54.08c.75.11 1.5.21 2.26.28.24.02.5.04.75.05h.5c.78.02 1.57.02 2.36-.02.43-.02.87-.05 1.3-.1 1.15-.14 2.29-.39 3.42-.74-1.15 1-2.45 1.83-3.85 2.47-1.18.54-2.43.95-3.71 1.2-.5.1-.99.18-1.5.24-.76.09-1.52.15-2.29.17l-.73.02H11.5c-.75-.02-1.5-.06-2.25-.13l-.6-.07c-.75-.1-1.5-.23-2.24-.39L5.9 14.1c-.72-.2-1.43-.44-2.13-.71l-.47-.19c-.7-.3-1.37-.62-2.03-.98l-.22-.12c-.52-.31-1.01-.66-1.5-1.03 1.03.88 2.2 1.62 3.47 2.2 1.13.52 2.32.93 3.55 1.22l.73.17c.73.16 1.48.29 2.23.4l.65.08c.74.1 1.5.17 2.25.22.25.02.5.03.75.04.73.02 1.46.02 2.19-.01l.73-.03c.75-.05 1.5-.12 2.24-.22.5-.07.99-.15 1.48-.25.75-.15 1.48-.34 2.2-.55.72-.21 1.43-.46 2.13-.74.68-.27 1.36-.57 2.02-.9-.67.43-1.37.83-2.1 1.2-.73.37-1.5.71-2.27 1.02a26.24 26.24 0 01-4.7 1.34c-.5.08-.99.14-1.5.18-.75.06-1.5.1-2.25.12h-.75c-.73.01-1.46 0-2.19-.03l-.73-.03c-.75-.06-1.5-.15-2.24-.27l-.6-.11c-.72-.15-1.43-.32-2.14-.53l-.53-.17c-.7-.25-1.39-.53-2.07-.85l-.26-.12c-.52-.27-1.02-.57-1.5-.9 1.12.79 2.38 1.44 3.73 1.95 1.1.42 2.26.73 3.44.97l.72.13c.73.12 1.48.22 2.22.3l.63.05c.75.06 1.5.1 2.25.12.25.01.5.02.75.02.73.01 1.46 0 2.19-.03h.73c.75-.05 1.5-.12 2.24-.22l.5-.08c.74-.13 1.47-.29 2.2-.48l.49-.14c.72-.23 1.42-.5 2.1-.81.67-.3 1.33-.64 1.97-1.01-.76.33-1.54.63-2.34.9-.76.26-1.54.49-2.33.69-.5.12-.99.22-1.5.31-.76.13-1.52.23-2.29.31-.24.02-.5.04-.75.05H11.5c-.73.02-1.46.02-2.19 0H8.5c-.75-.05-1.5-.12-2.24-.22-.24-.03-.49-.07-.73-.11l-.5-.08c-.73-.13-1.46-.29-2.17-.48l-.27-.08a15.82 15.82 0 01-1.95-.65c.67.35 1.38.67 2.12.96.72.28 1.46.53 2.22.75.36.1.73.2 1.1.28.76.17 1.53.31 2.31.43l.74.1c.73.08 1.48.15 2.22.2l.7.07c.72.05 1.46.08 2.2.1h.54c.75.01 1.5 0 2.26-.03.24-.01.5-.02.75-.04l.5-.05c.77-.08 1.52-.19 2.27-.33.43-.08.87-.18 1.3-.29.5-.13.99-.28 1.48-.44.75-.24 1.48-.52 2.2-.83.72-.31 1.43-.65 2.13-1.02.68-.37 1.36-.77 2.02-1.19zM12 21c-5.5 0-9.97-4.47-9.97-9.97 0-1.8.48-3.5 1.3-4.97 2.45.69 4.7 2.12 6.45 4.09l.48.55c1.47 1.7 3.32 3.01 5.43 3.82 1.15.44 2.37.75 3.61.9-1.83 2.96-5.18 4.98-9.02 5.58-.93.14-1.88.22-2.84.22l-.44-.02V21z"/>
          </svg>
        }
      />

      {/* MongoDB Badge */}
      <FloatingBadge
        name="MongoDB"
        className="bottom-[35%] left-[-40px] md:left-[-60px] border-[#10b981]/20 text-[#10b981]"
        delay="1s"
        duration="6.5s"
        icon={
          <svg className="w-3.5 h-3.5 text-[#10b981]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.15 22.44c-.7 0-1.32-.46-1.52-1.13a16.89 16.89 0 00-.77-2.12c-.22-.49-.49-1.01-.81-1.54-.4-.67-.88-1.36-1.42-2.07l-.76-.98c-.5-.65-1.02-1.29-1.51-1.92L9.42 11.2c-.44-.57-.84-1.13-1.19-1.68-.42-.65-.77-1.31-1.04-1.99a9.66 9.66 0 01-.6-2.01c-.13-.73-.13-1.48-.02-2.22l.24-1.22C7.07 1 7.42.3 8 .03c.5-.23 1.09-.23 1.58.01A9.78 9.78 0 0111.4 1.2c.43.34.84.71 1.22 1.13a9.67 9.67 0 011.66 2.44 9.8 9.8 0 01.76 2.12c.11.75.11 1.51 0 2.26l-.24 1.22c-.2.75-.48 1.48-.84 2.19l-.54 1.02c-.34.65-.74 1.29-1.18 1.9l-.76.99c-.4.53-.78 1.07-1.14 1.63l-.48.74c-.3.49-.58.99-.82 1.51l-.22.47c-.24.52-.45 1.05-.62 1.6l-.16.55c-.15.54-.26 1.09-.34 1.65-.08.43-.13.88-.13 1.32-.01.5.24.97.68 1.2.44.23.97.23 1.4-.01.5-.26.9-.66 1.2-1.15 1.03-1.74 1.83-3.64 2.37-5.63.5-1.84.73-3.74.7-5.65.02-1.12-.17-2.22-.53-3.26-.14-.39-.3-.77-.49-1.14-.13-.39-.29-.77-.49-1.14.67.35 1.29.8 1.83 1.34.54.54.99 1.16 1.34 1.83 1.05 2.05 1.56 4.34 1.49 6.64-.07 2.3-.64 4.56-1.68 6.6-.54 1.05-1.24 2.01-2.07 2.85-.75.76-1.72 1.2-2.75 1.23h-.2zM12 21c-5.5 0-9.97-4.47-9.97-9.97 0-1.8.48-3.5 1.3-4.97C5.78 6.75 8.03 8.18 9.78 10.15l.48.55c1.47 1.7 3.32 3.01 5.43 3.82 1.15.44 2.37.75 3.61.9-1.83 2.96-5.18 4.98-9.02 5.58-.93.14-1.88.22-2.84.22l-.44-.02V21z"/>
          </svg>
        }
      />

      {/* MySQL Badge */}
      <FloatingBadge
        name="MySQL"
        className="bottom-[-28px] left-[30%] border-[#00758f]/20 text-[#00758f]"
        delay="2.5s"
        duration="4.8s"
        icon={
          <svg className="w-3.5 h-3.5 text-[#00758f]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.03 2.05c-5.5 0-9.97 4.47-9.97 9.97 0 3.73 2.05 6.98 5.1 8.68-.07-.37-.12-.76-.12-1.17 0-3.32 2.69-6.01 6.01-6.01.63 0 1.22.1 1.78.28.37-1.42 1.34-2.58 2.65-3.18-.08-.43-.13-.88-.13-1.34.01-4.01 3.26-7.23 7.23-7.23H24c.02.43-.04.88-.17 1.32-.6 1.99-2.22 3.51-4.26 3.99.12.59.18 1.21.18 1.83 0 5.5-4.47 9.97-9.97 9.97-1.12 0-2.2-.19-3.21-.52-.39-.13-.77-.29-1.14-.49-.49.49-1.17.79-1.92.79-1.5 0-2.72-1.22-2.72-2.72 0-.69.26-1.32.68-1.8-.75-.85-1.2-1.98-1.2-3.22 0-2.69 2.18-4.88 4.88-4.88.75 0 1.47.17 2.11.48.56-.56 1.33-.9 2.18-.9 1.71 0 3.1 1.39 3.1 3.1 0 .61-.18 1.18-.49 1.66 1.05.51 1.85 1.51 2.12 2.72.63-.44 1.39-.7 2.22-.7 2.09 0 3.79 1.7 3.79 3.79 0 .42-.07.82-.19 1.2 2.63-1.74 4.37-4.76 4.37-8.19 0-5.5-4.47-9.97-9.97-9.97z"/>
          </svg>
        }
      />

    </div>
  );
}
