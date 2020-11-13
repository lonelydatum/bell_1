const read = [2.5, 4, 5]

function start(){
	TweenLite.defaultEase = Power1.easeOut

	const tlSlider = new TimelineMax()
	tlSlider.add( createSlide("a"), 0)
	tlSlider.add( createSlide("b"), .2)


	const fadeTime = .5

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	tl.add("t1-out",  `+=${read[0]}`)
	tl.to( ".t1", .3, {opacity: 0}, "t1-out")
	tl.to( ".element_bottom", .5, {x:0, y:0, ease:Power1.easeOut}, "t1-out")


	tl.add("t2-in" )
	tl.from([".t2"], fadeTime, {opacity: 0}, "t2-in")
	

	tl.to(".t2", .3, {opacity: 0}, `+=${read[1]}`)
	tl.from(".t3", fadeTime, {opacity: 0})

	tl.to(".t3", .3, {opacity: 0}, `+=${read[2]}`)

	tl.from(".hero", fadeTime, {opacity: 0})
	tl.from(".end_txt", .3, {opacity: 0})
	tl.from(".cta", .3, {opacity: 0}, "+=.3")
	
	
	
	
	




}

function createSlide(ab){
	const tl = new TimelineMax()
	

	const speed_fast = .4

	const easeFast = Power3.easeOut
	const easeSlow = Linear.easeNone

		
	tl.to(`.phoneholder.${ab}`, speed_fast, {y:-900, ease:easeFast})
		
	tl.to(`.phoneholder.${ab}`, read[0], {y:"+=70", ease:easeSlow})
	
	
	tl.to(`.phoneholder.${ab}`, speed_fast, {y:-500, ease:easeFast})
		
	tl.to(`.phoneholder.${ab}`, read[1], {y:"+=70", ease:easeSlow})
	
	
	tl.to(`.phoneholder.${ab}`, speed_fast, {y:-100, ease:easeFast})
		
	tl.to(`.phoneholder.${ab}`, read[2], {y:"+=70", ease:easeSlow})
	tl.to(`.phoneholder.${ab}`, speed_fast, {opacity:0, y:"+=300", ease:easeFast}, "+=.2")
	

	return tl
}

start()


module.exports = {};

