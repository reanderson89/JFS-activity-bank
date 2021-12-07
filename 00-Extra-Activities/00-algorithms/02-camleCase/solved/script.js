function toCamelCase(str){
    let newStr = str.replace(/-/g, ' ').replace(/_/g, " ");
    let wordsArray = newStr.split(' ');
      
    for (let i = 1; i < wordsArray.length; i++){
      let word = wordsArray[i];
      let lettersArray = word.split("");
      lettersArray[0] = lettersArray[0].toUpperCase();
      let newWord = lettersArray.join("");
      wordsArray.splice(i, 1, newWord);
    }
      let camelCase = wordsArray.join("");
      return camelCase;
    }

    console.log(toCamelCase("camel-case"));