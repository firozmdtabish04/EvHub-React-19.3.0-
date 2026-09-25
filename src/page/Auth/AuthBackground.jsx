import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

function Stars() {
  const ref = useRef();

  const sphere = useMemo(() => {
    const arr = new Float32Array(3000);

    for (let i = 0; i < 3000; i++) {
      arr[i] = (Math.random() - 0.5) * 12;
    }

    return arr;
  }, []);

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.03;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        color="#84ff4c"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function AuthBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <Stars />
    </Canvas>
  );
}
