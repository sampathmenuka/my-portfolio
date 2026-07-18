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
      <div className="absolute inset-0 bg-green-accent/5 rounded-2xl blur-3xl -z-10 group-hover:bg-green-accent/10 transition-all duration-700"></div>
      
      {/* Glow Ring border effect */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-green-accent/20 via-green-teal/10 to-green-accent/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

      {/* Editor Main Window */}
      <div className="relative bg-dark-accent border border-[#374151] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
        
        {/* Editor Top Bar / Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-[#374151]">
          {/* Circular window control dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80 hover:opacity-100 transition-opacity"></span>
            <span className="w-3 h-3 rounded-full bg-[#f59e0b] opacity-80 hover:opacity-100 transition-opacity"></span>
            <span className="w-3 h-3 rounded-full bg-[#10b981] opacity-80 hover:opacity-100 transition-opacity"></span>
          </div>

          {/* Active file tab */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-dark-accent rounded-t-lg border-t border-x border-[#374151] text-xs text-lightest-slate font-mono select-none">
            <span className="text-green-teal">TypeScript</span>
            <span>developer.ts</span>
          </div>

          {/* Terminal / Edit Status */}
          <div className="text-[10px] text-slate-gray font-mono hidden sm:block">
            UTF-8
          </div>
        </div>

        {/* Code Content Editor Area */}
        <div className="p-6 font-mono text-sm leading-relaxed text-light-slate overflow-x-auto">
          <pre>
            <div>
              <span className="text-green-teal">const</span>{' '}
              <span className="text-lightest-slate">developer</span> = {'{'}
            </div>
            <div className="pl-4">
              <span className="text-light-slate">name</span>:{' '}
              <span className="text-green-accent">&quot;Sampath Menuka&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-light-slate">role</span>:{' '}
              <span className="text-green-accent">&quot;Full Stack Developer&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-light-slate">skills</span>: [
            </div>
            <div className="pl-8 text-green-accent">
              &quot;Next.js&quot;,<br />
              &quot;Node.js&quot;,<br />
              &quot;Spring Boot&quot;,<br />
              &quot;Java&quot;
            </div>
            <div className="pl-4">
              ],
            </div>
            <div className="pl-4">
              <span className="text-light-slate">passion</span>:{' '}
              <span className="text-green-accent">&quot;Building great products&quot;</span>
            </div>
            <div>
              {'};'}
              <span className="inline-block w-2.5 h-4 bg-green-accent ml-1 align-middle cursor-blink"></span>
            </div>
          </pre>
        </div>
      </div>

      {/* Floating Badges */}
      
      {/* Next.js Badge */}
      <FloatingBadge
        name="Next.js"
        className="-top-4 -left-4 md:-left-8 border-white/20 text-white"
        delay="0.5s"
        duration="6s"
        icon={<img src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-3.5 h-3.5 invert" />}
      />

      {/* Node.js Badge */}
      <FloatingBadge
        name="Node.js"
        className="-top-7 right-10 md:right-15 border-green-accent/20 text-green-accent"
        delay="1.5s"
        duration="5s"
        icon={<img src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-3.5 h-3.5" />}
      />

      {/* Spring Boot Badge */}
      <FloatingBadge
        name="Spring Boot"
        className="top-[40%] -right-8 md:-right-12 border-[#22c55e]/20 text-[#22c55e]"
        delay="0s"
        duration="7s"
        icon={<img src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg" alt="Spring Boot" className="w-3.5 h-3.5" />}
      />

      {/* Java Badge */}
      <FloatingBadge
        name="Java"
        className="-bottom-4 -right-4 md:-right-6 border-[#ea580c]/20 text-[#ea580c]"
        delay="2s"
        duration="5.5s"
        icon={<img src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg" alt="Java" className="w-3.5 h-3.5" />}
      />

      {/* MongoDB Badge */}
      <FloatingBadge
        name="MongoDB"
        className="bottom-[35%] -left-10 md:-left-15 border-[#10b981]/20 text-[#10b981]"
        delay="1s"
        duration="6.5s"
        icon={<img src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-3.5 h-3.5" />}
      />

      {/* MySQL Badge */}
      <FloatingBadge
        name="MySQL"
        className="-bottom-7 left-[30%] border-[#00758f]/20 text-[#00758f]"
        delay="2.5s"
        duration="4.8s"
        icon={<img src="https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg" alt="MySQL" className="w-3.5 h-3.5" />}
      />

    </div>
  );
}
