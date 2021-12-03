# Group Activity Part 2

* Make sure that your list is rendering properly before starting Part 2.

- In Part 2 of this activity we will be writing code that adds songs to the songs array we created from Part 1.

## Walk-through

- Create an event listener on the form that is listening for a "submit".

- Pass in a function to the second argument of the event listener. Make sure to add `event` as a parameter to that function, and then add `event.preventDefault()` as the first line of code in the function. This will allow us to get the users information, without it the form will reset when submitted and we will lose the user input.

- Inside of the function for your event listener create a variable that will hold the users song.

- Check to make sure the user input is not blank (an empty string). If it is blank it should not be added to the array of songs.

- If the user input is a valid string then push it into your songs array.

- Make sure to reset the value of the input field after as well, so they can easily add more songs.

- Lastly you will want to run your function (still inside the event listener) that renders (displays) your songs array to the page (the function you built in Part 1).