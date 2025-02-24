import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import pairs from "../images/pairs.png"; 

const Lotus3D = ({ textureUrl }) => {
  const meshRef = useRef();
  const texture = useTexture(textureUrl);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      const newX = mouse.x * Math.PI * 2;
      const newY = mouse.y * Math.PI * 0.1;

      targetRotation.current.x = newY;
      targetRotation.current.y = newX;

      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation.current.y, 0.03);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotation.current.x, 0.03);
    }
  });

  return (
    <mesh ref={meshRef} scale={[2.2, 2.2, 2.2]} position={[0, 0.5, 0]}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} transparent />
    </mesh>
  );
};

const LotusScene = () => {
  const [text, setText] = useState({
    topLeft: "",
    topRight: "",
    bottomLeft: "",
    bottomRight: "",
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setText(
        event.clientX > window.innerWidth / 2
          ? {
              topLeft: "Advanced Shopper Tracking & Analysis Network",
              topRight: "Smart Handling of Efficient Logistics Flow",
              bottomLeft: "AI Theft Detection",
              bottomRight: "Creating Impact Together",
            }
          : {
              topLeft: "Dr. Astan",
              topRight: "Shelf",
              bottomLeft: "SafeAI",
              bottomRight: "Pair for Future",
            }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -10, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, x: 10, scale: 0.9, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-zinc-900">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <Lotus3D textureUrl={pairs} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <AnimatePresence>
        <motion.h1
          key={text.topLeft}
          className="absolute italic top-8 left-8 md:top-20 md:left-16 text-white text-lg md:text-2xl font-bold font-mono"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text.topLeft}
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence>
        <motion.h1
          key={text.topRight}
          className="absolute tracking-tighter top-8 right-8 md:top-16 md:right-20 text-white text-lg md:text-2xl font-semibold font-mono"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text.topRight}
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence>
        <motion.h1
          key={text.bottomLeft}
          className="absolute bottom-8 left-8 md:bottom-28 md:left-40 text-white text-lg md:text-2xl font-semibold font-mono"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text.bottomLeft}
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence>
        <motion.h1
          key={text.bottomRight}
          className="absolute bottom-8 right-8 md:bottom-28 md:right-40 text-white text-lg md:text-2xl font-semibold font-mono"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text.bottomRight}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default LotusScene;
