
// Create a custom cursor element
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

// Style the custom cursor and ripple effect dynamically
const cursorStyle = document.createElement('style');
cursorStyle.innerHTML += `
  body {
    cursor: none !im; /* Hide the default cursor */
  }

  #cursor {
    position: fixed;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 255, 179, 0.8); /* Neon green */
    border-radius: 50%; /* Circular shape */
    pointer-events: none; /* Prevents interference with mouse events */
    z-index: 9999; /* Ensure it appears above all other elements */
    transform: translate(-50%, -50%); /* Center the cursor on the pointer */
  }

  .ripple {
    position: fixed; /* Correct positioning relative to the viewport */
    width: 50px;
    height: 50px;
    background-color: rgba(0, 255, 179, 0.5); /* Neon green glow */
    border-radius: 50%; /* Circular shape */
    pointer-events: none; /* Prevents interference with mouse events */
    transform: scale(0); /* Start small */
    animation: rippleEffect 0.6s ease-out; /* Animate the ripple */
    z-index: 9998; /* Ensure it appears below the cursor */
  }

  @keyframes rippleEffect {
    to {
      transform: scale(4); /* Expand the ripple */
      opacity: 0; /* Fade out the ripple */
    }
  }
`;
document.head.appendChild(cursorStyle);

document.addEventListener('DOMContentLoaded', () => {
  cursor.style.top = `0px`;
  cursor.style.left = `0px`;
});

// Update the custom cursor position on mousemove
document.addEventListener('mousemove', (e) => {
  // Update the position of the custom cursor
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Add ripple effect on click
document.addEventListener('click', (e) => {
  // Create a ripple element
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  // Set the position of the ripple relative to the viewport
  ripple.style.top = `${e.clientY - 25}px`; // Center the ripple vertically
  ripple.style.left = `${e.clientX - 25}px`; // Center the ripple horizontally

  // Append the ripple to the body
  document.body.appendChild(ripple);

  // Remove the ripple after the animation ends
  setTimeout(() => {
    ripple.remove();
  }, 600); // Match the duration of the ripple animation
});

// Create a custom cursor element
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

// Style the custom cursor and ripple effect dynamically
cursorStyle.innerHTML += `
  body {
    cursor: none !important; /* Hide the default cursor */
  }

  #cursor {
    position: fixed;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 255, 179, 0.8); /* Neon green */
    border-radius: 50%; /* Circular shape */
    pointer-events: none; /* Prevents interference with mouse events */
    z-index: 9999; /* Ensure it appears above all other elements */
    transform: translate(-50%, -50%); /* Center the cursor on the pointer */
    top: -50px; /* Initialize off-screen */
    left: -50px; /* Initialize off-screen */
  }

  .ripple {
    position: fixed; /* Correct positioning relative to the viewport */
    width: 50px;
    height: 50px;
    background-color: rgba(0, 255, 179, 0.5); /* Neon green glow */
    border-radius: 50%; /* Circular shape */
    pointer-events: none; /* Prevents interference with mouse events */
    transform: scale(0); /* Start small */
    animation: rippleEffect 0.6s ease-out; /* Animate the ripple */
    z-index: 9998; /* Ensure it appears below the cursor */
  }

    @keyframes rippleEffect {
    to {
      transform: scale(4); /* Expand the ripple */
      opacity: 0; /* Fade out the ripple */
    }
  }

  #cursor.blink {
    animation: blinkEffect 0.3s ease-out; /* Apply the blink animation */
  }

  @keyframes blinkEffect {
    0%, 100% {
      opacity: 1; /* Fully visible */
    }
    50% {
      opacity: 0; /* Invisible */
    }
  }
`;

document.head.appendChild(cursorStyle);

// Update the custom cursor position on mousemove
document.addEventListener('mousemove', (e) => {
  // Update the position of the custom cursor
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Add ripple effect on click
document.addEventListener('click', (e) => {
  // Create a ripple element
  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  // Set the position of the ripple relative to the viewport
  ripple.style.top = `${e.clientY - 25}px`; // Center the ripple vertically
  ripple.style.left = `${e.clientX - 25}px`; // Center the ripple horizontally

  // Append the ripple to the body
  document.body.appendChild(ripple);

  // Remove the ripple after the animation ends
  setTimeout(() => {
    ripple.remove();
  }, 600); // Match the duration of the ripple animation
});

// Add a blink effect to the custom cursor on click
document.addEventListener('click', () => {
  cursor.classList.add('blink'); // Add the blink class
  setTimeout(() => {
    cursor.classList.remove('blink'); // Remove the blink class after the animation
  }, 300); // Match the duration of the blink animation
});



