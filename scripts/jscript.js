// (function() {

let audio;
//array of all tracks
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


$('#pauseButton').hide(); //Hide Pause on page load

playTune($('#trackNames li:first-child')); // Play First Song if play clicked / have ready when page loaded
	
function playTune(songPassedIn){

    let songIndexNumber = songPassedIn.index(), // get current song index number
        songCurrentTitle = songPassedIn.text(); //get current song title

    $('#trackTitle h1').text('Track Title : ' + songCurrentTitle); //display current song title on track title area
    // console.log('song name: ' + songCurrentTitle);

    //add a '0' if track number is less than 10
    if (songIndexNumber < 9) {
        $('#trackNumber h1').text('Track No: 0' + (songIndexNumber + 1)); //display current track number on track number area
        }
        else{
        $('#trackNumber h1').text('Track No: ' + (songIndexNumber + 1)); //display current track number on track number area
    }
    	
    audio = new Audio('media/' + songs[songIndexNumber]); // create new Audio Object
    
	// if no track playing yet
	if(!audio.currentTime){
        $('#durationTimeStart').text('<- Play');
        $('#durationTimeEnd').hide();
    }
    
    //add & remove active class of track
	$('#trackNames li').removeClass('active');
    songPassedIn.addClass('active');
	displayDuration();
    
}


//Play Button
$('#playButton').click(function(){

    audio.play();
    
	$('#playButton').hide();
	$('#pauseButton').show();
    
    displayDuration();
    $('#durationTimeEnd').fadeIn(900);
    
    //normalize play speed if reverse or fast forward clicked
    audio.playbackRate = 1.0;

});

//Pause Button
$('#pauseButton').click(function(){
    audio.pause();
    
	$('#pauseButton').hide();
	$('#playButton').show();
});


// previous skip
$('#skipBackward').click(function(){
    audio.pause();
    
    let prev = $('#trackNames li.active').prev();
    if (prev.length == 0) {
        prev = $('#trackNames li:last-child');
    }
    playTune(prev);

	audio.play();
    displayDuration();
    $('#durationTimeEnd').fadeIn(2000);
    $('#pauseButton').show();
	$('#playButton').hide();
    
});
//rewind
$('#rewind').click(function(){
    audio.playbackRate -= 0.9;
    
    $('#pauseButton').hide();
	$('#playButton').show();
    console.log('clickd again');
});

// skip to next 
$('#skipForward').click(function(){

    audio.pause();
    let next = $('#trackNames li.active').next();
    if (next.length == 0) {
        next = $('#trackNames li:first-child');
    }
    playTune(next);
	audio.play();
    displayDuration();
    $('#durationTimeEnd').fadeIn(2000);
    $('#pauseButton').show();
	$('#playButton').hide();
    
});

// fast forward track
$('#fastForward').click(function(){
    audio.playbackRate += 10;
    
    $('#pauseButton').hide();
	$('#playButton').show();
});
//track list Song Click
$('#trackNames li').click(function () {
    audio.pause();
    playTune($(this));
	audio.play();
    displayDuration();
    $('#playButton').hide();
    $('#pauseButton').show();
    $('#durationTimeEnd').fadeIn(2000);
    
});

// let currentVol;

// Volume Control slider (fix to change volume smoothly)
$('#volBar').change(function(){

   let currentVol = audio.volume = parseFloat(this.value / 10);

// console.log(currentVol); 
});
	
// track time Duration
function displayDuration(){
    // count track up display
	$(audio).on('timeupdate', function(){
		
        let secs = parseInt(audio.currentTime % 60),//Get time in seconds as integer
            mins = parseInt((audio.currentTime / 60) % 60);//Get time in minutes as integer

        //Add 0 if seconds less than 10
        secs = (secs < 10) ? "0" + secs : secs;
        $('#durationTimeStart').text(mins + '.' + secs);
                
        // use progressing value to update css of element
        let value = (audio.currentTime > 0) ? ((100 / audio.duration) * audio.currentTime) : '0';
        $('#displayProgress').css('width', value + '%'); // change progress bar css width with progress value

        //count track down display
        let duration = parseInt( audio.duration ), // get duration of current track
            currentTime = parseInt( audio.currentTime ), // get current time of current track
            secsRemainTotal, 
            minsRemainTotal;

        let timeRemain = duration - currentTime;
        secsRemainTotal = timeRemain % 60;
        minsRemainTotal = Math.floor( timeRemain / 60 ) % 60;
        
        secsRemainTotal = secsRemainTotal < 10 ? "0" + secsRemainTotal : secsRemainTotal;
                
        $('#durationTimeEnd').text(minsRemainTotal + '.' + secsRemainTotal);
        
        // if track ends without continuous play selected - show play button again
        if (currentTime == duration) {
            $('#pauseButton').hide();
	        $('#playButton').show();
        }
        
	});
};
///////////////////Navigation////////////////////

// XMLHttpRequests to insert data on first click of each nav link
$('#about, #videos, #contact').on('click' , insert_Content);
$('#home').on('click' , re_Insert_Content);

function re_Insert_Content(){
    let currentId = this.id;
    console.log('re-pop test iz : ' + currentId);
    //get other divs and add display none to hide
    $('#about_Content, #home_Content, #contact_Content,#videos_Content').addClass('displayNone').removeClass('displayBlock');

    //remove display none and add display block to show this div
    $('#' + currentId + '_Content').addClass('displayBlock').removeClass('displayNone');

}

//main nav first click insert function
function insert_Content(){
    let currentId = this.id;
    console.log('test iz : ' + currentId);
    //get other divs and add display none to hide / remove display block
    $('#home_Content, #about_Content, #contact_Content,#videos_Content').addClass('displayNone').removeClass('displayBlock');
    
    //remove display none and add display block to show this div
    $('#' + currentId + '_Content').addClass('displayBlock').removeClass('displayNone');
    
        let xhr = new XMLHttpRequest();
        xhr.open("GET", currentId + ".html");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200 ) {

                    let newContent = document.getElementById(currentId + '_Content'); //get about div
                    newContent.innerHTML = xhr.responseText; // populate about div
            }
        }
        xhr.send(null);
        //remove XMLHttpRequest after clicking once and add new event to reshow data without downloading again
        $('#' + currentId).off('click' , insert_Content).on('click' , re_Insert_Content);
     
}; //end about functions
