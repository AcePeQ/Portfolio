import * as THREE from "three";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import styles from "./Cube3D.module.css";
import { useRef } from "react";

function Cube3D() {
  return (
    <div className={styles.canvas_wrapper}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Cube position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

function Cube(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.z += delta;
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Cube3D;
