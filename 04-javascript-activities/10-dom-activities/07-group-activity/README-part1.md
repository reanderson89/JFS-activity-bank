# DOM activity as a group

* Choose someone to be the driver for this activity, they will share their screen the entire time. Feel free to code along on your own computer as you work together. Use Slack to share code with each other throughout the activity and at the end make sure that everyone has access to the material created if they would like to continue working on it later.

# Part 1 - Render Favorite Songs

In this part of the activity your group will write code thats renders an array of your favorite songs to a list.

## Walk-through

* Look at your `index.html` file. The necessary html has been provided for you.

* Open your `script.js` file, all of the code will be created here. 

 - Start by creating your DOM variables for your `song-input`, `song-list`, `song-form`, and `song-count`. 
    * You will only be using the `song-list` and `song-count` for Part 1.

 - create an array with 5 song titles stored in it.

  - create a function that will render your songs (display them to the page) when run.

  - this function should...
    1. Update your song count based off the length of your array
    2. Loop through your array of songs and display them to the page
    3. Each iteration of your loop should create a new `<li>` element, then it should add content to the element, and then it should append it to a list.

  - call your function and make sure that your list is displaying properly before moving to step 2.
