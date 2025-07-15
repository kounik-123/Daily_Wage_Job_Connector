// // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&";
// //     const messages = [
// //       "Track employee work hours efficiently",
// //       "Automate attendance and wage calculations",
// //       "Generate accurate payroll reports instantly",
// //       "Enhance transparency in wage distribution",
// //       "Empower HR with real-time insights"
// //     ];

// //     const target = document.querySelector(".scramble");
// //     let index = 0;
// //     let direction = "left";

// //     function scrambleToText(text, direction) {
// //       let progress = 0;
// //       const words = text.split(" ");
// //       let totalLength = 0;
// //       const boxes = [];

// //       // Clear previous
// //       target.innerHTML = "";

// //       // Build word-by-word
// //       words.forEach(word => {
// //         const wordSpan = document.createElement("span");
// //         wordSpan.classList.add("word");

// //         for (let i = 0; i < word.length; i++) {
// //           const charBox = document.createElement("div");
// //           charBox.classList.add("box");
// //           charBox.textContent = word[i]; // initial placeholder
// //           wordSpan.appendChild(charBox);
// //           boxes.push({ box: charBox, char: word[i], index: totalLength });
// //           totalLength++;
// //         }

// //         target.appendChild(wordSpan);
// //       });

// //       // Scramble animation
// //       const interval = setInterval(() => {
// //         const current = Math.round(progress);

// //         boxes.forEach(({ box, char, index }) => {
// //           const showFinal = direction === "left"
// //             ? index <= current
// //             : index >= totalLength - 1 - current;

// //           if (showFinal) {
// //             box.textContent = char;
// //             box.classList.add("final");
// //           } else {
// //             const rand = letters[Math.floor(Math.random() * letters.length)];
// //             box.textContent = rand;
// //             box.classList.remove("final");
// //           }
// //         });

// //         progress += 0.3;

// //         if (progress >= totalLength) {
// //           clearInterval(interval);
// //           setTimeout(() => {
// //             index = (index + 1) % messages.length;
// //             direction = direction === "left" ? "right" : "left";
// //             scrambleToText(messages[index], direction);
// //           }, 2500);
// //         }
// //       }, 45);
// //     }

// //     scrambleToText(messages[index], direction);

// // change navbar styles on scroll

// window.addEventListener('scroll',() =>
// {
//    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);

// })



// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&";
//     const messages = [
//       "Track employee work hours efficiently",
//       "Automate attendance and wage calculations",
//       "Generate accurate payroll reports instantly",
//       "Enhance transparency in wage distribution",
//       "Empower HR with real-time insights"
//     ];

//     const target = document.querySelector(".scramble");
//     let index = 0;
//     let direction = "left";
//     let isFirstTime = true;

//     function scrambleToText(text, direction) {
//       let progress = 0;
//       const words = text.split(" ");
//       let totalLength = 0;
//       const boxes = [];

//       target.innerHTML = "";
//       target.classList.remove("animate__animated", "animate__bounceInDown");

//       // Build word-by-word
//       words.forEach(word => {
//         const wordSpan = document.createElement("span");
//         wordSpan.classList.add("word");

//         for (let i = 0; i < word.length; i++) {
//           const charBox = document.createElement("div");
//           charBox.classList.add("box");
//           charBox.textContent = word[i];
//           wordSpan.appendChild(charBox);
//           boxes.push({ box: charBox, char: word[i], index: totalLength });
//           totalLength++;
//         }

//         target.appendChild(wordSpan);
//       });

//       if (isFirstTime) {
//         // Bounce only on first time
//         setTimeout(() => {
//           target.classList.add("animate__animated", "animate__bounceInDown");

//           target.addEventListener("animationend", () => {
//             isFirstTime = false;
//             animateScramble(boxes, direction, totalLength);
//           }, { once: true });
//         }, 50);
//       } else {
//         animateScramble(boxes, direction, totalLength);
//       }
//     }

//     function animateScramble(boxes, direction, totalLength) {
//       let progress = 0;

//       const interval = setInterval(() => {
//         const current = Math.round(progress);

//         boxes.forEach(({ box, char, index }) => {
//           const showFinal = direction === "left"
//             ? index <= current
//             : index >= totalLength - 1 - current;

//           if (showFinal) {
//             box.textContent = char;
//             box.classList.add("final");
//           } else {
//             const rand = letters[Math.floor(Math.random() * letters.length)];
//             box.textContent = rand;
//             box.classList.remove("final");
//           }
//         });

//         progress += 0.3;

//         if (progress >= totalLength) {
//           clearInterval(interval);
//           setTimeout(() => {
//             index = (index + 1) % messages.length;
//             direction = direction === "left" ? "right" : "left";
//             scrambleToText(messages[index], direction); // No bounce on next
//           }, 2500);
//         }
//       }, 45);
//     }

//     // Start the first scramble
//     scrambleToText(messages[index], direction);








    

