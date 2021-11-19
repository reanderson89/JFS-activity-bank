// VARIABLES
// ==========================================================================
var action;

var xwing = {
  make: "starfighter",
  model: "T-65B",
  color: "gray",
  secondaryColor: "red",
  massInTons: 10,
  maxAcceleration: 3700,
  isWorking: true,

  flyToSpace: function () {
    alert("Current cruising speed is: " + this.maxAcceleration +" light years per hour");

    this.maxAcceleration = this.maxAcceleration + 8;

    alert("Boosters initiating, speed is now: " + this.maxAcceleration +" light years per hour");
  },

  flyAroundGalaxy: function () {
    alert("Begin warp speed: " + this.maxAcceleration +" light years per hour");

    this.maxAcceleration = this.maxAcceleration + 24000;

    alert("Current warp speed: " + this.maxAcceleration +" light years per hour");
    alert("xwing needs a tuneup!");

    this.isWorking = false;
  },

  getTuneUp: function () {
    alert("xwing is ready to go!");
    this.isWorking = true;
  },

  fireLaser: function () {
    alert("pew pew pew pew pew");
  },
};

// FUNCTIONS
// ==============================================================================

// Logs all of our xwing's current stats to the console.
function reWriteStats() {
  console.log("Make: " + xwing.make);
  console.log("Model: " + xwing.model);
  console.log("Color: " + xwing.color);
  console.log("SecondaryColor: " + xwing.secondaryColor);
  console.log("Mass in metric tons: " + xwing.massInTons);
  console.log("Max Acceleration: " + xwing.maxAcceleration);
  console.log("Is Working: " + xwing.isWorking);
  console.log("------------------------------");
}

// MAIN PROCESS
// ==============================================================================

// A while loop makes more sense here than a for loop, because we don't know how long the user will want to play the game
// This loop will end when the user presses Cancel, thus setting the action variable to "null"
while (action !== null) {
  // Prompt user to input an action
  action = prompt(
    "Type 'f' to fire lasers, 'c' to cruise around solar system, 'g' to fly around the galaxy, or 't' to get a tuneup."
  );

  // If the action is h, run the following functions/methods.
  if (action === "f") {
    xwing.fireLaser();
    reWriteStats();
  }
  // If the action is c, run the following functions/methods.
  else if (action === "c" && xwing.isWorking) {
    xwing.flyToSpace();
    reWriteStats();
  }
  // If the action is w, run the following functions/methods.
  else if (action === "g" && xwing.isWorking) {
    xwing.flyAroundGalaxy();
    reWriteStats();
  }
  // If the action is t, run the following functions/methods.
  else if (action === "t") {
    xwing.getTuneUp();
    reWriteStats();
  }
}
