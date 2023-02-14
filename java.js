// Function that adds border or removes border given the circle's border contitions 

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

// Function that adds a point that is inputted by the user 
function addCustomPoint() {

	const radius = 10;

	// Stores the coordinate values the user inputted
	let chosenXCoordinate = document.getElementById('chooseX-Coordinate');
	let chosenYCoordinate = document.getElementById('chooseY-Coordinate');

	// Transforms user input into number type 
	let intXCoordinate = Number(chosenXCoordinate.options[chosenXCoordinate.selectedIndex].text);
	let intYCoordinate = Number(chosenYCoordinate.options[chosenYCoordinate.selectedIndex].text);

	// Assigns the ID for the new user inputted point
	let customPointId = '(' + intXCoordinate + ', ' + intYCoordinate + ')';

	// scale the point so that it is pointed on the plot appropriately
	factoredXCoord = intXCoordinate * 50;
	factoredYCoord = 500 - (intYCoordinate * 50);

	// Gets the area the chart is located in
	let chart = document.getElementById('frame')

	// Create a new circle 
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

	// set the attributes of the new element
	circle.setAttribute("id", customPointId);
	circle.setAttribute("cx", factoredXCoord);
	circle.setAttribute("cy", factoredYCoord); 
	circle.setAttribute("r", radius); 
	circle.setAttribute("class", "point"); 
	circle.setAttribute("onclick", "borderFunction('" + customPointId + "')");

	// display the new point on the plot
	chart.appendChild(circle);
}

document.getElementById('addCustomPoint')
			.addEventListener('click', addCustomPoint);