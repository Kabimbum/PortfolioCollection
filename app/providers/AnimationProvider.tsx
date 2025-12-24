"use client";

import { createContext, useContext, useState } from "react";

const AnimationContext = createContext<any>(null);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState(0);

  const trigger = () => setKey((prev: number) => prev + 1);

  return (
    <AnimationContext.Provider value={{ key, trigger }}>
      {children}
    </AnimationContext.Provider>
  );
}

export const useAnimationTrigger = () => useContext(AnimationContext);
