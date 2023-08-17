import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { VideoPlane } from '@/components/VideoPlane';
import { Ground } from '@/components/Ground';
import { Doge } from '@/models/Doge';
import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  RoundedBox,
  Stars
} from '@react-three/drei';

const CURVE = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 30, 60),
  new THREE.Vector3(0, 30, 80),
  new THREE.Vector3(60, 30, 45),
  new THREE.Vector3(80, 30, 0),
  new THREE.Vector3(60, 30, -45),
  new THREE.Vector3(0, 30, -80),
  new THREE.Vector3(0, 30, -60),
]);


const Sphere = () => {
  const ref = useRef<THREE.Mesh>(null)
  return (
    <mesh
      ref={ref}
      position={[-3, 0.55, -3]}
      receiveShadow
      castShadow
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial
        roughness={0}
        metalness={0.25}
      />
    </mesh>
  );
}

const Decorations = () => {
  return (
    <>
      <RoundedBox
        smoothness={10}
        radius={0.015}
        position={[-3, 1, 2.5]}
        scale={[8, 2, 1]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          color='#F4AE00'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </RoundedBox>
      <VideoPlane
        videoUrl='/textVideo.mp4'
        position={[-3, 1, 3.005]}
        scale={[7.7, 1.6, 1.3]}
      />
      <mesh
        position={[5, 1, 5]}
        castShadow
      >
        <icosahedronGeometry />
        <meshStandardMaterial
          color='#8E00F4'
          envMapIntensity={0.8}
          roughness={0.2}
          metalness={1}
        />
      </mesh>
      <mesh
        rotation-x={-Math.PI / 2}
        position={[8, 1.1, 2]}
        scale={[2, 2, 2]}
        receiveShadow
        castShadow
      >
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshStandardMaterial
          color='#2D2D2D'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
          wireframe
        />
      </mesh>
      <Sphere />
      <Ground />
    </>
  );
}

export function HomeScene() {
  return (
    <>
      <OrbitControls />
      <pointLight
        position={[10, 15, 15]}
        color='#570C0C'
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow
      />
      <directionalLight
        position={[10, 15, 15]}
        color='#570C0C'
        intensity={5}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow
      />
      <Environment preset='city' />
      <GizmoHelper
        alignment='bottom-right'
        margin={[100, 100]}
      >
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor='black'
        />
      </GizmoHelper>
      <group position={[0, -3, 0]}>
        <VideoPlane
          videoUrl='/andreita.mp4'
          position={[0, 5, 0.51]}
          scale={[16, 9, 1]}
        />
        <VideoPlane
          videoUrl='/andreita.mp4'
          position={[0, 5, -0.51]}
          scale={[16, 9, 1]}
          rotationY={Math.PI}
        />
        {/* Video wall */}
        <mesh
          position={[0, 5, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial
            color='#000000'
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Base */}
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial
            color='#000000'
            envMapIntensity={0.5}
            roughness={0}
            metalness={0}
          />
        </mesh>
        <Decorations />
      </group>
      <Doge
        position={[4, -2.8, -3]}
        rotation-y={Math.PI / 0.31}
        scale={1.5}
      />
      <Stars
        radius={50}
        depth={50}
        count={10000}
        factor={5}
        saturation={0}
        speed={1}
        fade
      />
    </>
  );
}
