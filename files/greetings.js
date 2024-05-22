const greetingTag = document.querySelector('.greetings');
const preloader = document.querySelector('.preloader');
const content =     document.querySelector('.content');
// const content = document.getElementById('content'); // Assuming your main content has this ID

const greetings = [
  "Hello" /* English */,
  "Hola" /* Spanish */,
  "Bonjour" /* French */,
  "Hallo" /* German */,
  "Ciao" /* Italian */,
  "Olá" /* Portuguese */,
  "你好" /* Mandarin Chinese (Nǐ hǎo) */,
  "안녕하세요" /* Korean (Anyeonghaseyo) */,
  "مرحبا" /* Arabic (Marhaba) */,
  "नमस्ते" /* Hindi (Namaste) */,
  "Cześć" /* Polish */,
  "Merhaba" /* Turkish */,
  "Hallo" /* Dutch */,
  "Hej" /* Swedish */,
  "Hei" /* Norwegian */,
  "Hola Welcome !!"
];

function displayAndAnimate() {
        content.style.display = "none";
  const tl = gsap.timeline({ ease: 'power3.out' }); // Use power3.out for easing (optional)

  greetings.forEach((greeting, index, greetingsArray) => {
    if (index == greetingsArray.length -1  ) { // Check for last element
      tl.to(greetingTag, { duration: .15, textContent: greeting });
      tl.to(greetingTag, { duration: .2, y : 100  , ease: "power1.out"}) // Fade out greeting text
      tl.to(greetingTag, { duration: .9, y : -4000  , ease: "expo.easeInOut"}) // Fade out greeting text
      tl.to(".strips",{ duration : .5 , scaleX: 0, ease:"expo.easeInOut",
        stagger: 0.04 }) // Shorter duration, step-end ease, slight delay
        
      .set(preloader, { display: 'none' }) // Hide preloader after animation
        .set(content, { display: 'block' }); // Show main content after preloader hides
    } else {
      tl.to(greetingTag, { duration: .15, textContent: greeting }); // Update greeting text
    }
  });
}


