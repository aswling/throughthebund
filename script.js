var namebutton = document.getElementById('namebutton');
var nameinput = document.getElementById('nameinput');
var chapter = document.getElementById('chapter');
var next = document.getElementById('next');
var camera = document.getElementById('camera');
var mainImage = document.getElementById('mainImg');

var photosCounter = 0;
var chapterCounter = 0;
var foto;

var comics = [
	"character.gif",
	"image/1.gif",
	"image/2.png",
	"image/3.gif",
	"image/4.png",
	"image/5.png",
	"image/6.gif",
	"image/7.png",
	"image/8.png",
	"image/9.gif",
	"image/10.png",
	"image/11.gif",
	"image/12.png",
	"image/13.png",
	"image/14.gif",
	"image/15.gif",
	"image/16.png",
	"image/17.gif",
	"image/18.png",
	"image/19.png",
	"image/20.gif"
];

var haveCamera = [8,10,12];

var photos = [
	"thanks.png",
	"photo/1.gif",
	"photo/2.gif",
	"photo/3.gif"
];

var noCamera = [0,1,2,3];

var ending =[
"goodend.gif",
"badend.gif"
]

document.getElementById('nameinput')
.addEventListener('keyup',function(event){
	event.preventDefault();
	if (event.keyCode == 13){
		document.getElementById('namebutton').click();
	}
});

namebutton.addEventListener('click', function(ev) {
	var name = nameinput.value;
	var res = document.getElementById('name-res');

	if (name) {
		res.innerHTML = "Hello " + name + ", try to get to the Huangpu River boat tour on time as you walk through the Bund!";
		chapter.style.display="block";
		next.style.display="block";
		nameinput.style.display="none";
		namebutton.style.display="none";
		intro.style.display="none";

function nextChapter() {
	if (chapterCounter < comics.length) {
		mainImage.src = comics[chapterCounter];
		chapterCounter++;
	if ( haveCamera.indexOf( chapterCounter ) != -1 ){
		cameraButton.style.display = "block";
	} else {
		cameraButton.style.display = "none";
	}}

	if (chapterCounter >= 1) {
		res.innerHTML = " ";
	}

if (photosCounter > 2 && chapterCounter == 21) { 
	mainImage.src = ending[1];
	res.innerHTML = "You failed to catch the ferry..."
	next.style.display="none";
} else if(photosCounter <= 2 && chapterCounter == 21){
	mainImage.src = ending[0];
	res.innerHTML = "You made it!"
	next.style.display="none";
}}

var nextButton = document.getElementById("next");
nextButton.addEventListener('click',nextChapter);
	function takePhoto() {
	if (chapterCounter==8){
		foto = "photo/1.gif";
	} else if (chapterCounter==10){
		foto = "photo/2.gif";
	} else if (chapterCounter==12){
		foto = "photo/3.gif";
	}
	mainImage.src = foto;
	photosCounter ++;
		
	if ( noCamera.indexOf( photosCounter ) != -1 ){
		cameraButton.style.display = "none";
	} else {
		cameraButton.style.display = "block";
	}}

var cameraButton = document.getElementById("camera");
	cameraButton.addEventListener( 'click',takePhoto);
} else {
res.innerHTML = "Get yourself a name before you start the journey!";
chapter.style.display="none";
}
});