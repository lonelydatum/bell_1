const read = [2.5, 4, 5]

const data = {
	f1: { read: read[0],  y: -900 },
	f2: { read: read[1],  y: -900 },
	f3: { read: read[2],  y: -900 }
}

function start(){
	TweenLite.defaultEase = Power1.easeOut

	const tlSlider = new TimelineMax()
	tlSlider.add( createSlide("a"), 0)
	tlSlider.add( createSlide("b"), .2)


	const fadeTime = .5

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	
	tl.to( ".t1", .3, {opacity: 0}, `+=${read[0]}`)
	
	tl.from([".t2"], fadeTime, {opacity: 0} )
	

	tl.to(".t2", .3, {opacity: 0}, `+=${read[1]}`)
	tl.from(".t3", fadeTime, {opacity: 0})
	
	tl.add("t3-out", `+=${read[2]}`)
	tl.to(".t3", .3, {opacity: 0}, "t3-out" )
	tl.to( ".element_bottom", .5, {x:0, y:0, ease:Power1.easeOut}, "t3-out")

	
	tl.from(".hero", fadeTime, {opacity: 0})	
	tl.from(".end_txt", .3, {opacity: 0})


	
	tl.from(".cta", .3, {opacity: 0}, "+=.5")
	

}

function createSlide(ab){
	const tl = new TimelineMax()
	

	const speed_fast = .5
	const distance_short = 70

	const easeFast = Power1.easeOut
	const easeSlow = Linear.easeNone

		
	tl.to(`.phoneholder.${ab}`, speed_fast, {y:-900, ease:easeFast})		
	tl.to(`.phoneholder.${ab}`, read[0], {y:`+=${distance_short}`, ease:easeSlow})
	
	
	tl.to(`.phoneholder.${ab}`, speed_fast, {y:-500, ease:easeFast})
		
	tl.to(`.phoneholder.${ab}`, read[1], {y:`+=${distance_short}`, ease:easeSlow})
	
	
	tl.to(`.phoneholder.${ab}`, speed_fast, {y:-100, ease:easeFast})
		
	tl.to(`.phoneholder.${ab}`, read[2], {y:`+=${distance_short}`, ease:easeSlow})
	tl.to(`.phoneholder.${ab}`, speed_fast, {opacity:0, y:"+=300", ease:Power4.easeOut}, "+=0")
	

	return tl
}

start()


module.exports = {};

