'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore, PathType } from '@/store/useStore'

interface MousePosition {
  x: number
  y: number
}

// Path colors for mouse effect
const pathColors: Record<PathType | 'default', string> = {
  agenzie: '#00d4ff', // Cyan
  aziende: '#0066ff', // Blue
  null: '#00d4ff',
  default: '#00d4ff',
}

function MouseFollower({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const { viewport } = useThree()

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      const targetX = mousePosition.x * viewport.width * 0.3
      const targetY = mousePosition.y * viewport.height * 0.3
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.08
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.08
      
      // Subtle scale animation based on mouse speed
      const speed = Math.abs(targetX - meshRef.current.position.x) + Math.abs(targetY - meshRef.current.position.y)
      const targetScale = 1 + speed * 0.1
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  )
}

function ParticleTrail({ color }: { color: string }) {
  const pointsRef = useRef<THREE.Points>(null)
  const trailCount = 30
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })
  const { viewport } = useThree()
  
  const initialPositions = useMemo(() => new Float32Array(trailCount * 3), [])
  const [positions, setPositions] = useState<Float32Array>(initialPositions)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (pointsRef.current) {
      const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array
      
      // Shift positions
      for (let i = trailCount - 1; i > 0; i--) {
        const i3 = i * 3
        const prevI3 = (i - 1) * 3
        currentPositions[i3] = currentPositions[prevI3]
        currentPositions[i3 + 1] = currentPositions[prevI3 + 1]
        currentPositions[i3 + 2] = currentPositions[prevI3 + 2]
      }
      
      // Set new position for first point
      currentPositions[0] = mousePos.x * viewport.width * 0.3
      currentPositions[1] = mousePos.y * viewport.height * 0.3
      currentPositions[2] = 0

      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={trailCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={color}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

export function MouseEffect() {
  const activePath = useStore((state) => state.activePath)
  const heroVisible = useStore((state) => state.heroVisible)
  
  const color = useMemo(() => {
    if (activePath === null) return '#00d4ff'
    return pathColors[activePath] || pathColors.default
  }, [activePath])
  
  // Don't show mouse effect on hero
  if (heroVisible) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <MouseFollower color={color} />
        <ParticleTrail color={color} />
      </Canvas>
    </div>
  )
}
