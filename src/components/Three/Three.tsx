import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Loads and renders a GLTF 3D model. objToRender should be the name of the .gltf file and the folder it is located in, inside of /public
export default function Three({ objToRender }: { objToRender: string }) {
  function Model() {
    const gltf = useLoader(GLTFLoader, `/${objToRender}/${objToRender}.gltf`);
    return <primitive object={gltf.scene} />;
  }

  return (
    <div className="min-h-screen min-w-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        {Model()}
      </Canvas>
    </div>
  );
}
