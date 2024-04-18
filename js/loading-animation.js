gsap.from(".letter", 1.5, {
    y: -50,
    opacity: 0,
    ease: "power3.inOut",
    stagger: 0.1,
})

gsap.to(".top-center", 2.5, {
    top: "40px",
    ease: "power3.inOut",
    delay: 2,
})

gsap.to(".menu", 0.5, {
    opacity: 1,
    ease: "power3.inOut",
    stagger: 0.1,
    delay: 4.5,
})

gsap.to(".block-left", 2, {
    left: "-50%",
    ease: "power3.inOut",
    delay: 2,
})

gsap.to(".block-right", 2, {
    right: "-50%",
    ease: "power3.inOut",
    delay: 2,
})