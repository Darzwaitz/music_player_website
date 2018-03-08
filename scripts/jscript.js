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

    $('#trackNames li').removeClass('active'); //remove active class from unactive li's
        let songIndexNumber = $(this).parents("li").index();
        let listClass = $(this).parents("li").addClass('active'); //add active class
        let songCurrentTitle = $(this).text(); //get current song title
        $('#trackTitle h1').text('Track Title : ' + songCurrentTitle); //display current song title on track title area
        //add a '0' if track number is less than 10
        if (songIndexNumber < 9) {
        $('#trackNumber h1').text('Track No: 0' + (songIndexNumber + 1)); //display current track number on track number area
        }
        else{
        $('#trackNumber h1').text('Track No: ' + (songIndexNumber + 1)); //display current track number on track number area
        }

        if (!audio.currentTime) {
            $('#durationTime').html('0.00');
            audio.src = 'media/' + songs[0];
        audio.play();
        }
        audio.src = 'media/' + songs[songIndexNumber];
        audio.play();
        $('#playButton').hide();
        $('#pauseButton').show();
        displayDuration();
        
};

//play button
$('#playButton').click(function(){
    //if no track selected yet, play the first one
    if (!audio.currentTime) {
        $('#trackTitle h1').text('Track Title : R30 Overture'); //display current song title on track title area
        $('#trackNumber h1').text('Track No: 01'); //display current track number on track number area
        audio.src = 'media/' + songs[currentSong];
        audio.play();
        // playTune();
    displayDuration();
        
    }
    audio.play();
    $('#pauseButton').show();
    $('#playButton').hide();
    displayDuration();
});

//pause button
$('#pauseButton').click(function(){
    audio.pause();
    $('#pauseButton').hide();
    $('#playButton').show();
});

//time duration
function displayDuration(){
    $(audio).on('timeupdate' , function(){
        let secs = parseInt(audio.currentTime % 60);
        let mins = parseInt((audio.currentTime)/ 60)  % 60;
        if (secs < 10) {
            secs = '0' + secs;
        }
        $('#durationTime').text(mins + '.' + secs);
        let currentTimeValue = 0;
        if (audio.currentTime > 0) {
            currentTimeValue = ((100 / audio.duration) * audio.currentTime);
        }
        $('#displayProgress').css('width', currentTimeValue + '%')
    });
}