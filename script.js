const selection = document.querySelectorAll(".sel");
const descriptionBox = document.getElementById("description-box");

selection.forEach((sel) => {
  sel.addEventListener("mouseover", function () {
    const description = sel.getAttribute("data-description");
    descriptionBox.innerText = description;
    descriptionBox.style.display = "block";
  });

  sel.addEventListener("mouseout", function () {
    descriptionBox.style.display = "none";
  });
});

let selectedRace = null;

selection.forEach((sel) => {
  sel.addEventListener("click", function () {
    selection.forEach((c) => c.classList.remove("selected"));
    sel.classList.add("selected");
    selectedRace = sel.getAttribute("data-name");
  });
});

let name = "";
const playerName = document.getElementById("name");
const buttonName = document.getElementById("nameButton");
const enteredName = document.getElementById("nameEntered");
const welcomePlayer = document.getElementById("welcome");

buttonName.addEventListener("click", function () {
  const namePlayer = playerName.value;
  if (namePlayer) {
    name = namePlayer;
    enteredName.style.display = "block";
    welcomePlayer.innerHTML = `Hello ${name}, this is a text based game made by mandigore!`;
  } else {
    alert("Every adventurer needs a name!");
  }
});

const nextButton1 = document.getElementById("buttonNext1");
const raceSection = document.getElementById("sectionRace");
const introSection = document.getElementById("sectionIntro");
const displayAbility = document.getElementById("special");
const displayWeakness = document.getElementById("weakness");
const displayStrength = document.getElementById("strength");
const startFT=document.getElementById("start");
const stats = document.querySelector(".statsSec");

const abilities = {
  Wizard: "Potion boost",
  Mermaid: "Water magic",
  Lizard: "Fire magic",
  Vampire: "Blood magic",
  Werewolf: "Beast power",
  Knight: "Super stamina",
  Plantoid: "Grass magic",
  Ice_Witch: "Ice magic",
};

const weaknesses = {
  Wizard: "Werewolves",
  Mermaid: "Plantoids",
  Lizard: "Mermaid",
  Vampire: "Knights",
  Werewolf: "Ice Witches",
  Knight: "Wizards",
  Plantoid: "Lizards",
  Ice_Witch: "Vampires",
};

const strengths = {
  Wizard: "Knights",
  Mermaid: "Lizards",
  Lizard: "Plantoid",
  Vampire: "Ice Witches",
  Werewolf: "Wizards",
  Knight: "Vampires",
  Plantoid: "Mermaids",
  Ice_Witch: "Werewolves",
};

let level = 1;
let health = 100;
let maxHealth = 100;
let stamina = 100;
let maxStamina = 100;
let magicka = 100;
let maxMagicka = 100;
let meleeA=2;
let magicA=5;

function updateLevel() {
document.getElementById("level").innerHTML = level;
}

function updateHealth() {
  document.getElementById("health").innerHTML = health;
}

function updateStamina() {
  document.getElementById("stamina").innerHTML = stamina;
}

function updateMagicka() {
  document.getElementById("magicka").innerHTML = magicka;
}

function updateMelee() {
  document.getElementById("melee").innerHTML = meleeA;
}

function updateMagic() {
  document.getElementById("magic").innerHTML = "+"+magicA;
}

function knightNM() {
    maxMagicka = 0;
    magicka=0;
    updateMagicka();
    maxStamina+=50;
    stamina=maxStamina;
    updateStamina();
    magicA+=45;
    updateMagic();
}

function wizardNS() {
  maxStamina=0;
  stamina=0;
  updateStamina();
  magicA+=5;
  updateMagic();
}

function werewolfP() {
  meleeA+=6;
  magicA+=3;
  updateMelee();
  updateMagic();
}

function merOrPlant() {
  maxMagicka+=25;
  magicka=maxMagicka;
  updateMagicka();
}

function iceOrLiz () {
  magicA+=5;
  updateMagic();
}

nextButton1.addEventListener("click", function () {
  if (selectedRace && name) {
    if (selectedRace=="Knight") {
    document.getElementById("silver").style.display="block";
    document.getElementById("wood").style.display="none";
    knightNM(); 
    }
    else if (selectedRace=="Wizard") {
      wizardNS();
    }
    else if (selectedRace=="Werewolf") {
      document.getElementById("wood").style.display="none";
      werewolfP();
    }
    else if (selectedRace=="Mermaid") {
      merOrPlant();
    }
    else if (selectedRace=="Plantoid") {
      merOrPlant();
    }
    else if (selectedRace=="Ice_Witch") {
      iceOrLiz();
    }
    else if (selectedRace=="Lizard") {
      iceOrLiz();
    }
    raceSection.style.display = "none";
    enteredName.style.display = "none";
    introSection.style.display = "block";
    stats.style.display = "block";
    startFT.style.display = "block";
    document.getElementById("showRace").innerHTML = selectedRace;
    const ability = abilities[selectedRace];
    displayAbility.innerHTML = ability + " ";
    const weakness = weaknesses[selectedRace];
    displayWeakness.innerHTML = weakness;
    const strength = strengths[selectedRace];
    displayStrength.innerHTML = strength;
  } else if (name == "") {
    alert("Every adventurer needs a name!");
    return;
    }
});

let gold = 50;
const goldAmount = document.querySelectorAll(".gold-amount");

function updateGold() {
  goldAmount.forEach((span) => {
    span.innerHTML = gold;
  });
}

let hPotion = 0;
const hPotionI = document.querySelectorAll(".health-potions");

function updateHPotions() {
  hPotionI.forEach((span) => {
    span.innerHTML = hPotion;
  });
}

let sPotion = 0;
const sPotionI = document.querySelectorAll(".stamina-potions");

function updateSPotions() {
  sPotionI.forEach((span) => {
    span.innerHTML = sPotion;
  });
}

let mPotion = 0;
const mPotionI = document.querySelectorAll(".magicka-potions");

function updateMPotions() {
  mPotionI.forEach((span) => {
    span.innerHTML = mPotion;
  });
}

let weapon = "None";
const weaponI = document.querySelectorAll(".weapon");

function updateWeapon() {
  weaponI.forEach((span) => {
    span.innerHTML = weapon;
  });
}

function levelUp() {
  level += 1;
  maxHealth += 5;
  health = maxHealth;
  updateHealth();
  maxStamina += 5;
  stamina = maxStamina;
  updateStamina();
  maxMagicka += 5;
  magicka = maxMagicka;
  updateMagicka();
  meleeA+=2;
  updateMelee();
}

updateLevel();
updateHealth();
updateStamina();
updateMagicka();
updateWeapon();
updateMelee();
updateMagic();
updateHPotions();
updateSPotions();
updateMPotions();
updateGold();

let selectFT = null;

selection.forEach((sel) => {
  sel.addEventListener("click", function () {
    selection.forEach((c) => c.classList.remove("selected"));
    sel.classList.add("selected");
    selectFT = sel.getAttribute("data-name");
  });
});

const nextButton2 = document.getElementById("buttonNext2");
const blackhall = document.getElementById("blackHall");
const fields1 = document.getElementById("sectionFields1");

nextButton2.addEventListener("click", function () {
  if (selectFT == "Town") {
    stats.style.display = "none";
    introSection.style.display="none";
    startFT.style.display = "none";
    blackhall.style.display = "block";
  }
  if (selectFT == "Fields") {
    stats.style.display = "none";
    fields1.style.display = "block";
    startFT.style.display = "none";
    introSection.style.display="none";
  }
});

const fBackButt=document.getElementById("fieldBack");

fBackButt.addEventListener("click", function () {
  stats.style.display = "none";
  fields1.style.display = "block";
  document.getElementById("showName").style.display="none";
}); 

let selectSIFT = null;

selection.forEach((sel) => {
  sel.addEventListener("click", function () {
    selection.forEach((c) => c.classList.remove("selected"));
    sel.classList.add("selected");
    selectSIFT = sel.getAttribute("data-name");
  });
});

updateGold();

const statsButton1 = document.getElementById("buttonStats1");
const ft1=document.getElementById("fastTravel1");
const sBackButt=document.getElementById("shopBack");
const bhBack=document.getElementById("townStatsBack");

statsButton1.addEventListener("click", function () {
  fields1.style.display = "none";
  stats.style.display = "block";
  document.getElementById("showName").innerHTML=name;
  document.getElementById("showName").style.display="block";
  fBackButt.style.display="block";
  ft1.style.display="block";
  sBackButt.style.display = "none";
  bhBack.style.display = "none";
});

ft1.addEventListener("click", function () {
  stats.style.display = "none";
  blackhall.style.display = "block";
  document.getElementById("showName").style.display="none";
});

//here goes battle

const nextButton3 = document.getElementById("buttonNext3");
const bhShop = document.getElementById("blackhallShop");
const bhInn = document.getElementById("blackhallInn");
const tournament = document.getElementById("sectionTournament");

nextButton3.addEventListener("click", function () {
  if (selectSIFT == "Shop") {
    blackhall.style.display = "none";
    bhShop.style.display = "block";
  }
  else if (selectSIFT=="Inn") {
    blackhall.style.display = "none";
    bhInn.style.display = "block";
  }
  else if (selectSIFT == "Fields") {
    blackhall.style.display = "none";
    fields1.style.display = "block";
  }
  else if (selectSIFT == "Tournament") {
    blackhall.style.display = "none";
    tournament.style.display = "block";
  }
});

const statsButton3 = document.getElementById("buttonStats3");

statsButton3.addEventListener("click", function () {
  blackhall.style.display = "none";
  stats.style.display = "block";
  document.getElementById("showName").innerHTML=name;
  document.getElementById("showName").style.display="block";
  bhBack.style.display="block";
  ft1.style.display="none";
  fBackButt.style.display="none";
  sBackButt.style.display = "none";
});

bhBack.addEventListener("click", function () {
  stats.style.display = "none";
  blackhall.style.display = "block";
  document.getElementById("showName").style.display="none";
}); 

const statsButton2 = document.getElementById("buttonStats2");

statsButton2.addEventListener("click", function () {
  bhShop.style.display = "none";
  stats.style.display = "block";
  document.getElementById("showName").innerHTML=name;
  document.getElementById("showName").style.display="block";
  sBackButt.style.display="block";
  ft1.style.display="none";
  fBackButt.style.display="none";
  bhBack.style.display="none";
});

sBackButt.addEventListener("click", function () {
  stats.style.display = "none";
  bhShop.style.display = "block";
  document.getElementById("showName").style.display="none";
}); 

const backButton1 = document.getElementById("buttonBack1");

backButton1.addEventListener("click", function () {
  bhShop.style.display = "none";
  blackhall.style.display = "block";
  item.style.display = "none";
});

const backButton2 = document.getElementById("buttonBack2");

backButton2.addEventListener("click", function () {
  bhInn.style.display = "none";
  blackhall.style.display = "block";
});

let selectItem = null;
const selectShopItem = document.querySelectorAll(".shopItem");

selectShopItem.forEach((shopItem) => {
  shopItem.addEventListener("click", function () {
    selectShopItem.forEach((i) => i.classList.remove("selected"));
    shopItem.classList.add("selected");
    selectItem = {
      name: shopItem.getAttribute("data-name"),
      cost: Number(shopItem.getAttribute("data-cost")),
    };
  });
});

const buyButton1 = document.getElementById("buttonBuy1");
const item = document.getElementById("itemPurchased");

buyButton1.addEventListener("click", function () {
  if (selectItem) {
    if (gold >= selectItem.cost) {
      gold -= selectItem.cost;
      updateGold();
      item.style.display = "block";
      setTimeout(() => {
      item.style.display = "none";
      }, 1500);
        if (selectItem.name==="health-potion") {
          hPotion++;
          updateHPotions();
        }
        else if (selectItem.name==="stamina-potion") {
          sPotion++;
          updateSPotions();
        }
        else if (selectItem.name==="magic-potion") {
          mPotion++;
          updateMPotions();
        }
        else if (selectItem.name==="wood-sword") {
          weapon="Wood sword";
          updateWeapon();
          meleeA+=3;
          updateMelee();
        }
        else if (selectItem.name==="silver-sword") {
          weapon="Silver sword";
          updateWeapon();
          meleeA+=6;
          updateMelee();
        }
    } else {
      alert("Not enough gold!");
    }
  } else {
    alert("Oops no item selected");
  }
});

let selectRoom = null;
const buyRoom = document.querySelectorAll(".innBH");
const buyButton2 = document.getElementById("buttonBuy2");
const roomRent = document.getElementById("roomRented");

buyRoom.forEach((innBH) => {
  innBH.addEventListener("click", function () {
    buyRoom.forEach((s) => s.classList.remove("selected"));
    innBH.classList.add("selected");
    selectRoom = {
      name: innBH.getAttribute("data-name"),
      cost: Number(innBH.getAttribute("data-cost")),
    };
  });
});

buyButton2.addEventListener("click", function () {
  if (selectRoom) {
    if (gold >= selectRoom.cost) {
      gold -= selectRoom.cost;
      updateGold();
      roomRent.style.display = "block";
      health = maxHealth;
      updateHealth();
      stamina = maxStamina;
      updateStamina();
      magicka = maxMagicka;
      updateMagicka();
    } else {
      alert("Not enough gold!");
    }
  } else {
    alert("Oops no room selected");
  }
});
