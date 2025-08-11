 // Register plugin
  gsap.registerPlugin(SplitText);

  // Split text into characters
  let split = SplitText.create(".name", { type: "chars" });

  // Animate characters
  gsap.from(split.chars, {
    duration: 2,
    y: 80,            // move from below
    rotationX: 90,    // slight 3D flip
    opacity: 0,       // fade-in
    ease: "back.out(1.7)",
    stagger: 0.1     // delay between letters
  });