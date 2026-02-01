const AnimatedStar = () => {
  const meshRef = useRef();

  // Animate the mesh (slow rotation and float)
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.15;

      // Float animation (sine wave for smooth up and down movement)
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(time * 0.6) * 0.4; // 0.6 speed, 0.4 amplitude
    }
  });
    return (
    // Icosahedron provides a sharp, star-like base geometry
    <Icosahedron args={[1.2, 1]} ref={meshRef}>
      {/* MeshDistortMaterial for a spiky, glowing effect */}
      <MeshDistortMaterial
        distort={0.45} // Higher distortion makes it look spikier
        speed={1.5}
        color="#ff7e00" // Bright orange color
        roughness={0.2}
        metalness={0.9}
      />
    </Icosahedron>
  );
};