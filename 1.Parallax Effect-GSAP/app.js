gsap.to("#bg", {
    scrollTrigger: {
        scrub: 1 /*This property smooths the animation*/ 
    },
    scale : 1.5
})

gsap.to("#man", {
    scrollTrigger: {
        scrub: 1
    },
    scale : 0.5
})

gsap.to("#mountain-l", {
    scrollTrigger: {
        scrub: 1
    },
    x : -500
})

gsap.to("#mountain-r", {
    scrollTrigger: {
        scrub: 1
    },
    x : 500
})

gsap.to("#cloud-1", {
    scrollTrigger: {
        scrub: 1
    },
    x : 200
})

gsap.to("#cloud-2", {
    scrollTrigger: {
        scrub: 1
    },
    x : -200
})

gsap.to("#text", {
    scrollTrigger: {
        scrub: 1
    },
    y : -100
})