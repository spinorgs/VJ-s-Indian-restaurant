import React from 'react';
import {motion} from 'framer-motion';
export const money=n=>`$${n.toFixed(2)}`;
export const photos=['/images/hero.jpg','/images/paneer.jpg','/images/biryani.jpg','/images/interior.jpg'];
export function Reveal({children,className=''}){return <motion.div className={className} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.6}}>{children}</motion.div>}
