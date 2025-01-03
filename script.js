const myRoster = [];

function Player(name, position, number) {
  // the constructor
  this.name = name;
  this.position = position;
  this.number = number;
}

Player.prototype.getName = function () {
  return this.name;
};
Player.prototype.getNumber = function () {
  return this.number;
};

Player.prototype.getPosition = function () {
  return this.position;
};

function addPlayerToRoster(name, position, number) {
  // do stuff here
  myRoster.push(new Player(name, position, number));
}

function showRoster() {
  const shelf = document.getElementById("shelf");
  let output = "";
  for (const player of myRoster) {
    output +=
      `<div class="playerCard">
    <div class="left">
      <div class="playerName">` +
      player.getName() +
      `</div>
      <div class="playerNum">` +
      player.getNumber() +
      `</div>
    </div>
    <div class="divider"></div>
    <div class="playerPosition">` +
      player.getPosition() +
      `</div>
  </div>`;
  }
  shelf.innerHTML = output;
}

const addPlayerUI = document.getElementById("newPlayer");
const dialog = document.getElementById("addPlayerDialog");
addPlayerUI.addEventListener("click", function () {
  dialog.showModal();
});
const form = document.querySelector(".addPlayerForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addPlayerToRoster(
    event.target.inputPlayerName.value,
    event.target.inputPlayerNumber.value,
    event.target.inputPlayerPosition.value
  );
  showRoster();
  form.reset();
  dialog.close();
});

addPlayerToRoster("DK Metcalf", "WR", "14");
addPlayerToRoster("Geno Smith", "QB", "7");
addPlayerToRoster("Devon Witherspoon", "CB", "21");
showRoster();
