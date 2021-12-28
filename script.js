<!--    pirmas uzdavinys-->

// const headingText = document.querySelector("h1")
//
// // Update Style
//
// headingText.style.height = "200px"
// headingText.style.width = "200px"
// headingText.style.borderRadius = "10px"
// headingText.style.fontSize = "30px"
// headingText.style.border = "3px solid blue"
//
//
// // create div element in html
// // add that element to script variable
// // change element height to 200px
// // widht 200px
// // border radius 10px
// // font size 30px
// // border 3 px solid blue


//antras uzdavinys

// const zodis = document.querySelector("h1")
//
// zodis.style.color = "blue"
// zodis.style.fontWeight = "900"
// zodis.style.display = "flex"
// zodis.style.cursor = "pointer"
// zodis.style.padding = "20px"
// zodis.style.margin = "10px"
//
//
//
// const styles = {
//     color: "blue",
//     fontWeight: 900,
//     display: "flex",
//     cursor: "pointer",
//     padding: "20px",
//     margin: "10px",
// }


<!--trecias uzdavinys-->

// const  first  = document.querySelector(".first")
//
// first.style.height = "200px"
// first.style.width = "200px"
// first.style.border = "2px solid black"
// first.style.borderRadius  = "10px"
//
//
// const button =document.querySelector("button")
//
// button.onclick = buttonClicked
//
// function buttonClicked (){
//     first.style.backgroundColor = "red"
// }
//
//
//
// ////////////////////////////////
// const second = document.querySelector(".second")
//
// second.style.height = "200px"
// second.style.width = "200px"
// second.style.border = "2px solid black"
// second.style.borderRadius  = "10px"
//
//
// const button1 = document.querySelector(".two")
//
// button1.onclick = spustelejimas
//
// function spustelejimas(){
//     second.style.backgroundColor = "green"
// }
//
// ////////////////////////////////////////////
//
// const third =  document.querySelector(".third")
//
// third.style.height = "200px"
// third.style.width = "200px"
// third.style.border = "2px solid black"
// third.style.borderRadius  = "10px"
//
// const button2 =  document.querySelector(".three")
//
//     button2.onclick = spustelejimas2
//
// function spustelejimas2 (){
//
//     third.style.backgroundColor = "purple"
//
// }

// const boxas = document.querySelector(".box")
//
//
// const button = document.querySelector(".btnon")
// const button2 = document.querySelector(".btnoff")
// {
//
//   button.onclick = btnon
//
//     function btnon () {
//     boxas.style.display = "block"
//
//     }
//     button2.onclick = btnoff
//
//     function btnoff (){
//       boxas.style.display = "none"
//     }
//
// }

// const box = document.querySelector(".box")
// const btn = document.querySelector(".btn")
//
// let trigger = true
//
// btn.onclick = () => {
//     trigger = !trigger
//
//
//     if (trigger){
//         box.style.display = "block"
//
//     }else {
//         box.style.display = "none"
//     }
// }

const Menuwindow = document.querySelector(".menu")
const gamewindow = document.querySelector(".game")
const startgame = document.querySelector(".button")
const cockie = document.querySelector("img")
const points = document.querySelector("h2")
const  shopbutton =  document.querySelector(".shopbutton")
const  shopas =  document.querySelector(".shop")
const  x2 = document.querySelector(".x2")
const  x5 = document.querySelector(".x5")
const  x10 = document.querySelector(".x10")
const  spin = document.querySelector(".spin")
const  newcockie = document.querySelector(".newcockie")
const  newbck = document.querySelector(".newbck")
const  back = document.querySelector(".back")

let  taskas = 1

//Kad išsaugoti pointus
let counter = 0
//start game mygtukas
startgame.onclick = () => {
    //uždaro langa
    Menuwindow.style.display = "none"
    //atidaro langa
    gamewindow.style.display = "flex"

}
//Sausainio mygtukas
cockie.onclick = () => {
// +1 pointas
counter+= taskas
    // Rodo pointus
    points.innerHTML = "Points: "+ counter
}

shopbutton.onclick = () => {
    gamewindow.style.display = "none"
    shopas.style.display = "block"
}

x2.onclick = () => {
    taskas = 2
    counter -= 100
}
x5.onclick = () => {
    taskas = 5
    counter -= 500
}
x10.onclick = () => {
    taskas = 10
    counter -= 1000
}


back.onclick = () => {
    shopas.style.display = "none"
    gamewindow.style.display = "flex"
}

// spin.onclick = () => {
// }

// newcockie.onclick = () => {
//
// }


console.log("pirmas commitas")


console.log("antras commitas")


console.log("trecias commitas")