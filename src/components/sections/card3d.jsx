import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <section className="h-screen">

      <Canvas camera={{ position: [0, 0, 5] }}>
  <ambientLight intensity={2} />
  <directionalLight position={[2, 2, 2]} />

  <Box />
</Canvas>

    </section>
  );
}