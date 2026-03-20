import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Model3D({ interactive = false }: { interactive?: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6;

    // Renderer setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported or context lost", e);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight1.position.set(10, 10, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    // Create a group to hold both shapes so we can rotate them
    const group = new THREE.Group();
    scene.add(group);

    // Wireframe Shape (Icosahedron)
    const wireframeGeo = new THREE.IcosahedronGeometry(2, 1);
    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x000000,
      wireframe: true,
      emissive: 0x222222,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    group.add(wireframeMesh);

    // Solid Shape (Octahedron)
    const solidGeo = new THREE.OctahedronGeometry(1.5, 0);
    const solidMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const solidMesh = new THREE.Mesh(solidGeo, solidMat);
    solidMesh.scale.set(0.8, 0.8, 0.8);
    group.add(solidMesh);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    if (interactive) {
      document.addEventListener("mousemove", onDocumentMouseMove);
    }

    // Animation Loop
    let time = 0;
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      time += delta;

      // Base rotation
      wireframeMesh.rotation.x += delta * 0.2;
      wireframeMesh.rotation.y += delta * 0.3;

      solidMesh.rotation.x += delta * 0.1;
      solidMesh.rotation.y -= delta * 0.15;

      // Floating effect
      wireframeMesh.position.y = Math.sin(time * 2) * 0.1;
      solidMesh.position.y = Math.cos(time * 1.5) * 0.15;

      // Interactive rotation
      if (interactive) {
        targetX = mouseX * 2;
        targetY = mouseY * 2;

        group.rotation.y += 0.05 * (targetX - group.rotation.y);
        group.rotation.x += 0.05 * (targetY - group.rotation.x);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        document.removeEventListener("mousemove", onDocumentMouseMove);
      }
      if (reqId) cancelAnimationFrame(reqId);
      
      // Attempt safe cleanup of renderer if it was created
      if (renderer) {
         if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
         }
         renderer.dispose();
         try {
           renderer.forceContextLoss();
         } catch(e) { /* ignore */ }
      }
      
      wireframeGeo.dispose();
      wireframeMat.dispose();
      solidGeo.dispose();
      solidMat.dispose();
    };
  }, [interactive]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full absolute inset-0 pointer-events-auto"
      style={{ minHeight: "300px" }}
    />
  );
}
