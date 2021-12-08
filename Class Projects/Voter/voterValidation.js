function vote(){
	let age=document.getElementById("age").value;
	age=Number(age);
	let text="Congratulations! You are eligible to vote..";
	let success=text.fontcolor("green");

	text="Sorry, you are not eligible to vote..";
	let fail=text.fontcolor("red");

	fail.fontcolor("red");
	let show=document.getElementById("result");
	if(age>=18){
		show.innerHTML=success;
	}else{
		show.innerHTML=fail;
	}
}