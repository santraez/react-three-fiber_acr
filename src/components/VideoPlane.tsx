import { useEffect, useState } from 'react';
import * as THREE from 'three';

export function VideoPlane({ videoUrl, position, scale, rotationY }: any) {
  const [video] = useState(() => Object.assign(document.createElement('video'), {
    src: videoUrl,
    crossOrigin: 'anonymous',
    loop: true,
    autoplay: true,
    muted: true,
  }));

  useEffect(() => {
    video.play();
  }, [video]);

  return (
    <mesh
      position={position}
      scale={scale}
      rotation-y={rotationY}
      receiveShadow
      castShadow
    >
      <planeGeometry />
      <meshBasicMaterial>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
}
