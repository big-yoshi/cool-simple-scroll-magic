function count() {
  var counter = { var: 0 };
  TweenMax.to(counter, 5, {
    var: 250,
    onUpdate: function () {
      $("#hp span").html(Math.ceil(counter.var) + "HP");
    },
    onComplete: function () {},
    ease: Circ.easeOut
  });
}

ScrollTrigger.create({
  trigger: ".cover",
  pin: true,
  start: "top top",
  end: "+=5800"
  //markers: true
});

t1 = gsap.timeline();

t1.to(".wrapper .logo", { height: "110px", top: 0, duration: 2 }, 0)
  .fromTo(
    ".wrapper h1",
    { fontSize: "0px", opacity: 0 },
    { opacity: 1, fontSize: "170px" },
    1
  )
  .fromTo(
    ".wrapper .car",
    { opacity: 0, bottom: "-400px" },
    { opacity: 1, bottom: 0 },
    1
  )
  .to(
    ".car",
    {
      scrollTrigger: {
        start: 450,
        end: 700,
        scrub: 0.5
        //markers: {startColor: "white", endColor: "white"}
      },
      scale: 1.2,
      x: "28%",
      y: "-180px",
      duration: 0.6,
      ease: "expo.out"
    },
    0
  )
  .to(
    ".wrapper h1",
    {
      scrollTrigger: {
        start: 450,
        end: 700,
        scrub: 0.5
      },
      scale: 0,
      duration: 0.6,
      ease: "expo.out"
    },
    0
  )
  .to(
    ".wrapper .features",
    {
      scrollTrigger: {
        start: 450,
        end: 700,
        scrub: 0.5
      },
      opacity: 1,
      duration: 1,
      ease: "power4.out"
    },
    0
  )
  .to(
    ".wrapper .bg-car-color",
    {
      scrollTrigger: {
        start: 450,
        end: 700,
        scrub: 0.5
      },
      height: "50vh",
      duration: 1,
      ease: "power4.out"
    },
    0
  )
  .call(count(), {
    scrollTrigger: {
      start: 450,
      end: 700,
      scrub: 0.5
    }
  })
  .to(".car", {
    duration:1,
    ease:`rough({ template:
none.out,
strength:
1,
points:
20,
taper:
'none',
randomize: true,
clamp: false
})`
,
    scrollTrigger: {
      start: 700,
      end: 800,
      scrub: 0.5
    }
  });