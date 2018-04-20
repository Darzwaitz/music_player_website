<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="description" content="Describe the website">
	<meta name="keywords" content="grace under pressure tribute">
<!-- 	<meta name="author" content="Big D">-->
<title>Grace Under Pressure</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/playerCtrls.css">
	<link rel="stylesheet" href="css/mediaQueries.css">
</head>

<body>

    <div class="container" role="main">
    <!-- <div> -->

        <header>
            <nav>
                <div id="siteName">    
                    <h1>Grace Under Pressure - A tribute to Rush</h1>
                </div>
                <div id="navLinks">
                    <ul>
                        <li id="about" class="mainNav" ><a href="#about">About</a></li>
                        <li id="home" class="mainNav navActive"><a href="#home">Home</a></li>
                        <li id="videos" class="mainNav"><a href="#videos">Videos</a></li>
                        <!-- <li id="photos" class="mainNav"><a href="#photos">Photos</a></li> -->
                        <li id="schedule" class="mainNav"><a href="#schedule">Schedule</a></li>
                        <li id="contact" class="mainNav"><a href="#contact">Contact</a></li>
                    </ul>  
                </div>
            </nav>
        </header>
        <!-- landing section -->
        <section id="home_Content"  class="sectionContent">
                <ul id="trackNames">
                        <li><h2>R30 Overture</h2></li>
                        <li><h2>Earthshine</h2></li>
                        <li><h2>Subdivisions</h2></li>
                        <li><h2>Free Will</h2></li>
                        <li><h2>Dreamline</h2></li>
                        <li><h2>Manhattan Project</h2></li>
                        
                        <li><h2>Marathon</h2></li>
                        <li><h2>Heart Full of Soul</h2></li>
                        <li><h2>Bravado</h2></li>
                        <li><h2>Closer to the Heart</h2></li>
                        <li><h2>Limelight</h2></li>
                        <li><h2>Mission</h2></li>
                    </ul>    
            
        </section>  <!-- end home_Content section (trackList)  -->


        <section id="about_Content"  class="displayMinusIndex sectionContent" ></section>
        <section id="contact_Content" class=" displayMinusIndex sectionContent" ></section>
        <section id="videos_Content"  class="displayMinusIndex sectionContent" ></section>
        <section id="schedule_Content"  class="displayMinusIndex sectionContent" ></section>
            

                <!-- temp testing code -->
                    <!-- <div id="videos_Content" class="">
                        <div class="vid-container">
                            <iframe id="vid_frame" width="80%" height="300" src="https://www.youtube.com/embed/Bv-NT_gaJwY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div> -->
                    <!--end video content-->
                    <!-- <div id="vid-item">
                        <div class="thumb">
                            <img src="http://img.youtube.com/vi/-7yWVUmBrD4/2.jpg">
                        </div>
                    
                        <div id="desc">
                                Earthshine by Rockhouse
                        </div> </div>-->
                    
                    <!-- End vid-item -->
                
                
            <!-- </section>    -->
            
        <!-- </main>  -->
        <footer>
            <span><h4>Pete'z website - Copyright &copy; 2018 
                <br><a href="http://darrenkellyportfolio.com" title="Darren Kelly - Design & Development Portfolio" target="_blank"> - design & development by Darz - </a></h4>
            <!-- link to external font site -->
            <a href="http://www.2112.net/rushfonts" title="Font for this site" target="_blank">
                <img id="font-img" border="1" style="border-color: silver" src="http://www.2112.net/rushfonts/rfpbanner.gif" alt="Click here for the RUSH Font Project"></a>
            </span>
        </footer>
            
    </div><!-- main grid container end	 -->
                                <!-- PLAYER AREA -->
    <div id="playerArea" class="ctrls">

        <div id="trackNumber"><h3>Track NO: </h3></div> <!--Track NO: 01 -->
        <div id="trackTitle"><h3>Track Title is test</h3></div> <!-- end trackTitle-->
        <div id="moreInfo" title="Coming Soon"><h3>more info</h3></div> <!-- more info -->

        <div id="volumeBar2">
                <div id="volIcon"></div>
                <input id="volBar" type="range" min="0" max="11"/>
        </div> <!-- end volumeBar -->

        <div id="skipBackward"> </div>
        <div id="rewind" title="To Be Updated"></div>
        <div id="playButton"> </div> 
        <div id="pauseButton"> </div> 
        
        <div id="durationTimeStart"></div> 
        <div id="emptyProgress"></div>
        <div id="displayProgress"></div>
        <div id="durationTimeEnd"></div>

        <div id="fastForward"></div>
        <div id="skipForward"></div>
        <div id="volumeBar">
            <div id="volIcon"></div>
            <input id="volBar" type="range" min="0" max="11"/>
        </div> <!-- end volumeBar -->
    </div> <!-- END playerArea -->

<script src="scripts/jquery-3.3.1.js" ></script>
<script src="scripts/jscript.js" ></script>

</body>
</html>