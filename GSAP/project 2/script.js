let tl = gsap.timeline();

tl.from("#navbar", {
    opacity: 0,
    y: -80,
    delay: 0.5
})
tl.from(".nav, .navelement", {
    y: -80,
    duration: 0.5,
    opacity: 0,
    stagger: 0.5,
})

tl.from("#herotext h1,  #herotext h2, #herotext h3", {
    x: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.5
})

tl.from(".heroborder", {
    opacity: 0,
    x: -200,
    duration: 0.5
})

tl.from(".right", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
})

gsap.from(".boxs .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".boxs .box",
        scroller: "body",
        start: "top 75%",
        // markers: true,
    }
})