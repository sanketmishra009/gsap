// gsap.to(".logo", {
//   duration: 2,
//   x: 300,
//   rotation: 360,
//   backgroundColor: "red",
//   borderRadius: "20%",
//   border: "5px solid white",
// });

// let myobject = { rotation: 0 };
// gsap.to(myobject, {
//   rotation: 360,
//   duration: 5,
//   onUpdate: () => console.log(myobject.rotation),
// });

// gsap.from(".logo", { duration: 2, opacity: 0, scale: 0.3, ease: "back" });

gsap.from(".square", {
  scale: 0.1,
  duration: 0.5,
  y: 40,
  ease: "power1.inOut",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
  stagger: {
    grid: [8, 10],
    from: "center",
    // axis: "x",
    amount: 1.5,
  },
});

let tl = gsap.timeline({});

tl.from(".name", {
  y: -40,
  duration: 1,
  ease: "power4.inOut",
  opacity: 0,
});

tl.from(
  ".nav-link",
  {
    duration: 0.5,
    y: -40,
    ease: "power4.Out",
    opacity: 0,
    stagger: 0.4,
  }
  // "-=0.5"
);
// gsap.registerPlugin(ScrollTrigger);

gsap.to(".boxa", {
  scrollTrigger: {
    trigger: "boxa",
    toggleActions: "play pause reverse reset",
    // markers: true,
    scrub: true,
  },
  duration: 5,
  rotation: 360,
  x: 800,
});

let tl2 = gsap.timeline({
  // scrollTrigger: {
  //   trigger: ".econtainer",
  //   pin: ".econtainer",
  //   scrub: true,
  // },
});

tl2
  .from(".orange", {
    x: "-100%",
    duration: 2,
  })
  .from(".blue", {
    x: "100%",
    duration: 2,
  })
  .from(".green", { y: "-100%", duration: 2 });

ScrollTrigger.create({
  animation: tl2,
  trigger: ".econtainer",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  markers: true,
});
