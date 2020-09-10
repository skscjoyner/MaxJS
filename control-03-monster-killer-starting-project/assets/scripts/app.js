const ATTACK_VALUE = 10; // use all caps to indicate GLOBAL VALUE that will NEVER CHANGE!
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK"; // MODE_ATTACK = 1
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_ATTACK = 2
// LOG EVENTS
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue = prompt("Maximum life for you and the monster", "100");

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    // every log entry has these fields.
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
	};
	
	switch (ev){
		case LOG_EVENT_PLAYER_ATTACK:
			logEntry.target = "MONSTER";
			break;
			// Spell out the logEntry
		case LOG_EVENT_PLAYER_STRONG_ATTACK:
			logEntry = {
				event: ev,
				value: val,
				target: "MONSTER",
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		case LOG_EVENT_MONSTER_ATTACK:
			logEntry = {
				event: ev,
				value: val,
				target: "PLAYER",
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		case LOG_EVENT_PLAYER_HEAL:
			logEntry = {
				event: ev,
				value: val,
				target: "PLAYER",
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		case LOG_EVENT_GAME_OVER:
			logEntry = {
				event: ev,
				value: val,
				finalMonsterHealth: monsterHealth,
				finalPlayerHealth: playerHealth,
			};
			break;
		default:
			logEntry = {}
	}
  // if (event === LOG_EVENT_PLAYER_ATTACK) {
  //   // lines 30 - 39 are shorter and more dynamic NO NEED TO ADD LogEntry array since created above.
  //   logEntry.target = "MONSTER"; // adds the 'target' value to the object.
  //   // ABOVE IS SHORTER, MORE DYNAMIC CODE
  // } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   // for readability
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "MONSTER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (event === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  //   // IF USING SHORTER CODE, NO NEED FOR FOLLOWING CODE BLOCK AS NO TARGET VALUE IS NEEDED OR PASSED.
  // } else if (event === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  addBonusLife();
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth; // bonus life resets health to previous level before death.
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead, but the bonus life saved you.");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("The Monster has been killed! You win!");
    writeToLog(
      LOG_EVENT_GAME_OVER, // event - state of game = EV
      "PLAYER WON", // game end message = VAL
      currentMonsterHealth, // monster health
      currentPlayerHealth // player health
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("The Monster defeated you!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You tied!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "IT WAS A DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    // Working on adding new code to reset bonus life when game is reset.
    if (confirm("Do you want to play again?")) {
      reset();
    } else {
      alert("Thank you for playing!");
    }
  }
}

function attackMonster(mode) {
	// Use ternerary operator if short code (limited events) present. Otherwise, use if/else code for readability (commented code)
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent = mode = MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if (mode === "ATTACK") {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === "STRONG_ATTACK") {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  writeToLog(
    logEvent,
    monsterDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) { // > 80
    alert("You can't heal to more than your max initial health!");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
	// FOR LOOP
	for (let i = 0; i < 3; i++) {
		console.log('--------------');
	}
	// for (let i = 10; i > 0; i++) {
	// if 'i' is inside the loop statement = '10 - 1'
	// for (let i = 10; i > 0;) {
	// 	i--; // decrement done outside of the loop.
	// 	console.log(i); // '9 - 0'
	// }
	// for (let i = 0; i < battleLog.length; i++) { // gives access to the index
	// 	console.log(battleLog[i]);
	// }
	// console.log(battleLog);
// }

	// // FOR-OF LOOP
	// let i = 0;
	// for (const /* not changed, but NEW 'const' for every loop iteration */ logEntry /* constant name describes what's in the array */ of battleLog /* array you want to loop thrught */) { // no access to index unless managed manually. ONLY FOR ARRAYS
	// 	console.log(i); // managing the index manually
	// 	console.log(logEntry);
	// 	i++;
	// }

	// FOR-IN LOOP INSIDE THE FOR-OF LOOP
	let i = 0;
	for (const logEntry of battleLog) { // no access to index unless managed manually. ONLY FOR ARRAYS
		console.log(`#${i}`);
		for (const key in logEntry) { // ONLY FOR OBJECTS
			console.log(`${key} => ${logEntry[key]}`);
		}
		i++;
	}

	// WHILE LOOP - FIRST LOOK
	let j = 0;
	while (j < 3) {
		console.log('yyy'); // condition checked before loop is run and will not show '3'
		j++ // MUST ALWAYS ADD INCREMENT OR WILL GET INFINITE LOOP
	}

	// DO-WHILE LOOP
	let k = 0;
	do {
		console.log(k);
		k++;
	} while (k < 3);  //condition checked after loop is run and will show '3'
	// console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
