import { useGLTF } from "@react-three/drei";

const Model = () => {
    const gltf = useGLTF('./christ.glb')

    return <primitive object={gltf.scene}/>
}

export default Model;