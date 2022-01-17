const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

const playImg = document.querySelector('.play-img')
const checkbox = document.querySelector('#checkbox')


//song titles
const songs = [
    "Alan Walker - Alone (audio)", "Alan Walker, Ava Max - Alone, Pt. II", 'Alan Walker - Darkside (feat. AuRa and Tomine Harket)', 'Alan Walker - Faded (AUDIO)', 'Alan Walker_ Sabrina Carpenter & Farruko - On My Way (Lyrics)', "A DJ Snake - Let Me Love You ft. Justin Bieber", "A Kygo & Selena Gomez - It Ain't Me", "A Mike Posner - I Took A Pill In Ibiza", "A Twenty One Pilots - Heathens (Audio)", "A Sasha Sloan - I ll Wait", 'Ariana Grande - Side To Side (ft. Nicki Minaj) [Audio]', 'Ariana Grande - No Tears Left To Cry (Audio)', 'Ariana Grande - 7 rings (Audio)', "ANAVITÓRIA - Perdoa", "ANAVITÓRIA - Terra", "ANAVITÓRIA, Jovem Dionísio - Aguei", "ANAVITÓRIA, Lenine - Lisboa", "Amaarae - SAD GIRLZ LUV MONEY ft Moliy", 'Anson Seabra Chill Mix', 'AURORA - I Went Too Far - Copy', 'Angus & Julia Stone - For you', "Angus and Julia Stone - Big Jet Plane", "Angus and Julia Stone - I'm Not Yours", "Angus & Julia Stone - A Heartbreak (Audio only)", "Angus and Julia Stone - And The Boys [Official Music Video]", "Angus and Julia Stone - The Devils Tears", "Julia Stone - Dance (Lyrics) Music Cavier", "Julia Stone - It's All Okay [Official Music Video]", "Julia Stone - We All Have (Lyrics) Ft.Matt Berninger", "Angus & Julia Stone - Chateau", "Angus & Julia Stone - Hold On", "Angus & Julia Stone - Just a Boy lyrics", "Angus & Julia Stone - Draw Your Swords [Audio]", "Angus & Julia Stone - Mango Tree lyrics", "Angus & Julia Stone - Nothing Else (Audio)", "Angus & Julia Stone - Take You Away", "Angus & Julia Stone - Youngblood (Audio)", "Angus & Julia Stone Wherever You Are", "Angus &amp Julia Stone - Heart Beats Slow", "Angus & Julia Stone - For Remembering (Lyric Video)",  'AURORA - Runaway', 'Billie Eilish - everything i wanted', 'Billie Eilish - listen before i go', 'Billie Eilish - Your Power (Official Music Video)', "Billie Eilish - Everybody Dies", "Billie Eilish - Happier Than Ever", 'Billie Eilish - when I was older', 'Billie Eilish - ilomilo', 'Billie Eilish - OCEAN EYES', 'Billie Eilish - watch (Audio)','Billie_Eilish_Khalid_-_lovely_HitNaijacom', "Birdy - Keeping Your Head Up [Official]", "Birdy - Second Hand News", "Birdy - Surrender", "Birdy - The Otherside", "Birdy - Voyager", "Birdy - Young Heart", "BIRDY + RHODES - Let It All Go", '08 BRACKETS', 'Cassandra Ambiguous Norway', 'Cassandra Hard Drive', "Baz Luhrmann - Everybody's free to wear sunscreen", 'cassandra Jenkins - Crosshairs', 'cassandra Jenkins - Michelangelo', 'Coldplay - A message-1', 'Coldplay sparks', 'Coldplay - Always In My Head(Lyrics Video)', 'Coldplay - Champion Of The World', 'Coldplay - In My Place','Coldplay - Talk (Official)', 'Coldplay trouble', 'DaBaby_-_Bop', "Dagrin - If I die", "Dagrin - Thank God", "Darey - Not The Girl", "Darey - No Stars", 'David Guetta - Shot Me Down ft. Skylar Grey (Lyric Video)', "DeJ Loaf - No Fear", "Days Aren't Long Enough", "Des'ree - Life", 'Deep End - Fousheé', 'Disturbed - The Sound Of Silence [Official Music Video]', 'Drake - Toosie Slide', 'drivers license', "Olivia Rodrigo - happier", 'Eminem - Darkness', 'Eminem - Going Through Changes -', 'Eminem - Never Love Again', 'Eminem_-_Good-Guy-', 'Eminem_When_Im_Gone', "BoB ft Eminem Hayley Williams of Paramore -Airplanes Part2", "Dr. Dre- Forgot About Dre ft. Eminem", "Eminem - Guts Over Fear ft. Sia", "Eminem - Mockingbird", "Eminem - Stan ft. Dido", "Eminem - Superman", "Fat Joe, Dre - Lord Above (Audio) ft. Eminem & Mary J. Blige", "lil Wayne ft eminem - drop the world", 'eminem-tragic-endings-ft-skylar-grey', "GRIP - Walkthrough! feat. Eminem", "Skylar Grey, Polo G, Mozzy, Eminem - Last One Standing (Audio)", "Eminem - In Your Head", "Eminem - Walk On Water (Audio) ft. Beyoncé", 'Fleurie - Hurricane (Official Video)-1', "Ruelle, Fleurie - Carry you (Lyrics)", 'Fleurie - Hurts Like Hell ( With Lyrics )', 'Freya Ridings - Lost Without You (Official Video)', 'Gotye - Somebody That I Used To Know HQ Sound', 'Greg Laswell - Dodged A Bullet', "Highs & LowsEagle's Wings - Hillsong Worship", "Closer Than You Know - of Dirt and Grace - Hillsong UNITED", "Elohim - Hillsong Worship", "In Control - Hillsong Worship", "Paula CTN", "Paula CTN3", "Paula CTN4", "paula CTN5", "Paula CTN6", "Paula CTN10", "The Lord PS 39s Prayer- Hillsong Worship", "Days Gone By (Live at Hillsong Conference) - Hillsong Young & Free", "Hillsong Heart Of God (Official Lyric Video)", "Hillsong - I Surrender",  "As It Is (In Heaven) - Hillsong Worship", "The Passion - Hillsong Worship", "Hillsong Charity Gayle - Thank You Jesus for the Blood (Live)", "Be Still - Hillsong Worship", 'I Love Your Presence - Jenn JohnsonHere Is Love', 'Hosanna - Hillsong Worship', "Desert song Hillsong", 'Hillsong UNITED A Million Suns Lyric Video', 'hillsong Even When It Hurts', 'hillsong  Jenn Johnson of God (Official) - Bethel Music & Jenn Johnson VICTORY', 'hillsong - Jenn Johnson We Will Not Be Shaken-1', 'hillsong You re Gonna Be Okay - Brian & Jenn Johnson After All These Years', 'Oceans (Where Feet May Fail) - Hillsong UNITED (Lyrics)', "Take All of Me - Recorded Live in Houston 2016 - Hillsong UNITED", "Grace To Grace - Hillsong Worship", 'Bones - Hillsong United', 'hillsong Brooke Ligertwood & Taya Smith - NEW SONG 2018 (Remembrance)', 'hillsong Oceans Will Part Hillsong (Featuring Annie Garratt)', 'hillsong Thank You Jesus Fellowship Songs', 'Justin Timberlake - Mirrors (Audio)', 'Justin Timberlake - What Goes Around Comes Around HQ', "JoJo - Too Little Too Late", 'God Loves Ugly - Jordin Sparks', "Jorja Smith - Blue Lights (Official Audio)", "Jorja Smith - The One", "Jorja Smith - Bussdown (Audio) ft. Shaybo", "Jorja Smith - Addicted (Lyrics)", 'Jorja-Smith-Let-Me-Down', 'Jay-Z - Marcy Me (DawnFoxes.com)-1', 'Jcole_-_Love_Yourz_gistmp3.com.ng', 'Stranded Lyrics Jennifer Paige', 'Johnny Drille - Mystery Girl', 'Katy Perry The One That Got Away (Audio HQ)', "Kesha - Praying (Official Video)", 'Khalid - Better (Official Audio)', "Kate Ellis - Bluebirds and Rye", 'Kojo Funds - Check (feat. RAYE)', 'K-Raye & Rudimental - Regardless (Official Audio)', 'Lana Del ReySummertime Sadness Audio', 'Lana Del Rey - Born To Die (Official Audio)', 'Lana Del Rey - Video Games', 'Lana Del ReyBlue Jeans lyrics', 'Labrinth - still dont know my name', 'Lady Antebellum - Need You Now', 'Lucy Dacus - Thumbs (Official Audio)', "LAngel Haze - Cleaning Out My Closet", "LAngel Haze ft. Sia - Battle Cry", "Lucy Dacus - Brando (Official Lyric Video)", 'Lucy Dacus - Addictions (Official Music Video)', 'Lucy Dacus - La Vie En Rose (Lyric Video)', 'Marshmello & Anne-Marie - FRIENDS (Lyric Video) OFFICIAL FRNE ANTHEM', 'Marshmello ft. Khalid - Silence (Official Lyric Video)', 'Olamide - Rock', "Timbaland - Apologize ft. OneRepublic", "One Republic - Counting stars", 'OST Julieta Venegas - Ese Camino (Official Video)', 'OST Regina Spektor - Youve Got Time [Official Audio]', "Orange Is The New Black Season 5 ending song", 'OST Rodrigo Amarante - Tuyo (Générique Narcos) [Lyrics video]', "OST 02Shin Seung HunLove Of Iris", "OST 11-Destiny Love (IRIS OST)", "OST 13-Sad Love (IRIS OST)", "OST Can't You Come Back", "OST Insooni - Heaven, please (Jumong Original Soundtrack)", "OST Karen O - Anti-Lullaby", "OST B4 I Fall GEMS- WO u (Without You)", 'Passenger Catch In The Dark (Official Video)-1', 'passenger home', 'Passenger When We Were Young (Official Video)-1', 'passengerr patient love', 'Pink - Family portrait Lyrics', "P!nk - Please Don't Leave Me (Audio)", 'P!nk - Try (Official Lyric Video)', 'P!nk & Willow Sage Hart - Cover Me In Sunshine (Lyrics)', "Rag'n'Bone Man, P!nk - Anywhere Away from Here (Official Audio)", 'Who Knew - P!nk (Audio Original)', 'Portugal. The Man - Feel It Still (Lyrics Lyric Video)', 'Resonance-lee lee', 'Rita Ora - Anywhere', 'Rita Ora - Let You Love Me [Official Video]', 'Bag of Money (feat. Rick Ross & T-Pain)', "DJ Khaled - I'm On One (Explicit Version) ft. Drake, Rick Ross, Lil Wayne", 'Free Mason', 'Meek Mill Ft. Nicki Minaj & Chris Brown - All Eyes On You (Official Audio)', 'Rick Ross - Diced Pineapples ft. Wale & Drake (Explicit)', 'Rick Ross - Stay Schemin (feat. Drake and French M', 'Rick Ross - Aston Martin Music ft. Drake & Chrisette Michele (Official Video)', 'Rick Ross - Aston Martin Music ft. Drake, Chrisette Michele', 'Rick Ross - Sorry ft. Chris Brown (Explicit)', 'Rita Ora - Only Want You [Official Audio]', 'Rosie Carney - Awake Me', 'Rosie Carney Bullet Proof ... I Wish I Was', "Runtown - For Life", 'Kygo - This Town ft. Sasha Sloan (Official)', 'Selena Gomez, Marshmello - Wolves (Lyrics)', "Diddy - Dirty Money - Coming Home ft. Skylar Grey (Audio)", "Skylar Grey  - Partly Cloudy With A Chance of Tears", "Skylar Grey - Come Up For Air", "Skylar Grey - Dark Thoughts", "Skylar Grey - I Know You From Fifty Shades Of Grey", "Sophia Scott - She Ain't Me", 'Steve CrownWe Wait On You (Official Audio)', "Stormrex - 30 (Official Audio) ft. iLLbliss", 'Surf Mesa - ily (i love you baby) (feat. Emilee) (Official Audio)', 'Kygo, Sasha Sloan - I ll Wait', 'Sasha Sloan - Again (Audio)', 'Sasha Sloan - Dancing With Your Ghost', 'Sasha Sloan - Older (Lyric Video)', 'Sasha Sloan - Too Sad To Cry', "Sasha Alex Sloan - The Only", 'Sasha Sloan - Thank God', 'Sasha Sloan - Until It Happens To You', "Sasha Sloan - when was it over (Lyric Video) ft. Sam Hunt", 'Shy_Martin_-_Lose_You_Too', "SHY Martin - Feelings", "Skylar Grey Come up for Air", 'Taylor Swift - Last Kiss (Audio)', 'Taylor Swift - The Best Day', 'Taylor Swift - Dear John (Audio)', 'Speak Now', 'Taylor Swift - Love Story (Audio)', "Taylor Swift safe and sound", "Sad Beautiful Tragic", "Taylor Swift - Lover (Audio)", "Taylor Swift - Change (Taylor's Version) (Lyric Video)", "Taylor Swift - Mean (Audio)", 'Taylor Swift - The Story of Us (Audio)', "Highway Don't Care", 'Taylor Swift - Fifteen (Audio)', 'Taylor Swift - Mine (Audio)', 'Taylor Swift - Ronan', 'Taylor Swift - Run', 'Taylor Swift - You Belong With Me (Audio)', 'Taylor Swift All Too Well', "Taylor Swift - All Too Well (10 Minute Version)", "Taylor Swift - Treacherous", 'Taylor Swift feat.Ed Sheeran - Everything Has Changed (Audio)', 'Two Is Better Than One - Boys Like Girls (Feat. Taylor Swift) (Lyrics)', 'TaylorSwiftBreathe',  'Taylor Swift - cardigan', 'Taylor Swift Begin Again (Audio)', 'Taylor Swift - Back to December (Audio)', 'Taylor Swift - champagne problems (Official)', 'Taylor Swift - Delicate (Audio)', 'The Lucky One', 'Taylor Swift - Enchanted (Audio)', 'Taylor Swift - Long Live (Audio)', 'Taylor Swift - This Love', "Taylor Swift - You're Not Sorry (Taylor's Version) (Lyric Video)", 'Taylor Swift Today was a fairytale', 'The Last Time - Taylor Swift (feat. Gary Lightbody) LYRICS', 'The Moment I Knew - Taylor Swift', 'The Fray How To Save A Life', 'The Weeknd - In Your Eyes (Official Audio)', 'The Weeknd - Save Your Tears (Official Audio)', 'Tems - Damages', 'TEMS TRY ME', 'The Paper Kites - By My Side feat. Rosie Carney', 'The Paper Kites - Climb On Your Tears (feat. Aoife O Donovan)', 'The Paper Kites - For All You Give (feat. Lucy Rose)', 'The Paper Kites - It s Not Like You', 'The Paper Kites - On the Train Ride Home', 'The World to Come ft. Josephine Foster', 'Wale - Bad feat. Tiara Thomas [Official Music Video]', 'Wild Thoughts feat Rihanna Bryson Tiller', 'Wale f. Rihanna - Bad (Remix) [Official Audio]', 'Wale Ft. Usher - Matrimony (Official Audio)','Burna-Boy-Gum-Body-feat-Jorja-Smith-(JustNaija.com)', "Burna Boy - Real Life feat. Stormzy [Official Audio]", "Burna Boy - 23 [Official Audio]", 'Burna Boy - 20 10 20 (Audio)', "Larry Gaaga - Baba Nla ft. 2Baba, Burna Boy", "Simi ft 2baba - Original Baby", "2Baba ft. FalzRise Up", 'Target You (feat. Syemca)', "2Face - Dance In The Rain", "2Face - 4 Instance", "2Face - If Love Is a Crime", "2Face - E Be Like Say", "2Face - Ocho", "2face Idibia - Oh Papa", "2Face - One Love", "2Face - No Shaking", "2Baba - Hate What U Do To Me", "2Face - Ole", "2Face - True Love", "2Face - U No Holy Pass", "Tems - The Key (Audio)", "Tems - Free Mind", "Tems - Ice T", 'Teni-Uyo-Meyo', "NINIOLA - MARADONA", "Jilex Anderson - Afro Lover", "CKay - Love Nwantiti Remix ft. Joeboy & Kuami Eugene", "Ckay, ElGrandeToto - Love Nwantiti", "CKay -  Emiliana [Official Audio]", "Ice Prince & CKay - Shakara", "CKay - Felony", "Timaya ft. Buju – Cold Outside", "FIREBOY DML   PERU", "Fireboy DML ft. Ed Sheeran — Peru (Remix) [Audio]", "Ruger - Bounce (Official Audio)", "Ruger - Dior", "Ruger - Snapchat", "Joeboy Alcohol", "Lojay and Sarz Monalisa", "Lojay and Sarz Tonongo", "Ayra Star - Bloody Samaritan", "Adekunle Gold - Sinner", 'Wande-Coal-Again', "Wande Coal - Come My Way", "Wande Coal, DJ Tunez - Iskaba", 'Davido-D-G-ft-Summer-Walker-(JustNaija.com)', "WizKid - Come Closer ft. Drake", "Wizkid - Ojuelegba", "WizKid - Reckless (Audio)", 'Wizkid-Ginger-ft-Burna-Boy', "WizKid - Essence (Audio) ft. Tems", "WizKid - Essence (Audio) ft. Justin Bieber, Tems", "WizKid - Blessed (Audio) ft. Damian Marley", "WizKid - Smile (Audio) ft. H.E.R.", "WizKid - Grace (Audio)", "Skepta & WizKid - 'Energy (Stay Far Away)' (Official Video)", "WizKid - Longtime (Audio) ft. Skepta", "WizKid - Piece of Me (Audio) ft. Ella Mai", "WizKid - No Stress (Audio)", "WizKid - Anoti (Audio)", "WizKid - Mood (Audio) ft. Buju", 'Wizkid-Joro-(JustNaija.com)', "WurlD - Show You Off Feat Walshy Fire and Shizzi", "MAD (Official Video) - SARZ X WURLD", 'Sarz_x_WurlD_-_Ego_Nobody_Wins_', "TROBUL (Official Video) - SARZ X WURLD", "WurlD - WAYO (Kpe Le Wu) (Official Video)", "Wolf Alice - The Last Man On Earth", "YENDRY - YOU (Official Video) ft. Damian Marley"]   

checkbox.addEventListener('change', () => {
    //change website theme
    document.body.classList.toggle('dark');
});

//keep track of the song
let songIndex = 0;
// console.log(songs.length);

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

    playImg

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
        songIndex = songs.length - 1 //aka 131-1 which is 16...ie. the last index song
    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong(){
    songIndex++
    if(songIndex > 358){
        songIndex = songs.length - 359
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

/*
Trial
*/
function loadImage(){
    playImg.setAttribute('src', 'images/home.jpg')
    playImg.classList.add('img-container')
    playImg.classList.add('play')
}

function  removeImage(){
    playImg.removeAttribute('src')
    playImg.classList.remove('img-container')

}

//Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying){
        pauseSong()
        removeImage()
    }
    else{
        playSong()
        loadImage()
    }
})


//Change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)


