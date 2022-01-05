const mathCreditHour=3, ntCreditHour=3, mfcsCreditHour=3, edCreditHour=3;
const drawingCreditHour=1, cppCreditHour=2;
var mathMarks=0, ntMarks=0, mfcsMarks=0, edMarks=0, drawingMarks=0, cppMarks=0;

function gradeValue(grade){
	switch (grade){
		case "a": return 4.0;
		case "aMinus": return 3.7;
		case "bPlus": return 3.3;
		case "b": return 3.0;
		case "bMinus": return 2.7;
		case "cPlus": return 2.3;
		case "c": return 2.0;
		case "cMinus": return 1.7;
		case "dPlus": return 1.3;
		case "d": return 1.0;
		case "f": return 0.0;

	}
}

function getMathMark(){
	var grade=document.getElementById("math").value;
	mathMarks=gradeValue(grade);
	console.log("math");
	console.log(mathMarks);
	console.log(mathCreditHour);
	updateGpa();
}

function getNtMark(){
	var grade=document.getElementById("nt").value;
	ntMarks=gradeValue(grade);
	console.log("nt");
	console.log(ntMarks);
	console.log(ntCreditHour);
	updateGpa();
}

function getMfcsMark(){
	var grade=document.getElementById("mfcs").value;
	mfcsMarks=gradeValue(grade);
	console.log("mfcs");
	console.log(mfcsMarks);
	console.log(mfcsCreditHour);
	updateGpa();
}

function getEdMark(){
	var grade=document.getElementById("ed").value;
	edMarks=gradeValue(grade);
	console.log("ed");
	console.log(edMarks);
	console.log(edCreditHour);
	updateGpa();
}
function getDrawingMark(){
	var grade=document.getElementById("drawing").value;
	drawingMarks=gradeValue(grade);
	console.log("drawing");
	console.log(drawingMarks);
	console.log(drawingCreditHour);
	updateGpa();
}

function getCppMark(){
	var grade=document.getElementById("cpp").value;
	cppMarks=gradeValue(grade);
	console.log("cpp");
	console.log(cppMarks);
	console.log(cppCreditHour);
	updateGpa();
}

function calculateGpa(){
	var totalCreditHour=mathCreditHour+ntCreditHour+mfcsCreditHour+edCreditHour+drawingCreditHour+cppCreditHour;
	// console.log(totalCreditHour);
	var honorPoint=mathMarks*mathCreditHour+ntMarks*ntCreditHour+mfcsMarks*mfcsCreditHour+edMarks*edCreditHour+drawingMarks*drawingCreditHour+cppMarks*cppCreditHour;
	// console.log(honorPoint);
	var finalGpa=honorPoint/totalCreditHour;
	// console.log(finalGpa);
	return finalGpa;
}	

function updateGpa(){
	var show=calculateGpa().toFixed(2);
	document.getElementById("gpa").innerHTML=show;
	// console.log(show);
}