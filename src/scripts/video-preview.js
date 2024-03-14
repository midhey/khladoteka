function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        playerVars : {
            autoplay: 0,
            controls: 0,
            rel: 0,
            showinfo: 0,
            start: 15,
            iv_load_policy: 3,
        },
        videoId: 'Rd5Aa7Uliy8',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    var playPauseBtn = document.getElementById('playPauseBtn');
    playPauseBtn.addEventListener('click', function() {
        if (player.getPlayerState() == YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });
}