const cursor = document.querySelector("#cursor");
const cursor_bg = document.querySelector("#cursor-bg");
const h4All = document.querySelectorAll("#nav h4");
const nav = document.querySelector("#nav");
console.log(nav.style.backgroundColor);

document.addEventListener("mousemove", function (dets) {
	cursor.style.left = dets.x + "px";
	cursor.style.top = dets.y + "px";
	cursor_bg.style.left = dets.x - 200 + "px";
	cursor_bg.style.top = dets.y - 200 + "px";
	cursor.style.transition = "100ms";
	cursor_bg.style.transition = "200ms";
})

h4All.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		cursor.style.scale = 3
		cursor.style.border = "1px solid white"
		cursor.style.backgroundColor = "transparent"
		if (nav.style.backgroundColor == "rgba(0, 0, 0, 0)") {
			elem.style.color = "#000"
		}
		else {
			elem.style.color = "#95c11e"
		}

	})
	elem.addEventListener("mouseleave", function () {
		elem.style.color = "#fff"
		cursor.style.scale = 1
		cursor.style.border = "0px solid #95c11e"
		cursor.style.backgroundColor = "#95c11e"

	})
})


gsap.to("#nav", {
	backgroundColor: "#000",
	height: "110px",
	duration: 0.5,
	scrollTrigger: {
		trigger: "#nav",
		scroller: "body",
		start: "top -10%",
		end: "top -11%",
		scrub: 1
	}
})


gsap.to("#main", {
	backgroundColor: "#000",
	scrollTrigger: {
		trigger: "#main",
		scroller: "body",
		start: "top -25%",
		end: "top -70%",
		scrub: 2
	}
})
gsap.from("#about-us img,#about-us-in", {
	y:90,
	scale: 0.1,
	opacity: 0, 
	duration: 1,
	scrollTrigger: {
		trigger: "#about-us",
		scroller: "body",
		start: "top 70%",
		end: "top 65%",
		scrub :2
	}
})
gsap.from("#about-us img,#about-us-in", {
	// y:90,
	scale: 1,
	opacity: 1, 
	duration: 1,
	scrollTrigger: {
		trigger: "#about-us",
		scroller: "body",
		start: "top 10%",
		end: "top -15%",
		scrub :1
	}
})
gsap.from(".card", {
	scale:0.1,
	opacity: 0, 
	duration: 1,
	scrollTrigger: {
		trigger: ".card",
		scroller: "body",
		start: "top 70%",
		end: "top 65%",
		scrub :true
	}
})
gsap.from(".card", {
	scale:1,
	opacity: 1, 
	duration: 1,
	scrollTrigger: {
		trigger: ".card",
		scroller: "body",
		start: "top 10%",
		end: "top -45%",
		scrub :true
	}
})

gsap.from("#colon1", {
	// y:-70,
	scale:0,
	x: -200, 
	duration: 1,
	scrollTrigger: {
		trigger: "#colon1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		scrub :1
	}
})
gsap.from("#colon2", {
	// y:-70,
	scale:0,
	x: 200, 
	duration: 2,
	scrollTrigger: {
		trigger: "#colon1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		scrub :1
	}
})
gsap.from("#page3 p", {
	y:90,
	scale: 0.1,
	opacity: 0, 
	duration: 1,
	scrollTrigger: {
		trigger: "#page3 p",
		scroller: "body",
		start: "top 70%",
		end: "top 65%",
		scrub :2
	}
})
gsap.from("#page4 h1", {
	y:100,
	delay:1,
	duration: 1,
	scrollTrigger: {
		trigger: "#page4 h1",
		scroller: "body",
		// markers:true,
		start: "top 100%",
		end: "top 45%",
		scrub :1
	}
})
