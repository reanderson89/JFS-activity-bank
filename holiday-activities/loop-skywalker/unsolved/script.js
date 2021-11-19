// VARIABLES
// ==========================================================================
var action;

// REFERENCE THE reWriteStats() function FOR A LIST OF THE REQUIRED PROPERTIES
var xwing = {
  make: "starfighter",
// DELETE THIS COMMENT AND ADD THE REST OF THE REQUIRED PROPERTIES

  flyToSpace: function () {
    alert("Increasing speed by: " + this.maxAcceleration);

    // ADJUST MAX ACCELERATION BELOW

    alert("New Max acceleration: " + this.maxAcceleration);
  },

  flyAroundGalaxy: function () {
    alert("Starting speed: " + this.maxAcceleration);

    // ADJUST MAX ACCELERATION BELOW

    alert("New speed: " + this.maxAcceleration);
    alert("xwing needs a tuneup!");

    
  },

  getTuneUp: function () {
    alert("xwing is ready to go!");
    
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
    //FIRELASER AND REWRITE THE STATS BELOW
  
  }
  // If the action is c, run the following functions/methods.
  else if (action === "c" && xwing.isWorking) {
    //FLY TO SPACE AND REWRITE THE STATS BELOW
  
  }
  // If the action is w, run the following functions/methods.
  else if (action === "g" && xwing.isWorking) {
    //FLY AROUND THE GALAXY AND REWRITE THE STATS BELOW
    
  }
  // If the action is t, run the following functions/methods.
  else if (action === "t") {
    //GET A TUNE UP AND REWRITE THE STATS BELOW
    
  }
}
