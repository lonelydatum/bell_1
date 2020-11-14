import {createSlide, init, fadeTime} from '../../_common/js/common.js'

const read = [2.5, 4, 5]

const data = [
	{ read: read[0],  y: -900 },
	{ read: read[1],  y: -500 },
	{ read: read[2],  y: -100 }
]

function start(){
	

	
	const tl = init(data)
	


	

	

	
	tl.to( ".t1", .3, {opacity: 0}, `+=${read[0]}`)
	
	tl.from([".t2"], fadeTime, {opacity: 0} )
	

	tl.to(".t2", .3, {opacity: 0}, `+=${read[1]}`)
	tl.from(".t3", fadeTime, {opacity: 0})
	
	tl.add("t3-out", `+=${read[2]}`)
	tl.to(".t3", .3, {opacity: 0}, "t3-out" )
	tl.to( ".element_bottom", .5, {x:0, y:0, ease:Power1.easeOut}, "t3-out")

	
	tl.from(".hero", fadeTime, {opacity: 0})	
	tl.from(".end_txt", fadeTime, {opacity: 0})


	
	tl.from(".cta", fadeTime, {opacity: 0}, "+=.5")
	

}


start()


module.exports = {};

