// Alert message (optional, can be removed if not needed)
alert("Success! Welcome to the interactive page.");

// Create a custom cursor element
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

// Style the custom cursor with glowing effect
const cursorStyle = document.createElement('style');
cursorStyle.innerHTML = `
  #cursor {
    position: fixed;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 255, 179, 0.8); /* Neon green */
    border-radius: 50%; /* Circular shape */
    box-shadow: 0 0 15px rgba(0, 255, 179, 0.8), 0 0 30px rgba(0, 255, 179, 0.5); /* Neon glow effect */
    pointer-events: none; /* Prevents interference with mouse events */
    z-index: 1000; /* Ensures it appears above other elements */
   
  }
`;
document.head.appendChild(cursorStyle);

// Use GSAP for smooth cursor movement
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.pageX,
    y: e.pageY,
    duration: 0.1, // Smooth movement duration
    ease: "power2.out" // Easing for smooth animation
  });
});
