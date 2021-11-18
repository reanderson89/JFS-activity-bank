alert("Please input either 'a' , 'b' , 'c' , or 'd' only for each question.") 

let question1 = "Who won the 2021 World Series? \n a. Atlanta Braves \n b. Houston Astros \n c. New York Yankees \n d. Athletics"
let question2 = "What is the capital of Oregon? \n a. Seattle \n b. Salem \n c. Miami \n d. Los Angeles"
let question3 = "What is 3x+2, when x = -2? \n a. 8 \n b. 4 \n c. -4 \n d. 0"
let question4 = "What color is made when you combine yellow and red? \n a. Green \n b. Grey \n c. Blue \n d. Orange"

const questionsArray = [question1,question2,question3,question4]
const correctAnswers = ["a","b","c","d"]

let correctCounter = 0;

const startTrivia = () => {
    const answersArray = [];

    for (let i = 0; i < questionsArray.length; i++){
        let usersAnswer = prompt(questionsArray[i]);
        if (usersAnswer === correctAnswers[i]){
            usersAnswer += ", That Is Correct"
            correctCounter++;
        } else {
            usersAnswer += ", That Is Not Correct"
        }
        answersArray.push(usersAnswer);
    }
    displayAnswers(questionsArray,answersArray);
}

const displayAnswers = (queArr, ansArr) => {
    let summary = `You got ${correctCounter} questions correct \n`;
    for ( let i = 0; i < queArr.length; i++){
        summary += `For question "${queArr[i]}"\n You answered: ${ansArr[i]} \n \n`
    }
    alert(summary);

}







console.log(startTrivia());