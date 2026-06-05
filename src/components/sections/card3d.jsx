import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FloatingBox() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Floating Up Down
    meshRef.current.position.y = Math.sin(time) * 0.4;

    // Rotation
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <section className="h-screen bg-sky-100 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 2, 2]} />

        <FloatingBox />
      </Canvas>
    </section>
  );
}