//function variables
let level = 1;
let exp = 0;
let expNext = 100;
let health = 100;
let maxHealth = 100;
let stamina = 100;
let maxStamina = 100;
let magicka = 100;
let maxMagicka = 100;
let meleeA = 2;
let magicA = 5;
let weapon = "None";
let gold = 50;
let hPotion = 0;
let sPotion = 0;
let mPotion = 0;
let fastTravelCount = 1;
const displayAbility = document.getElementById("special");
const displayWeakness = document.getElementById("weakness");
const displayStrength = document.getElementById("strength");
const weaponI = document.querySelectorAll(".weapon");
const goldAmount = document.querySelectorAll(".gold-amount");
const hPotionI = document.querySelectorAll(".health-potions");
const sPotionI = document.querySelectorAll(".stamina-potions");
const mPotionI = document.querySelectorAll(".magicka-potions");

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

//variables for intro
const selection = document.querySelectorAll(".sel");
const descriptionBox = document.getElementById("description-box");
let selectedRace = null;
let name = "";
const startFT = document.getElementById("start");
const playerName = document.getElementById("name");
const buttonName = document.getElementById("nameButton");
const enteredName = document.getElementById("nameEntered");
const welcomePlayer = document.getElementById("welcome");

//town center, shop, and inn variables

//field or town (beginning)
let selectFT = null;

//town 1 center
let selectSIFT = null;

//shop 1
let selectItem = null;
const selectShopItem = document.querySelectorAll(".shopItem");
const item = document.getElementById("itemPurchased");

//inn 1
let selectRoom = null;
const buyRoom = document.querySelectorAll(".innBH");
const roomRent = document.getElementById("roomRented");

//field variables
let pathOrSlime1 = null;
let pathOrSlime2 = null;
let pathOrSlime3 = null;
let pathOrSlime4 = null;
let pathOrSlime5 = null;

//section variables
const raceSection = document.getElementById("sectionRace");
const introSection = document.getElementById("sectionIntro");
const stats = document.querySelector(".statsSec");
const blackhall = document.getElementById("blackHall");
const fields1 = document.getElementById("sectionFields1");
const fields2 = document.getElementById("sectionFields2");
const fields3 = document.getElementById("sectionFields3");
const fields4 = document.getElementById("sectionFields4");
const fields5 = document.getElementById("sectionFields5");
const bhShop = document.getElementById("blackhallShop");
const bhInn = document.getElementById("blackhallInn");
const tournament = document.getElementById("sectionTournament");
const battleField = document.getElementById("battleField");
const forcedSlime1 = document.getElementById("forcedSlime1");
const forcedSlime2 = document.getElementById("forcedSlime2");
const forcedSlime3 = document.getElementById("forcedSlime3");

//button variables
const nextButton1 = document.getElementById("nextButton1");
const nextButton2 = document.getElementById("nextButton2");
const nextButton3 = document.getElementById("nextButton3");
const nextButton4 = document.getElementById("battle1F");
const nextButton5 = document.getElementById("battle2F");
const nextButton6 = document.getElementById("battle3F");
const nextButton7 = document.getElementById("battle4F");
const nextButton8 = document.getElementById("battle5F");
const statsField1 = document.getElementById("statsField1");
const statsField2 = document.getElementById("statsField2");
const statsField3 = document.getElementById("statsField3");
const statsField4 = document.getElementById("statsField4");
const statsField5 = document.getElementById("statsField5");
const statsButton3 = document.getElementById("buttonStats3");
const statsButton2 = document.getElementById("buttonStats2");
const fBackButt1 = document.getElementById("fieldBack1");
const fBackButt2 = document.getElementById("fieldBack2");
const fBackButt3 = document.getElementById("fieldBack3");
const fBackButt4 = document.getElementById("fieldBack4");
const fBackButt5 = document.getElementById("fieldBack5");
const sBackButt = document.getElementById("shopBack");
const bhBack = document.getElementById("townStatsBack");
const backButton1 = document.getElementById("buttonBack1");
const backButton2 = document.getElementById("buttonBack2");
const buyButton1 = document.getElementById("buttonBuy1");
const buyButton2 = document.getElementById("buttonBuy2");
const ft1 = document.getElementById("fastTravel1");

//functions

//updates level display
function updateLevel() {
  document.getElementById("level").innerHTML = level;
}

//updates health display
function updateHealth() {
  document.getElementById("health").innerHTML = health;
}

//updates stamina display
function updateStamina() {
  document.getElementById("stamina").innerHTML = stamina;
}

//updates magicka display
function updateMagicka() {
  document.getElementById("magicka").innerHTML = magicka;
}

//updates melee attack display
function updateMelee() {
  document.getElementById("melee").innerHTML = meleeA;
}

//updates magic attack display
function updateMagic() {
  document.getElementById("magic").innerHTML = "+" + magicA;
}

//updates gold display
function updateGold() {
  goldAmount.forEach((span) => {
    span.innerHTML = gold;
  });
}

//updates health potion display
function updateHPotions() {
  hPotionI.forEach((span) => {
    span.innerHTML = hPotion;
  });
}

//updates stamina potion display
function updateSPotions() {
  sPotionI.forEach((span) => {
    span.innerHTML = sPotion;
  });
}

//updates magicka potion display
function updateMPotions() {
  mPotionI.forEach((span) => {
    span.innerHTML = mPotion;
  });
}

//updates weapon display
function updateWeapon() {
  weaponI.forEach((span) => {
    span.innerHTML = weapon;
  });
}

//knight stats
function knightNM() {
  maxMagicka = 0;
  magicka = 0;
  updateMagicka();
  maxStamina += 50;
  stamina = maxStamina;
  updateStamina();
  magicA += 45;
  updateMagic();
}

//wizard stats
function wizardNS() {
  maxStamina = 0;
  stamina = 0;
  updateStamina();
  magicA += 5;
  updateMagic();
}

//werewolf stats
function werewolfP() {
  meleeA += 6;
  magicA += 3;
  updateMelee();
  updateMagic();
}

//mermaid and plantoid stats
function merOrPlant() {
  maxMagicka += 25;
  magicka = maxMagicka;
  updateMagicka();
}

//ice witch and lizard stats
function iceOrLiz() {
  magicA += 5;
  updateMagic();
}

//level up function
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
  meleeA += 2;
  updateMelee();
  exp -= expNext;
  expNext = 100 + 50 * (level - 1);
  updateLevel();
}

//gain exp function (use this one for level ups, put in a number for the ())
function gainExp(expGained) {
  exp += expGained;
  while (exp >= expNext) {
    levelUp();
  }
}

//hides all other random stuff and shows only stats in fields
function showOnlyStats() {
  stats.style.display = "block";
  document.getElementById("showName").innerHTML = name;
  document.getElementById("showName").style.display = "block";
  sBackButt.style.display = "none";
  bhBack.style.display = "none";
}

//selections

//description box hover
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

//race selections
selection.forEach((sel) => {
  sel.addEventListener("click", function () {
    selection.forEach((c) => c.classList.remove("selected"));
    sel.classList.add("selected");
    selectedRace = sel.getAttribute("data-name");
  });
});

//field or town selections (beginning)
selection.forEach((sel) => {
  sel.addEventListener("click", function () {
    selection.forEach((c) => c.classList.remove("selected"));
    sel.classList.add("selected");
    selectFT = sel.getAttribute("data-name");
  });
});

//town center selections

//town 1 center selections
selection.forEach((sel) => {
  sel.addEventListener("click", function () {
    selection.forEach((c) => c.classList.remove("selected"));
    sel.classList.add("selected");
    selectSIFT = sel.getAttribute("data-name");
  });
});

//shop selections

//shop 1 selections
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

//inn selections

//inn 1 selections
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

//field selections

//field 1 selections
selection.forEach((sel) => {
  sel.addEventListener("click", function () {
    selection.forEach((c) => c.classList.remove("selected"));
    sel.classList.add("selected");
    pathOrSlime1 = sel.getAttribute("data-name");
  });
});

//buttons

//enter name button
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

//next buttons

//1st next button (select a race)
nextButton1.addEventListener("click", function () {
  if (selectedRace && name) {
    if (selectedRace == "Knight") {
      document.getElementById("silver").style.display = "block";
      document.getElementById("wood").style.display = "none";
      knightNM();
    } else if (selectedRace == "Wizard") {
      wizardNS();
    } else if (selectedRace == "Werewolf") {
      document.getElementById("wood").style.display = "none";
      werewolfP();
    } else if (selectedRace == "Mermaid") {
      merOrPlant();
    } else if (selectedRace == "Plantoid") {
      merOrPlant();
    } else if (selectedRace == "Ice_Witch") {
      iceOrLiz();
    } else if (selectedRace == "Lizard") {
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

//2nd next button (town or field)
nextButton2.addEventListener("click", function () {
  if (selectFT == "Town") {
    stats.style.display = "none";
    introSection.style.display = "none";
    startFT.style.display = "none";
    blackhall.style.display = "block";
  } else if (selectFT == "Fields") {
    stats.style.display = "none";
    fields1.style.display = "block";
    startFT.style.display = "none";
    introSection.style.display = "none";
  }
});

//3rd next button (town 1 selection)
nextButton3.addEventListener("click", function () {
  if (selectSIFT == "Shop") {
    blackhall.style.display = "none";
    bhShop.style.display = "block";
  } else if (selectSIFT == "Inn") {
    blackhall.style.display = "none";
    bhInn.style.display = "block";
  } else if (selectSIFT == "Fields") {
    blackhall.style.display = "none";
    fields1.style.display = "block";
  } else if (selectSIFT == "Tournament") {
    blackhall.style.display = "none";
    tournament.style.display = "block";
  }
});

//next button field 1 path or slime
nextButton4.addEventListener("click", function () {
  if (pathOrSlime1 == "path1F") {
    fields1.style.display = "none";
    fields2.style.display = "block";
  } else if (pathOrSlime1 == "battle1F") {
    fields1.style.display = "none";
    battleField.style.display = "block";
  }
});

//next button field 2 path or slime
nextButton5.addEventListener("click", function () {
  if (pathOrSlime2 == "path2F") {
    fields2.style.display = "none";
    forcedSlime1.style.display = "block";
  } else if (pathOrSlime2 == "battle2F") {
    fields2.style.display = "none";
    battleField.style.display = "block";
  }
});

//next button field 3 path or slime
nextButton6.addEventListener("click", function () {
  if (pathOrSlime3 == "path3F") {
    fields3.style.display = "none";
    forcedSlime2.style.display = "block";
  } else if (pathOrSlime3 == "battle3F") {
    fields3.style.display = "none";
    battleField.style.display = "block";
  }
});

//next button field 4 path or slime
nextButton7.addEventListener("click", function () {
  if (pathOrSlime4 == "path4F") {
    fields4.style.display = "none";
    fields5.style.display = "block";
  } else if (pathOrSlime4 == "battle4F") {
    fields4.style.display = "none";
    battleField.style.display = "block";
  }
});

//next button field 5 path or slime
nextButton8.addEventListener("click", function () {
  if (pathOrSlime5 == "path5F") {
    fields5.style.display = "none";
    forcedSlime3.style.display = "block";
  } else if (pathOrSlime5 == "battle5F") {
    fields5.style.display = "none";
    battleField.style.display = "block";
  }
});

//stats buttons

//stats button for field 1
statsField1.addEventListener("click", function () {
  fields1.style.display = "none";
  fBackButt1.style.display = "block";
  ft1.style.display = "block";
  showOnlyStats();
});

//stats button for town 1 center
statsButton3.addEventListener("click", function () {
  blackhall.style.display = "none";
  stats.style.display = "block";
  document.getElementById("showName").innerHTML = name;
  document.getElementById("showName").style.display = "block";
  bhBack.style.display = "block";
  ft1.style.display = "none";
  fBackButt1.style.display = "none";
  sBackButt.style.display = "none";
});

//stats button for shop 1
statsButton2.addEventListener("click", function () {
  bhShop.style.display = "none";
  stats.style.display = "block";
  document.getElementById("showName").innerHTML = name;
  document.getElementById("showName").style.display = "block";
  sBackButt.style.display = "block";
  ft1.style.display = "none";
  fBackButt1.style.display = "none";
  bhBack.style.display = "none";
});

//back buttons

//back button out of stats to field1
fBackButt1.addEventListener("click", function () {
  stats.style.display = "none";
  fields1.style.display = "block";
  document.getElementById("showName").style.display = "none";
});

//back button out of stats to town 1 center
bhBack.addEventListener("click", function () {
  stats.style.display = "none";
  blackhall.style.display = "block";
  document.getElementById("showName").style.display = "none";
});

//back button out of stats to shop 1
sBackButt.addEventListener("click", function () {
  stats.style.display = "none";
  bhShop.style.display = "block";
  document.getElementById("showName").style.display = "none";
});

//back button out of shop 1 to town 1 center
backButton1.addEventListener("click", function () {
  bhShop.style.display = "none";
  blackhall.style.display = "block";
  item.style.display = "none";
});

//back button out of inn 1 to town 1 center
backButton2.addEventListener("click", function () {
  bhInn.style.display = "none";
  blackhall.style.display = "block";
});

//buy buttons

//buy button shop 1
buyButton1.addEventListener("click", function () {
  if (selectItem) {
    if (gold >= selectItem.cost) {
      gold -= selectItem.cost;
      updateGold();
      item.style.display = "block";
      setTimeout(() => {
        item.style.display = "none";
      }, 1500);
      if (selectItem.name === "health-potion") {
        hPotion++;
        updateHPotions();
      } else if (selectItem.name === "stamina-potion") {
        sPotion++;
        updateSPotions();
      } else if (selectItem.name === "magic-potion") {
        mPotion++;
        updateMPotions();
      } else if (selectItem.name === "wood-sword") {
        weapon = "Wood sword";
        updateWeapon();
        meleeA += 3;
        updateMelee();
      } else if (selectItem.name === "silver-sword") {
        weapon = "Silver sword";
        updateWeapon();
        meleeA += 6;
        updateMelee();
      }
    } else {
      alert("Not enough gold!");
    }
  } else {
    alert("Oops no item selected");
  }
});

//buy button inn 1
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

//fast travel buttons

//fast travel to town 1 from field 1
ft1.addEventListener("click", function () {
  stats.style.display = "none";
  blackhall.style.display = "block";
  document.getElementById("showName").style.display = "none";
});

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
