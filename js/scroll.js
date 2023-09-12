// function smoothScrollTo(y, duration) {
//     const startingY = window.scrollY;
//     const diff = y - startingY;
//     let start;

//     // Use requestAnimationFrame for smooth animation
//     function step(timestamp) {
//         if (!start) start = timestamp;
//         const elapsed = timestamp - start;
//         const progress = Math.min(elapsed / duration, 1);

//         window.scrollTo(0, startingY + diff * progress);

//         if (progress < 1) {
//             requestAnimationFrame(step);
//         }
//     }

//     // Start the animation
//     requestAnimationFrame(step);
// }

// function scrollWindow() {
//     const scrollAmount = 20; // Adjust the scrolling speed as needed
//     const duration = 500; // Adjust the duration for smoother scrolling

//     // Calculate the destination position
//     const to = window.scrollY + scrollAmount;

//     // Scroll smoothly
//     smoothScrollTo(to, duration);

//     // If at the bottom, reset to the top
//     if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
//         setTimeout(() => {
//             smoothScrollTo(0, duration);
//         }, 2000); // Scroll to top after 2 seconds
//     }
// }

// // Call the scrollWindow function every 2 seconds
// setInterval(scrollWindow, 4000);
