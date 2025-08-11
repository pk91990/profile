gsap.registerPlugin(SplitText);

  // Split text into words and characters
  let split = SplitText.create(".split", { type: "words, chars" });

  // Animate characters one-by-one
  gsap.from(split.chars, {
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
  });