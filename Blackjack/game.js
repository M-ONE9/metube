
let player={
    Name:"Mj",
     Chips:145,
//      sayHello:function(){
//         console.log("Hey")
//      }
   
//     }
// player.sayHello()
let cards = []
let sum = getRandomCard()
let hashBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")




let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name+":$"+player.Chips

console.log(cards)

function getRandomCard() {

    let ram = Math.floor(Math.random() * 13) + 1
    if (ram > 10) {
        return 10
    }
    else if (ram === 1) {
        return 11
    }
    else {
        return ram
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard + secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards : "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum" + sum

    if (sum <= 20) {
        message = ("Do you want to draw a new card?")

    }
    else if (sum === 21) {
        message = ("You've Won")
        hashBlackjack = true

    }
    else {
        message = ("You are out of Blackjack")
        isAlive = false

    }
    messageEl.textContent = message

}
function Newcard() {

    if (isAlive === true && hashBlackjack === false) {

        let card = getRandomCard()
        sum += card
        cards.push(card)
        //  console.log(card)
        renderGame()
    }
}





// let age=22
// if (age<21){
//     console.log("You cannot enter")
// }
// else{
//     console.log("Welcome")
// }


// let age=100
// if(age<100){
//     console.log("Not eligible")
// }
// else if(age===100){
//     console.log("Here is your birthday card")
// }
// else{
//     console.log("Not eligible u have 1 already")
// }


// let mySkills=[
//     "Javascript",
//     "Html",
//     "CSS",
//     "SQL"
// ]
// for(let i=0;i<5;i+=1){
//     console.log(i)
// }
// console.log(mySkills[0])
// console.log(mySkills[1])
// console.log(mySkills[2])
// console.log(mySkills[3])
// console.log(mySkills.length)


// let mySelf=[
//     "Mujahid",
//      23,
//      true

// ]

// let chat=[
//     "Hey",
//     "I am good",
//     "All good"
// ]
//  let newchat="same here"
// chat.push(newchat)
// console.log(chat)
// chat.pop()
// console.log(chat)


// for(let count=10;count<21;count+=1)
// {
//     console.log(count)
// }

// for(let i=0; i<6;i+=1){
//     console.log(i)
// }

// for(let i=10;i<=100;i+=10){
//     console.log(i)
// }


//  let ards=[7,3,9]

//  for(i=0;i<ards.length;i++){
//     console.log(ards[i])
//  }

// let sentence=["Hello","my","name","is","Mj"]
// let greetingsEl=document.getElementById("greetings-el")

// for(i=0;i<sentence.length;i++){
//     greetingsEl.textContent +=sentence[i]
// }

// let palyer1=107
// let player2=102

// function getFastest(){
// if(palyer1<player2){
// return palyer1
// }
// else if(player2<palyer1){

//     return player2
// }
// else{
// return palyer1
//  }
// }
// function getTotalRaceTime(){
//  return palyer1+player2
// }
// let totaltime=getTotalRaceTime()

// console.log(totaltime)



// let randomNumber=Math.random()*6

// console.log(randomNumber)

// let flooredNumber=Math.floor(3.45632)
// console.log(flooredNumber)

// let randomNumber=Math.floor(Math.random()*6)+1

// console.log(randomNumber)

// function rollDice(){
//     let randomNumber=Math.floor(Math.random()*6)+1
//     return randomNumber
// }
// console.log(rollDice())

// let hasCompletedCourse=true
// let givesCertificate=true

// if(hasCompletedCourse===true && givesCertificate===true)
//     // if(givesCertificate===true){
//     //     generateCertificate()
//     // }

// function generateCertificate(){
//     console.log("Getting certificate")
// }

// let hasSolved=false
// let hasHints=false
// if(hasSolved===false || hasHints===false){
//     showSolution()
// }
// function showSolution(){
//     console.log("Showing the solution")
// }


// let likesDoc=true
// let likesStartups=false
// if(likesDoc===true || likesStartups===true){
//     recomendMovies()
// }

// function recomendMovies(){
//     console.log("Hey,check out new movie we think you will like")
// }

// let course={
//     title:"Learn CSS grid for free",
//     lesson:6,
//     creator:"PER",
//     length:63,
//     level:2,
//     itsFree:true,
//     tags:["html","css"]

// }
// console.log(course.length)

// let airbnb={
//     isAvailable:true,
//     name:"palace",
//     price:150,
//     location:[1,"London","England",]
// }
// console.log(airbnb.location)

// let person={
//     name:"Mj",
//     age:23,
//     country:"India"
// }
// function logData(){
//    console.log (person.name+"is "+person.age+"years old who lives in"+person.country)
// }
// logData()

// let age=18

// if(age<6){

// console.log(    "Free")

// }
// else if( age<18){
//     console.log("Child discount")
// }
// else if( age<27){
//     console.log("Student Discount")
// }
// else if(  age<67){

// console.log(    "Full price")
    
// }
// else{

// console.log(    "Senior Citizen Discount")
// }

