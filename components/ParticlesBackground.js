"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Mobile-optimized particle configuration
  const mobileOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 30,
    particles: {
      number: { value: 20, density: { enable: true, value_area: 800 } },
      color: {
        value: ["#0C3728", "#D4AF37"]
      },
      shape: { type: "circle" },
      opacity: {
        value: 0.1,
        random: true,
        anim: { enable: false }
      },
      size: {
        value: 3,
        random: { enable: true, minimumValue: 1 }
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" }
      },
      links: {
        enable: false
      }
    },
    detectRetina: true
  };

  // Desktop particle configuration
  const desktopOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: {
        value: ["#0C3728", "#D4AF37", "#B8A082"]
      },
      shape: { type: "circle" },
      opacity: {
        value: 0.15,
        random: true,
        anim: { enable: true, speed: 1.5, opacity_min: 0.05 }
      },
      size: {
        value: 4,
        random: { enable: true, minimumValue: 2 }
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" }
      },
      links: {
        enable: true,
        distance: 120,
        color: "#0C3728",
        opacity: 0.08,
        width: 1
      }
    },
    detectRetina: true
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={isMobile ? mobileOptions : desktopOptions}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    />
  );
}
