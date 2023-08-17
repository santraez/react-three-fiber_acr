'use client'

import { Canvas } from '@react-three/fiber';
import { HomeScene } from '@/scenes/HomeScene';
import { AudioPlayer } from '@/components/AudioPlayer';
import styles from './styles.module.sass';

export default function HomePage() {
  return (
    <>
      <main className={styles.container}>
        <h1>♡ A <span>&</span> S ♡</h1>
      </main>
      <AudioPlayer />
      <Canvas
        className={styles.canvas}
        camera={{
          position: [0, 30, 60],
          fov: 15,
        }}
        shadows
      >
        <HomeScene />
      </Canvas>
    </>
  );
}
