"use client";

import { HeroUIProvider as HerouiProvider } from "@heroui/react";

export function HeroUiProvider({ children }: { children: React.ReactNode }) {
  return <HerouiProvider className="w-full">{children}</HerouiProvider>;
}
