//fix globals later
let currentSong = 0;

let songs =['track_1_rush_cover_R30_Overture.mp3',
            'track_2_rush_cover_Earthshine.mp3',
            'track_3_rush_cover_Subdivisions.mp3',
            'track_4_rush_cover_Free Will.mp3',
            'track_5_rush_cover_Dreamline.mp3',
            'track_6_rush_cover_Manhattan Project.mp3',
            'track_7_rush_cover_Marathon.mp3',
            'track_8_rush_cover_Heart Full of Soul.mp3',
            'track_9_rush_cover_Bravado.mp3',
            'track_10_rush_cover_Closer to the Heart.mp3',
            'track_11_rush_cover_Limelight.mp3',
            'track_12_rush_cover_Mission.mp3'];

$('#pauseButton').hide();

let audio = new Audio();


// $('#playButton').on('click', playTune);
$('#trackNames li h2').on('click', playTune);

function playTune(){ //when title clicked in songlist
    if (!audio.currentTime) {
        $('#durationTime').html('0.00');
        audio.src = 'media/' + songs[0];
        let songIndexNumber = songs[0];
        audio.play();
    
    }

    $('#trackNames li').removeClass('active'); //remove active class from unactive li's
        songIndexNumber = $(this).parents("li").index();
        let listClass = $(this).parents("li").addClass('active'); //add active class
        let songCurrentTitle = $(this).text(); //get current song title
        $('#trackTitle h1').text('Track Title : ' + songCurrentTitle); //display current song title on track title area
        $('#trackNumber h1').text('Track No: ' + (songIndexNumber + 1)); //display current track number on track number area
        
        audio.src = 'media/' + songs[songIndexNumber];
        audio.play();
        $('#playButton').hide();
        $('#pauseButton').show();
};
//play button
$('#playButton').click(function(){
    if (!audio.currentTime) {
        // audio.src = 'media/' + songs[currentSong];
        // audio.play();
        playTune();
        // console.log('reading');
    }
    audio.play();
    $('#pauseButton').show();
    $('#playButton').hide();
});
//pause button
$('#pauseButton').click(function(){
    audio.pause();
    $('#pauseButton').hide();
    $('#playButton').show();
});