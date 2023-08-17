import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh002: THREE.Mesh;
    Mesh002_1: THREE.Mesh;
    Mesh001: THREE.Mesh;
    Mesh001_1: THREE.Mesh;
    nose: THREE.Mesh;
  };
  materials: {
    ["body_orange-light"]: THREE.MeshStandardMaterial;
    body_orange: THREE.MeshStandardMaterial;
    eyes: THREE.MeshStandardMaterial;
    eyes_pupile: THREE.MeshStandardMaterial;
    nose: THREE.MeshStandardMaterial;
  };
};

export function Doge(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/doge.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nose.geometry}
        material={materials.nose}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002.geometry}
        material={materials["body_orange-light"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh002_1.geometry}
        material={materials.body_orange}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh001.geometry}
        material={materials.eyes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh001_1.geometry}
        material={materials.eyes_pupile}
      />
    </group>
  );
}

useGLTF.preload("/doge.gltf");