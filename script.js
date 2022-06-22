let img=1

const images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg"]
const width = 700
const height = 700
const draw = SVG().addTo('#placePhoto').size(width, height)

let img1 = draw.image("img1.jpg").size(width,height)

document.querySelector("#next").onclick=function(){
	img++
	images[img]
	img1 = draw.image(images)
}