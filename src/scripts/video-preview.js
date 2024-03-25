document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("playPauseBtn");
    const closeButton = document.getElementById("close-video-popup");
    const videoPopup = document.getElementById("video-popup");
    const youtubeVideo = document.getElementById("youtube-video");

    openButton.addEventListener("click", function() {
        const videoId = "Rd5Aa7Uliy8";
        youtubeVideo.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
        videoPopup.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeButton.addEventListener("click", closePopup);

    videoPopup.addEventListener("click", function(event) {
        if (event.target === videoPopup) {
            closePopup();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });

    function closePopup() {
        youtubeVideo.src = "";
        videoPopup.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});


