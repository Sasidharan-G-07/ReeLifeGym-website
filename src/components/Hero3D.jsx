import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const LuxuryDumbbell = () => {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    mesh.current.rotation.y = time * 0.4;
    mesh.current.rotation.z = Math.cos(time * 0.2) * 0.1;
  });

  return (
    <group ref={mesh} scale={1.2}>
      {/* Handle */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 1.4, 32]} />
        <meshStandardMaterial 
          color="#C9933A" 
          metalness={1} 
          roughness={0.1} 
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Heavy Weights */}
      {[0.4, 0.55].map((pos, i) => (
        <group key={i}>
          <mesh position={[pos, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.4 - i * 0.05, 0.4 - i * 0.05, 0.2, 32]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} envMapIntensity={1} />
          </mesh>
          <mesh position={[-pos, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.4 - i * 0.05, 0.4 - i * 0.05, 0.2, 32]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.2} envMapIntensity={1} />
          </mesh>
        </group>
      ))}

      {/* Decorative End Caps */}
      <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#C9933A" metalness={1} roughness={0.1} />
      </mesh>
      <mesh position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#C9933A" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
        
        {/* Pro Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={150} color="#C9933A" />
        <pointLight position={[-10, -10, -10]} intensity={100} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <LuxuryDumbbell />
          </Float>
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
