import React from 'react';

// Fixed positions keep decorative motion stable across renders.
export default function FloatingParticles({count=22}){return <div className="floating-particles" aria-hidden="true">{Array.from({length:count},(_,i)=><span key={i} style={{'--x':`${(i*37+9)%100}%`,'--y':`${(i*23+7)%100}%`,'--size':`${2+i%3}px`,'--duration':`${12+i%7*2}s`,'--delay':`${-i*1.7}s`,'--drift':`${i%2?24:-24}px`}}/>)}</div>}
