import { Canvas } from '@react-three/fiber'
import React from 'react'
import Dev from "../components/Animations/Dev"
import { OrbitControls, Stage } from '@react-three/drei'
const Development = () => {
  return (
    <Canvas camera={{fov: "25", position: [8,8,8] }} >
      <OrbitControls enableZoom={false} autoRotate />
      <Stage environment="city" intensity={0.5}>
        <Dev/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Development