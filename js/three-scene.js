// ==================== Three.js 3D Hero Elements ====================

// Check if Three.js is loaded and device has WebGL support
if (typeof THREE !== 'undefined' && window.WebGLRenderingContext) {
    const canvas = document.getElementById('three-canvas');

    if (canvas) {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.position.z = 5;

        // Create geometric shapes
        const geometry1 = new THREE.TorusGeometry(1, 0.4, 16, 100);
        const geometry2 = new THREE.OctahedronGeometry(1);
        const geometry3 = new THREE.IcosahedronGeometry(0.7);

        // Materials with gradients - REDUCED OPACITY for subtlety
        const material1 = new THREE.MeshStandardMaterial({
            color: 0x667eea,
            metalness: 0.7,
            roughness: 0.2,
            wireframe: true,
            opacity: 0.15,  // Much more subtle
            transparent: true
        });

        const material2 = new THREE.MeshStandardMaterial({
            color: 0xf093fb,
            metalness: 0.5,
            roughness: 0.3,
            opacity: 0.12,  // Much more subtle
            transparent: true
        });

        const material3 = new THREE.MeshStandardMaterial({
            color: 0x00f2fe,
            metalness: 0.6,
            roughness: 0.2,
            wireframe: true,
            opacity: 0.12,  // Much more subtle
            transparent: true
        });

        // Create meshes - SMALLER SIZE
        const torus = new THREE.Mesh(geometry1, material1);
        const octahedron = new THREE.Mesh(geometry2, material2);
        const icosahedron = new THREE.Mesh(geometry3, material3);

        // Scale down shapes to be less prominent
        torus.scale.set(0.7, 0.7, 0.7);
        octahedron.scale.set(0.6, 0.6, 0.6);
        icosahedron.scale.set(0.6, 0.6, 0.6);

        // Position shapes - MOVED FURTHER FROM CENTER
        torus.position.set(-3, 0.5, -2);
        octahedron.position.set(3, 1.5, -3);
        icosahedron.position.set(1, -2, -3);

        scene.add(torus, octahedron, icosahedron);

        // Lights
        const pointLight = new THREE.PointLight(0x667eea, 1);
        pointLight.position.set(5, 5, 5);
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(pointLight, ambientLight);

        // Mouse parallax effect
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            // Rotate shapes
            torus.rotation.x += 0.005;
            torus.rotation.y += 0.01;

            octahedron.rotation.x += 0.01;
            octahedron.rotation.y += 0.005;

            icosahedron.rotation.x += 0.008;
            icosahedron.rotation.z += 0.008;

            // Parallax effect
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
}
