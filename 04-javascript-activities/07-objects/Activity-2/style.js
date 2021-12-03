let denverBootCamp = {
    team: {
        instructor: {
            name: 'Robert Anderson',
            city: 'Bend',
            catchPhrase () {
                console.log("Don't forget to turn your camera's on please.");
            }
        },
        teachingAssistants: {
            male: {
                name: 'Andrew Bergstrom',
                city: 'Seattle',
                catchPhrase () {
                    console.log("Let's go back to our wheel of names!");
                }
            },
            female: {
                name: 'Stephany Bolivar',
                city: 'Brooklyn',
                catchPhrase () {
                    console.log("Woot Woot");
                }
            }
        }
    },
    students: {
        name: 'Renan',
        city: 'Unknow',
        catchPhrase () {
            console.log('N/a');
        }
    }
}

console.log(denverBootCamp);
denverBootCamp.students.catchPhrase = "";
console.log(denverBootCamp);
