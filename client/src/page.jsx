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
};const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['Features', 'Solutions', 'Pricing', 'About'];

  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased">
      
      {/* Tailwind Animation Customization (for pulse-slow) */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center transition duration-300">
          
          {/* Logo */}
          <div className="text-2xl font-extrabold text-gray-900 flex items-center">
            <span className="text-orange-500 text-4xl mr-1 leading-none">★</span> 
            <span className="tracking-tighter">FUTURE</span><span className="text-orange-500">EDGE</span>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex space-x-10 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-orange-600 transition duration-300 p-2 rounded-lg hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </div>
           <div className="flex items-center space-x-4">
            <button 
              className="hidden lg:inline-flex bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-orange-700 transition duration-300 transform hover:-translate-y-0.5"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>
            {isMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 right-0 bg-white shadow-xl p-4 z-40 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-800 text-lg font-medium p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="mt-3 bg-orange-600 text-white px-5 py-3 rounded-xl font-bold text-lg hover:bg-orange-700 transition duration-300 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}