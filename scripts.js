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
    const songs = ["Aldous Harding - No Peace At All OITNB", "Aldous Harding - Imagining My Man", "Aldous Harding - Elation (Official Video)", "Aldous Harding - Zoo Eyes (Official Video)", "Aldous Harding - Swell Does the Skull", "Aldous Harding - Blend (Official Video)", "Aldous Harding - Stop Your Tears", "Alicia Keys - Unthinkable", "Alicia Keys - New York [HQ]", "Alicia Keys - LIke You'll Never See Me Again", "Alina Baraz - More Than Enough", "Anson Seabra - Broken (Official)", "Anson Seabra - Emerald Eyes (Official)", "Anson Seabra - I Can t Carry This Anymore", "Anson Seabra - It's Raining, It's Pouring", "Anson Seabra - Kerosene (Official)", "Anson Seabra - Last Time", "Anson Seabra - Robin Hood Sarcastic Sounds Remix", "Anson Seabra - Somewhere in Ann Arbor (Official)", "Anson Seabra - Stay With Me", "Anson Seabra - Trying my best", "Anson Seabra - Walked Through Hell", "Anson Seabra - Welcome to Wonderland", 'Anna Leone - I Never Really (Official Video)', 'Anna Leone - My Soul I (Official Video)', 'Anna Leone - Still I Wait (Official Video)', 'Anna Leone - Wondering (Audio)', "Anna Leone - Into The Cold (Audio)", "Anna leone (I've Waited)", "Anna leone All That I Ever Did", "Anna leone Do You Ever", "Anna leone In the Morning", "Anna leone Love You Now", "Anna leone Once", "Anna leone Remember", "Anna leone Your Light", "Arlissa - Healing (Acoustic)", 'Ari Lennox - Shea Butter Baby (Lyrics)', "Ashley Serena - In your arms", "Ashley Serena - Lullaby of Woe", "Ashley Serena - The Witch's Daughter", 'AURORA - Exist For Love - Copy', "AURORA - Runaway", "AURORA - I Went Too Far", "AURORA - Lucky", 'AURORA - The Seed', "Askjell - To Be Loved (Lyrics) Ft. AURORA", "Avery Anna - I Love You More", "Avril Lavigne - When You're Gone - Audio", "Avril Lavigne - Wish You Were Here - Audio", "Innocence", "Beyoncé - Broken-Hearted Girl", "Beyoncé - Halo (Audio)", "Beyonce- Once In A Lifetime", "I Was Here", "Billie Marten - Bird (Official Audio)", "Billie Marten - More Than This (Amazon Original)", "Circus modern love", "C Fire modern love", "C Days Aren't Long Enough", "Camila Meza - Cucurrucucu OITNB", "Charlotte OC - Where It Stays", 'Charlie Puth - Attention [Official Video]', "A Thousand Years - Christina Perri -Official Audio-", "CLANN - I Hold You", "Clara Mae - Not Sad Anymore", "Digital Daggers - Save Us From Ourselves OITNB", "Coldplay - Always In My Head", "Coldplay - Fix You", "Coldplay - The Scientist", "Coldplay - What If", "Coldplay sparks", "Coldplay trouble", "Coldplay warning sign", "Daniel Bedingfield - If You're Not the One (Audio)", "Enya - If I Could Be Where You Are", "Enya - Only Time", "Enya - So I Could Find My Way", "Enya - The Humming", "Eurielle - Carry Me [Emotional Vocal Orchestral]", "Eurielle - Eurielle [Emotional Vocal Orchestral]", "Eurielle - Hate Me (Lyrics)", "Eurielle - Song of Durin", 'Fades Away (Tribute Concert Version at Friends Arena, Stockholm2019)', 'Fenne Lily - Berlin', 'Fenne Lily - Bud', 'Fenne Lily - Car Park (Official Audio)', 'Fenne Lily - Hypochondriac (Official Audio)', 'Fenne Lily - On Hold', 'Fenne Lily - Three Oh Nine', 'Fenne Lily - Top To Toe', 'Fenne Lily - What s Good', 'Fenne Lily birthday', 'Fenne Lily Brother', 'Fenne Lily Elliott', 'Fenne Lily i Used To Hate My Body But Now I Just Hate You', 'Fenne Lily I, Nietzsche', 'Fenne Lily laundry and Jet Lag', 'Fenne Lily More Than You Know', 'Fenne Lily Someone Else s Trees', "Fenne Lily - To Be a Woman Pt. 2", 'Fenne Lily The Hand You Deal', 'Fenne Lily. - For A While ( )', "Fenne Lily Katie Malco's Brooklyn cover", 'Henry Jamison · Tourism (feat. Fenne Lily) [Official Audio]', 'Keir, Fenne Lily - leave a light on', 'Max Jury - The Desperate Kingdom of Love (with Fenne Lily)', "gregory alan isakov - san luis", "Gregory Alan Isakov- Amsterdam", "Gregory Alan Isakov- Honey, It's Alright", "Gregory Alan Isakov- If I Go, I'm Goin", "Gregory Alan Isakov - This Empty Northern Hemisphere", "Gregory Alan Isakov- She Always Takes It Black", "Gregory Alan Isakov- That Moon Song", "Gregory Alan Isakov- The Stable Song", "Gregory Alan Isakov- Time Will Tell", "Kodaline - High Hopes Lyrics", "Hollow Coves - Hello", "Hollow Coves - Blessings (Official Audio)", "Hollow Coves - The Woods", "Hollow Coves - These Memories", "Ibeyi - Waves", "Isak Danielson - If You Ever Forget That You Love Me (Official Video)", 'In Control - Hillsong Worship', 'Jhene Aiko - Drinking and Driving (Lyrics)', 'Jhene_Aiko_-_Moments_ft_Big_Sean(songbaze.com)', 'Johnny Drille - Bad Dancer (Performance Video)', "Kalandra - Borders (Lyrics)", "Kalandra - Brave New World (Lyric Video)", "Kalandra - Ensom (Unplugged)", "Kalandra - Helvegen", "KALANDRA - Slow Motion (Subtitulada a español)", "Kalandra - Virkelighetens Etterklang", "Kalandra - Waiting Game", "Kalandra - Wonderland", "Kate Ellis - Bluebirds and Rye (Official Video)", 'Kina - Can We Kiss Forever ft. Adriana Proenza', 'Kina - get you the moon ft. Snow', "What a Wonderful World Kina Grannis", "White Flag - Dido (Kina Grannis Cover)", "You Are My Sunshine - Kina Grannis", "Kina Grannis - I Never Wanted Anything More Than I Wanted You", "Kina Grannis - Moonsong", "Kina Grannis - My Own", "Kina Grannis - Quiet", "Kiss Me - Sixpence None The Richer (Kina Grannis Cover)", "Iris - Goo Goo Dolls (Kina Grannis Cover)", "I Will Spend My Whole Life Loving You - Kina Grannis & Imaginary Future", "Coldplay - Yellow (Kina Grannis Cover)", "Kovacs - My Love", 'Khalid & Normani - Love Lies (Official Audio)', 'Khalid - OTW (Official Audio) ft. 6LACK, Ty Dolla $ign', "LÉON -  Come Home To Me", "LÉON - And it Breaks My Heart", "LÉON - Apart (Audio)", "LÉON - Chasing A Feeling", "LÉON - Die For You", "LÉON - Falling Apart (Audio)", "LÉON - Falling", "LÉON - Head And Heart On Fire", "LÉON - Hope Is A Heartache", "LÉON - I Believe in Us", "LÉON - In A Strangers Arms (Audio)", "LÉON - Liar (Audio)", "LÉON - Lost Time (Audio)", "LÉON - Pink (Audio)", "LÉON - Seventeen", "LÉON - You And I (Audio)", "LEON-And it Breaks My Heart", "Lily Kershaw - Darker Things", "Lily Kershaw - Dream a Little Dream of Me", "SYML feat. Lily Kershaw- Where's My Love [French version]", "Lily Kershaw - End of the World", "Lily Kershaw - Fears Become Wishes", "Lily Kershaw - Forever Young", "Lily Kershaw - Myth of New York", "Lily Kershaw - Ashes Like Snow", "Lily Kershaw - New Names", "Lily Kershaw - Now & Then (feat. Goody Grace) [OFFICIAL VIDEO]", "Lily Kershaw - Promises", "Lily Kershaw - Sleep PeacefullyLily Kershaw", "Lily Kershaw - Smile", "Lily Kershaw - Soft Dark Nothing", "Lily Kershaw - The Last Light", "Lily Kershaw - The Sea (feat. Jon Bryant)", "Lily Kershaw - Unrequited Night", "Lily Kershaw-My Way", "Lykke Li - Sleeping Alone", "Cocoon, Lola Marsh - I Got You", "Days to come - Lola Marsh", "Lola Marsh - Like in the movies", "Lola Marsh - Only For A Moment", "Lola Marsh - She's a Rainbow (audio)", "Lola Marsh - Wishing Girl (Official Audio)", 'Lukas Graham - 7 Years', "Lucy Dacus - Yours & Mine (Lyrics)", "Marathon (In Roses)", "Mary's Song - Connie & Rose Mary", "Meet Cute modern love", "Natalie Taylor - Wrecked", "Natalie Taylor Songs", "Nina Nesbitt - The Hardest Part", "Nina Nesbitt - Things I Say When You Sleep", "Nouvelle Vague- In A Manner Of Speaking", "Oh Wonder - Technicolour Beat hq", "The Cinematic Orchestra - To Build A Home", "Passenger - Life's For The Living", "Passenger The Way That I Love You (Official Audio)", "Passenger - Remember to Forget", "Passenger And I Love Her", "passenger everything", "Passenger - Words (lyric)", "Passenger Hell Or High Water", "passengerr patient love", "Rachel Hardy - Boyd - The Last Goodbye Cover", "Rachel Hardy - Dragon Age Inquisition", "Rachel Hardy - Jenny of Oldstones", "Rachel Hardy - My Jolly Sailor Bold", "Rachel Hardy - My mother told me", "Rachel Hardy - The misty mountains cold", "Rachel Hardy - Toss a coin", "Rachel Hardy - VIKINGS - If I Had a Heart", "Rachel Hardy - Vikings - Lagertha Death Song Theme [6x06]", "Rachel Hardy - Wayfaring Stranger", "Regina Price - Safe", "Regina Price - We Come Together", "Regina Price As You Fly", 'Rihanna - Love On The Brain', "Rihanna - Diamonds (Audio)", "Rihanna - Half Of Me", 'RUELLE - THE OTHER SIDE (OFFICIAL MUSIC VIDEO)', 'Rosie Carney Black Star', 'Rosie Carney - Hight And Dry', "Rosie Carney - Perfect Perfect Modern Love", 'Rosie Carney - Thousand (feat. Lisa Hannigan) [Official Audio]', 'Rosie Carney - Winter', 'Rosie Carney 7', 'Rosie Carney Bare', 'Rosie Carney Bullet Proof ... I Wish I Was', 'Rosie Carney Humans', 'Rosie Carney Orchid', 'Rosie Carney Your Moon', 'The Paper Kites - By My Side feat. Rosie Carney', "Sam Smith - I'm Not The Only One (lyrics) (HD)", 'Sam Smith - My Oasis (Lyric Video) ft. Burna Boy', "Sam Smith - Writing's On The Wall (Audio)", 'SHY Martin - Out of My Hands (Lyrics)', "Mike Perry - The Ocean (ft. Shy Martin) [Lyrics CC]", "SHY Martin - Feelings (Official Lyric Video)", "Skylar Stecker - You", "So I Say Original - Honor Hunter", 'SIMI, Ms Banks - THERE FOR YOU (Official Music Video)', 'Sophie Hunger - Le vent nous portera', "Pomme - à perte de vue (Clip Officiel)", "Pomme - Göttingen (Barbara) - Paroles Lyrics", "Pomme - Je sais pas danser", "Pomme - On brûlera", "Oscar Anton & Clementine - nuits d'été", "Maëlle - Sur un coup de tête", "Clio, Iggy Pop - L'appartement (en duo avec Iggy Pop) (Clip officiel)", "Clio - Tristan", "CLIO - Des équilibristes", "CLIO - Plein les doigts", "CLIO - Chamallow's Song", "CLIO - What What", "Clio - Elle voudrait [Letra Español - Paroles]", "CLIO - Romy S", "CLIO - Éric Rohmer est mort", "CLIO - Ai-je perdu le nord Subs Español", "CLIO - Haussmann à l'envers", "CLIO - Amoureuse [CLIP OFFICIEL]", "CLIO - T'as vu [CLIP OFFICIEL]", "CLIO -  Déjà Venise (Clip officiel)", "Vendredi sur Mer - Les filles désir [Paroles]", "Vendredi sur Mer - Écoute chérie (Clip officiel)", "Sky Li  - Bittersweet", 'SZA - Good Days (Audio)', "Sasha Sloan - when was it over (Lyric Video) ft. Sam Hunt", "sød ven - catacombs", "SYML - Symmetry [Official Audio]", "SYML-The War", "SYML - Girl [Official Music Video]", "SYML - Flags [Official Music Video]", "SYML - MrSandman (Audio)", "SYML - Where's My Love [Official Audio]", "SYML - DIM [Official Lyric Video]", "SYML - Fear Of The Water", "SYML - Take Me Apart [Official Audio]", "SYML - You Knew It Was Me [Full EP] (1)", "Those Who Wish Me Dead Soundtrack Ending - Lighthouse (William Prince)", "William Prince - Breathless [Official Video]", "Taylor Swift - Teardrops On My Guitar (Audio)", "Taylor Swift - If This Was A Movie", "The Saxophones - If You're On The Water", "The Saxophones - Just You [Official Audio]", "The Saxophones - Picture [Official Audio]", "The Saxophones - Singing Desperately [Official Audio]", "Tiesto - The Business (Official Lyric Video)", 'Tom Rosenthal - About The Weather', 'Tom Rosenthal - For You To Be Here (Official Music Video)', 'Tom Rosenthal - Go Solo', 'Tom Rosenthal - Going To Be Wonderful', 'Tom Rosenthal - It’s Been a Year', 'Tom Rosenthal - Its OK (Official Video)', 'Tom Rosenthal - Run For Those Hills, Babe', 'Tom Rosenthal - Worries', 'Tom Rosenthal and Fenne Lily - Have We Met Before', 'Tom Rosenthal feat. Billie Marten - Hugging You [Official Video]', "Yuna - Crush (Audio) ft. Usher", 'Zayn_Malik_-_Obsession_(djlist.net)','Zayn-Entertainer-AllNaijaEntertainment.com_.ng_']
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
    if(songIndex > 310){
        songIndex = songs.length - 311 //aka the first song in the index
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


