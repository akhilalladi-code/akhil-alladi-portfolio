"use client";

import {AnimatePresence,motion,useReducedMotion} from "framer-motion";
import {usePathname} from "next/navigation";
import type {ReactNode} from "react";

export default function PageTransition({children}:{children:ReactNode}){
 const pathname=usePathname();
 const reduce=useReducedMotion();
 return <AnimatePresence mode="wait" initial={false}>
  <motion.div key={pathname} initial={reduce?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={reduce?{opacity:1}:{opacity:0,y:-6}} transition={{duration:reduce?0:.32,ease:[.22,.7,.2,1]}}>
   {children}
  </motion.div>
 </AnimatePresence>;
}
