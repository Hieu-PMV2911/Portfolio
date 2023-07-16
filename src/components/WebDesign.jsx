import { Canvas } from '@react-three/fiber'
import React from 'react'
import Website from "../components/Animations/Website"
import { OrbitControls, Stage } from '@react-three/drei'
const WebDesign = () => {
  return (
    <Canvas camera={{fov: "25", position: [8,8,8] }} >
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment="city" intensity={0.5}>
        <Website/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default WebDesign