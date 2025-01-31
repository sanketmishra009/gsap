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

gsap.to(".square", {
  scale: 0.1,
  duration: 1.5,
  y: 40,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  stagger: {
    grid: [5, 10],
    from: "center",
    // axis: "x",
    amount: 1.5,
  },
});
