import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import styles from "./Planet.module.css";
import { Mesh, TextureLoader } from "three";
import { Suspense, useRef } from "react";

function Planet() {
  return (
    <div className={styles.canvas_container}>
      <Canvas camera={{ position: [5, 0, 0] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, -5, 10]} intensity={2} />

          <PlanetMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}

function PlanetMesh() {
  const earthTexture = useLoader(TextureLoader, "/mars.jpg");

  const planetRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001;
      // planetRef.current.rotation.x += 0.001;
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[3, 100, 100]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

export default Planet;
