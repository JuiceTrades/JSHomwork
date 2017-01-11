// Excercise one for homework

var one = 1
var thirty = 30
result = (one + thirty)

var firstName = "Domitrius"
var lastName = "Clark"
result = (firstName + " " + lastName)

// Excercise two for homework

var games = [ ["League of Legends", "The Division"], ["Overwatch", "H1Z1"]]
console.log(games[1]][0])
console.log(games[0][1])

// Excercise three for homework
function numCheck() {
	var number = prompt("What's your number")
	if (number < 100){
		alert("Variable is less than 100")
	} else {
		alert("Variable is greater than 100!")
	}
}

// Excercise five for homework
function aString() {
	var string = prompt("Enter a string")
	if (string == "poop"){
		alert("Your string is the same")
	} else {
		alert("It's not poop")
	}
}


// Excercise six for homework

function aName (name){
	prompt(name)
}

// Excercise seven for homework
function noArgument(){
	console.log("")
}


// Excercise eight for homework
function door(virDoor){
	if (virDoor == 1){
		alert("You've walked into door number 1")
	} else if (virDoor == 2){
		alert("You've walked into door 2")
	} else if (virDoor == 3){
		alert("You've walked through door 3")
	} else {
		alert("STOP TRYING TO BREAK THE GAME")
	}
	}
