let botScore=0,
	playerScore=0;
document.querySelector("#rock").addEventListener('click', playerThrowsRock);
document.querySelector("#paper").addEventListener('click', playerThrowsRock);
document.querySelector("#scissors").addEventListener('click', playerThrowsRock);

function playerThrowsScissors(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}
function playerThrowsRock(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsPaper(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}

function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	pcScore = document.querySelector("#computerScore")
	
	botScore+=1;
	pcScore.innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.querySelector("#humanScore").innerHTML=playerScore;
	displayCompleteMessage("You won!");
}
function displayCompleteMessage(msg){
	document.querySelector("#status").innerHTML=msg;
}
