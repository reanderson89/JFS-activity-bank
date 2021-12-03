let songForm = document.getElementById('song-form');
let songInput = document.getElementById('song-input');
let songCount = document.getElementById('song-count');
let songList = document.getElementById('song-list');

let songsArray = ["Roller Skates", "Guava Lane", "Circles", "23", "The Pavilion"]

const displaySongs = () => {
    songList.innerHTML = "";
    songCount.innerHTML = songsArray.length;
    
    for(let i = 0; i < songsArray.length; i++){
        let newSongItem = document.createElement('li');
        newSongItem.innerHTML = songsArray[i];
        songList.appendChild(newSongItem);
    }
}

songForm.addEventListener("submit", function(event){
    event.preventDefault();

    let userSong = songInput.value.trim();

    if(userSong === ""){
        return;
    } else {
        songsArray.push(userSong);
    }

    songInput.value = "";
    displaySongs();
})

displaySongs();