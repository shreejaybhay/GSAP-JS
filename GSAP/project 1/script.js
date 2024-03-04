var tl = gsap.timeline()

tl.from("#nav img, #text p, #login h2, #login button", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.2
})

tl.from("#main h1", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
})

tl.from("#main img", {
    sacle: 0,
    opacity: 0,
    stagger: 0.2,
})

tl.from("#main button", {
    scale: 0,
    opacity: 0,
})

tl.to("#main button", {
    y: -30,
    yoyo: true,
    repeat: -1,
})