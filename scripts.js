const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = [
    'Alan Walker - Darkside (feat. AuRa and Tomine Harket)', 'Alan Walker - Faded (AUDIO)', 'Alan Walker_ Sabrina Carpenter & Farruko - On My Way (Lyrics)', 'Anson Seabra Chill Mix', 'AURORA - I Went Too Far - Copy', 'Angus & Julia Stone - For you', 'AURORA - Runaway', 'Billie Eilish - everything i wanted', 'Billie Eilish - listen before i go','Billie Eilish - when I was older', 'Billie Eilish - ilomilo', 'Billie Eilish - OCEAN EYES', 'Billie Eilish - watch (Audio)','Billie_Eilish_Khalid_-_lovely_HitNaijacom', '08 BRACKETS', 'Burna Boy - 20 10 20 (Audio)', 'Coldplay - A message-1', 'Coldplay sparks', 'Coldplay - Always In My Head(Lyrics Video)', 'Coldplay - Champion Of The World', 'Coldplay - In My Place','Coldplay - Talk (Official)', 'Coldplay trouble', 'DaBaby_-_Bop', 'David Guetta - Shot Me Down ft. Skylar Grey (Lyric Video)', 'Davido-D-G-ft-Summer-Walker-(JustNaija.com)', 'Deep End - Fousheé', 'Disturbed - The Sound Of Silence [Official Music Video]', 'Drake - Toosie Slide', 'drivers license', 'Eminem - Darkness', 'Eminem - Going Through Changes -', 'Eminem - Never Love Again', 'Eminem_-_Good-Guy-', 'Eminem_When_Im_Gone', 'eminem-tragic-endings-ft-skylar-grey', 'Fleurie - Hurricane (Official Video)-1', 'Fleurie - Hurts Like Hell ( With Lyrics )', 'Freya Ridings - Lost Without You (Official Video)', 'I Love Your Presence - Jenn JohnsonHere Is Love', 'Bones - Hillsong United', 'hillsong Brooke Ligertwood & Taya Smith - NEW SONG 2018 (Remembrance)', 'hillsong Oceans Will Part Hillsong (Featuring Annie Garratt)', 'hillsong Thank You Jesus Fellowship Songs', 'Jay-Z - Marcy Me (DawnFoxes.com)-1', 'Jcole_-_Love_Yourz_gistmp3.com.ng', 'Johnny Drille - Mystery Girl', 'Jorja_Smith_-_The_One_HitNaijacom', 'Jorja-Smith-Let-Me-Down', 'Marshmello & Anne-Marie - FRIENDS (Lyric Video) OFFICIAL FRNE ANTHEM', 'Marshmello ft. Khalid - Silence (Official Lyric Video)', 'Passenger Catch In The Dark (Official Video)-1', 'passenger home', 'Passenger When We Were Young (Official Video)-1', 'passengerr patient love', 'Rita Ora - Anywhere', 'Rita Ora - Let You Love Me [Official Video]', 'Rita Ora - Only Want You [Official Audio]', 'Rosie Carney - Awake Me', 'Rosie Carney Bullet Proof ... I Wish I Was', 'Sarz_x_WurlD_-_Ego_Nobody_Wins_', 'Sasha Sloan - Older (Lyric Video)', 'Kygo - This Town ft. Sasha Sloan (Official)', 'Kygo, Sasha Sloan - I ll Wait', 'Sasha Sloan - Again (Audio)', 'Sasha Sloan - Dancing With Your Ghost', 'Sasha Sloan - Too Sad To Cry', 'TaylorSwiftBreathe', 'Sasha Sloan - Thank God', 'Sasha Sloan - Until It Happens To You', 'Shy_Martin_-_Lose_You_Too', 'Take All of Me - Recorded Live in Houston 2016 - Hillsong UNITED', 'Target You (feat. Syemca)', 'Taylor Swift - cardigan', 'Taylor Swift Begin Again (Audio)', 'Tems - Damages', 'TEMS TRY ME', 'Teni-Uyo-Meyo', 'The Paper Kites - By My Side feat. Rosie Carney', 'The Paper Kites - Climb On Your Tears (feat. Aoife O Donovan)', 'The Paper Kites - For All You Give (feat. Lucy Rose)', 'The Paper Kites - It s Not Like You', 'The Paper Kites - On the Train Ride Home', 'The World to Come ft. Josephine Foster', 'Wande-Coal-Again', 'Wizkid-Joro-(JustNaija.com)', 'Wizkid-Ginger-ft-Burna-Boy', 'Yelawolf Ft. Eminem - Best Friend [320]']
//keep track of the song
let songIndex = 0;
console.log(songs.length);

//Initially load song into the DOM
loadSong(songs[songIndex])

//update the song details.. create the function above
function loadSong(song){
    title.innerText = song;
    // audio.src = `music/${song}.mp3`
    // cover.src = `images/${song}.jpg`
    audio.src = 'music/'+ song + '.mp3'
    cover.src = 'images/'+ song + '.jpg'
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length - 1 //aka 17-1 which is 16...ie. the last index song
    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++
    if(songIndex > 87){
        songIndex = songs.length - 88
    }
    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement //here we just destructured the event object for what we need 
    const progressPercent = (currentTime / duration) * 100 //we multiplied by 100 so it doesnt return a decimal
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX//wanna find the width on the x axis
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration

}

//Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying){
        pauseSong()
    }
    else{
        playSong()
    }
})


//Change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)


