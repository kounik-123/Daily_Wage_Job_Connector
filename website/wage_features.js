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

//     function scrambleToText(text, direction) {
//       let progress = 0;
//       const words = text.split(" ");
//       let totalLength = 0;
//       const boxes = [];

//       // Clear previous
//       target.innerHTML = "";

//       // Build word-by-word
//       words.forEach(word => {
//         const wordSpan = document.createElement("span");
//         wordSpan.classList.add("word");

//         for (let i = 0; i < word.length; i++) {
//           const charBox = document.createElement("div");
//           charBox.classList.add("box");
//           charBox.textContent = word[i]; // initial placeholder
//           wordSpan.appendChild(charBox);
//           boxes.push({ box: charBox, char: word[i], index: totalLength });
//           totalLength++;
//         }

//         target.appendChild(wordSpan);
//       });

//       // Scramble animation
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
//             scrambleToText(messages[index], direction);
//           }, 2500);
//         }
//       }, 45);
//     }

//     scrambleToText(messages[index], direction);

// change navbar styles on scroll

window.addEventListener('scroll',() =>
{
   document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);

})



const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@!#$%^&";
    const messages = [
      "Track employee work hours efficiently",
      "Automate attendance and wage calculations",
      "Generate accurate payroll reports instantly",
      "Enhance transparency in wage distribution",
      "Empower HR with real-time insights"
    ];

    const target = document.querySelector(".scramble");
    let index = 0;
    let direction = "left";
    let isFirstTime = true;

    function scrambleToText(text, direction) {
      let progress = 0;
      const words = text.split(" ");
      let totalLength = 0;
      const boxes = [];

      target.innerHTML = "";
      target.classList.remove("animate__animated", "animate__bounceInDown");

      // Build word-by-word
      words.forEach(word => {
        const wordSpan = document.createElement("span");
        wordSpan.classList.add("word");

        for (let i = 0; i < word.length; i++) {
          const charBox = document.createElement("div");
          charBox.classList.add("box");
          charBox.textContent = word[i];
          wordSpan.appendChild(charBox);
          boxes.push({ box: charBox, char: word[i], index: totalLength });
          totalLength++;
        }

        target.appendChild(wordSpan);
      });

      if (isFirstTime) {
        // Bounce only on first time
        setTimeout(() => {
          target.classList.add("animate__animated", "animate__bounceInDown");

          target.addEventListener("animationend", () => {
            isFirstTime = false;
            animateScramble(boxes, direction, totalLength);
          }, { once: true });
        }, 50);
      } else {
        animateScramble(boxes, direction, totalLength);
      }
    }

    function animateScramble(boxes, direction, totalLength) {
      let progress = 0;

      const interval = setInterval(() => {
        const current = Math.round(progress);

        boxes.forEach(({ box, char, index }) => {
          const showFinal = direction === "left"
            ? index <= current
            : index >= totalLength - 1 - current;

          if (showFinal) {
            box.textContent = char;
            box.classList.add("final");
          } else {
            const rand = letters[Math.floor(Math.random() * letters.length)];
            box.textContent = rand;
            box.classList.remove("final");
          }
        });

        progress += 0.3;

        if (progress >= totalLength) {
          clearInterval(interval);
          setTimeout(() => {
            index = (index + 1) % messages.length;
            direction = direction === "left" ? "right" : "left";
            scrambleToText(messages[index], direction); // No bounce on next
          }, 2500);
        }
      }, 45);
    }

    // Start the first scramble
    scrambleToText(messages[index], direction);





     const counters = document.querySelectorAll('.counter');

    const format = (value, suffix) => {
      if (suffix === 'k+') return Math.floor(value / 1000) + 'k+';
      return Math.floor(value) + suffix;
    };

    const startCounting = () => {
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        let count = 0;
        const duration = 3000; // slower: total time for counting (in milliseconds)
const steps = 100;  
        const increment = target / steps;
        const interval = duration / steps;

        const update = () => {
          count += increment;
          if (count < target) {
            counter.innerText = format(count, suffix);
            setTimeout(update, interval);
          } else {
            counter.innerText = format(target, suffix);
          }
        };

        update();
      });
    };

    // Run counting immediately when visible on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect(); // run once
        }
      });
    });

    observer.observe(document.querySelector('.stats-section'));