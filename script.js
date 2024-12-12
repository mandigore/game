const selection=document.querySelectorAll(".sel");
const descriptionBox=document.getElementById("description-box");

selection.forEach(sel => {
	sel.addEventListener("mouseover", function() {
		const description=sel.getAttribute("data-description");
		descriptionBox.innerText=description;
		descriptionBox.style.display="block";
	});

	sel.addEventListener("mouseout", function() {
		descriptionBox.style.display="none";
	});
});

let selectedRace=null;

selection.forEach(sel => {
	sel.addEventListener("click", function() {
		selection.forEach(c => c.classList.remove("selected"));
		sel.classList.add("selected");
		selectedRace=sel.getAttribute("data-name");
	});
});

let name="";
const playerName=document.getElementById("name");
const buttonName=document.getElementById("nameButton");
const enteredName=document.getElementById("nameEntered");
const welcomePlayer=document.getElementById("welcome");

buttonName.addEventListener("click", function() {
	const namePlayer=playerName.value;
	if (namePlayer) {
		name=namePlayer;
		enteredName.style.display="block";
		welcomePlayer.innerHTML=`Hello ${name}, this is a text based game made by mandigore!`;
	} else {
		alert("Every adventurer needs a name!");
	}
});

const nextButton1=document.getElementById("buttonNext1");
const raceSection=document.getElementById("sectionRace");
const statsSection=document.getElementById("sectionStats");
const displayAbility=document.getElementById("special");
const displayWeakness=document.getElementById("weakness");
const displayStrength=document.getElementById("strength");

const abilities={
	Wizard: "Potion boost",
	Mermaid: "Water magic",
	Lizard: "Fire magic",
	Vampire: "Blood magic",
	Werewolf: "Beast power",
	Knight: "Super stamina",
	Plantoid: "Grass magic",
	Ice_Witch: "Ice magic"
};

const weaknesses={
	Wizard: "Werewolves",
	Mermaid: "Plantoids",
	Lizard: "Mermaid",
	Vampire: "Knights",
	Werewolf: "Ice Witches",
	Knight: "Wizards",
	Plantoid: "Lizards",
	Ice_Witch: "Vampires"
};

const strengths={
	Wizard: "Knights",
	Mermaid: "Lizards",
	Lizard: "Plantoid",
	Vampire: "Ice Witches",
	Werewolf: "Wizards",
	Knight: "Vampires",
	Plantoid: "Mermaids",
	Ice_Witch: "Werewolves"
};

nextButton1.addEventListener("click", function() {
	if (selectedRace  && name) {
		raceSection.style.display="none";
		enteredName.style.display="none";
		statsSection.style.display="block";
		document.getElementById("showRace").innerHTML=selectedRace;
		const ability=abilities[selectedRace];
		displayAbility.innerHTML=ability+" ";
		const weakness=weaknesses[selectedRace];
		displayWeakness.innerHTML=weakness;
		const strength=strengths[selectedRace];
		displayStrength.innerHTML=strength;
	}
	else if (name=="") {
		alert("Every adventurer needs a name!");
		return;
	}
});

let selectFT=null;

selection.forEach(sel => {
	sel.addEventListener("click", function() {
		selection.forEach(c => c.classList.remove("selected"));
		sel.classList.add("selected");
		selectFT=sel.getAttribute("data-name");
	});
});

const nextButton2=document.getElementById("buttonNext2");
const blackhall=document.getElementById("blackHall");
const fieldsSection=document.getElementById("sectionFields");

nextButton2.addEventListener("click", function() {
	if (selectFT=="Town") {
		statsSection.style.display="none";
		blackhall.style.display="block";
	}
	if (selectFT=="Fields") {
		statsSection.style.display="none";
		fieldsSection.style.display="block";
	}
});

let selectSI=null;

selection.forEach(sel => {
	sel.addEventListener("click", function() {
		selection.forEach(c => c.classList.remove("selected"));
		sel.classList.add("selected");
		selectSI=sel.getAttribute("data-name");
	});
});

const nextButton3=document.getElementById("buttonNext3");
const bhShop=document.getElementById("blackhallShop");
const bhInn=document.getElementById("blackhallInn");

nextButton3.addEventListener("click", function() {
	if (selectSI=="Shop") {
		blackhall.style.display="none";
		blackhallShop.style.display="block";
	}
	if (selectSI=="Inn") {
		blackhall.style.display="none";
		blackhallInn.style.display="block";
	}
});

const backButton1=document.getElementById("buttonBack1");

backButton1.addEventListener("click", function() {
	blackhallShop.style.display="none";
	blackHall.style.display="block";
	item.style.display="none";
});

const backButton2=document.getElementById("buttonBack2");

backButton2.addEventListener("click", function() {
	blackhallInn.style.display="none";
	blackHall.style.display="block";
});

let gold=50;
const goldAmount=document.getElementById("gold-amount");
const shop=document.querySelectorAll(".shopItem");
goldAmount.innerHTML=gold;

function updateGold() {
	goldAmount.innerHTML=gold;
}

let selectItem=null;
const selectShopItem=document.querySelectorAll(".shopItem");

selectShopItem.forEach(shopItem => {
	shopItem.addEventListener("click", function() {
		selectShopItem.forEach(c => c.classList.remove("selected"));
		shopItem.classList.add("selected");
		selectItem=shopItem.getAttribute("data-name");
	});
});

const buyButton=document.getElementById("buttonBuy");
const item=document.getElementById("itemPurchased");

buyButton.addEventListener("click", function() {
	item.style.display="block";
	updateGold();
});

const buyButton2=document.getElementById("buttonBuy2");
const room=document.getElementById("roomRented");

buyButton2.addEventListener("click", function() {
	room.style.display="block";
	updateGold();
});

shop.forEach(thing => {
    thing.addEventListener("click", function() {
        const cost = parseInt(thing.getAttribute("data-cost"), 20);

        if (playerGold >= cost) {
            playerGold -= cost;
            updateGold();
        } else {
            alert("You don't have enough gold!");
        }
    });
});
