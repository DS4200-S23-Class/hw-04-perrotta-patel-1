// Function that adds boarder or removes boarder given the circle's border contitions 

let clicks = 0;

function borderFunction(pointNum) {

	// Get point on webpage 
	let point = document.getElementById(pointNum);
	
	// add or remove a border to a point if clicked on
	if (Object.values(point.classList).includes('border')) {
		point.classList.remove('border');
	} 
    else {
		point.classList.add('border');
	}

	// show the coordinates of the last point clicked in the right column
	let lastPoint = "Last Point Clicked: \n" + pointNum;

	let lastPointDiv = document.getElementById("point-clicked");
	lastPointDiv.innerHTML = lastPoint;
}