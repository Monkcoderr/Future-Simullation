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