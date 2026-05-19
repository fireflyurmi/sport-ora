'use client';

import React, { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = resolvedTheme === 'dark';

  if (!isMounted) {
    return (
      <div className="w-16.5 h-8 rounded-full bg-slate-200 dark:bg-slate-800/50 animate-pulse shrink-0" />
    );
  }

  return (
    <div className="flex items-center select-none shrink-0">
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />
        
        {/* Toggle Pill Background Track */}
        <div className="w-16.5 h-8 rounded-full transition-all duration-300 relative
          bg-slate-200 border border-slate-300
          peer-checked:bg-linear-to-r peer-checked:from-cyan-500 peer-checked:to-blue-600 peer-checked:border-transparent
          after:content-[''] after:absolute after:top-0.75 after:left-1 
          after:bg-white after:rounded-full after:h-6 after:w-6 
          after:transition-all after:duration-300 after:shadow-md
          peer-checked:after:translate-x-8.5
          flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400"
        >
          
          <span className={`z-10 order-2 pl-1 transition-colors duration-200 ${!isDark ? 'text-slate-600' : 'text-transparent'}`}>
            Off
          </span>
          <span className={`z-10 order-1 pr-1 transition-colors duration-200 ${isDark ? 'text-white font-extrabold' : 'text-transparent'}`}>
            On
          </span>

          <div className={`absolute top-1.75 left-2 w-4 h-4 transition-all duration-300 transform pointer-events-none z-20
            ${isDark ? 'translate-x-8.5 rotate-180 opacity-100 text-blue-600' : 'opacity-0 scale-50'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;