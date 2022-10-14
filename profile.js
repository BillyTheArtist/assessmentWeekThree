
let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualText = document.querySelector('#ritual')

colorBtn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'blue'

    if(colorBtn.backgroundColor === 'blue') {
      colorBtn.addEventListener('click', () => {
        colorBtn.target.style.backgroundColor = 'white'
      })  
    }
})
placeBtn.addEventListener('click', () => {
    if(placeBtn.innerText === "My Favorite Place"){
        placeBtn.innerText = "Valley Center"
    }else{
        placeBtn.innerText= "My Favorite Place"
    }
})

ritualText.addEventListener('click', () => {
    if(ritualText.innerText === "My Favorite Ritual"){
        ritualText.innerText = "Summoning Lord Cthulhu"
    }else{
        ritualText.innerText= "My Favorite Ritual"
    }
})

























