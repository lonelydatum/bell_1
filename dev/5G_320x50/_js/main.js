import {createSlide, init, fadeTime, txt} from '../../_common/js/common.js'




function start(){
	


	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".hero", fadeTime, {opacity:0}, .5)
	tl.from([".legal", ".t1"], fadeTime, {opacity:0})
	tl.from(".cta", fadeTime, {opacity:0}, "+=.3")
	
}


start()


module.exports = {};

