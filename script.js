//your JS code here. If required.
let form = document.querySelector("form");
let age = document.getElementById("age");
let name = document.getElementById("name");
function promiseHandler(){
	return new Promise((resolve, rejected)=>{
		form.addEventListener("submit", (e)=>{
			e.preventDefault();
			if(validation(age.value, name.value)){
				if(age.value>18){
					setTimeout(()=>{
						resolve(`Welcome, ${name.value}. You can vote.`)
					}, 4000)
				}else{
					setTimeout(()=>{
						rejected(`Oh sorry ${name.value}. You aren't old enough.`)
					}, 4000)
				}
			} 
		})
		
	})
}

promiseHandler().then(success=>alert(success)).catch(error=>alert(error))

function validation(ageValue, nameValue){
	if(ageValue || nameValue){
		return true;
	}
	return false;
}