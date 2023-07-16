import { Canvas } from '@react-three/fiber'
import React from 'react'
import Social from "../components/Animations/Social"
import { OrbitControls, Stage } from '@react-three/drei'
const SocialMedia = () => {
  return (
    <Canvas camera={{fov: "25", position: [1,1,6] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment="city" intensity={0.5} adjustCamera={0.3}>
        <Social/>
      </Stage>
    </Canvas>
  )
}

export default SocialMedia