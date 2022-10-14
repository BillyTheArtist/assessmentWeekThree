console.log("hello world")



function handleSubmit(evt) {
	evt.preventDefault()
	alert("Success! Form Submitted.")
	// console.log('form submit')
}


let form = document.querySelector('#contact')

form.addEventListener('submit', handleSubmit)

let kitten = document.getElementsByClassName('#kitten')

kitten.addEventListener('mouseover', alert("You are nice!"))