const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

const fadeTime = .5


function init(data){
	TweenLite.defaultEase = Power1.easeOut

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	const tlSlider = new TimelineMax()
	tlSlider.add( createSlide("a", data), 0)
	tlSlider.add( createSlide("b", data), .10)

	return tl
}

function createSlide(ab, data){
	const tl = new TimelineMax()
	

	const speed_fast = .5
	const distance_short = 70

	const easeFast = Power1.easeOut
	const easeSlow = Linear.easeNone

	for(let i=0; i<3; i++){
		tl.to(`.phoneholder.${ab}`, speed_fast, {y:data[i].y, ease:easeFast})		
		tl.to(`.phoneholder.${ab}`, data[i].read, {y:`+=${distance_short}`, ease:easeSlow})
	}

	tl.to(`.phoneholder.${ab}`, speed_fast, {opacity:0, y:"+=300", ease:Power4.easeOut}, "+=0")
	

	return tl
}



export {size, createSlide, init, fadeTime}