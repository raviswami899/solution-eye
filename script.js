// Intersection Observer for animations only
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        } else {
            entry.target.classList.remove('section-visible');
        }
    });
}, {
    threshold: 0.25
});

document.querySelectorAll('.parallax-section').forEach(section => {
    observer.observe(section);
});

// Resize observer for responsive sections
const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
        const $section = $(entry.target);
        $section.css('min-height', `${window.innerHeight}px`);
    });
});

document.querySelectorAll('.parallax-section').forEach(section => {
    resizeObserver.observe(section);
});

// YouTube Video API Integration
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('aboutVideo', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.querySelector('.play-button').addEventListener('click', () => {
        player.playVideo();
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        document.querySelector('.play-overlay').style.opacity = 0;
    }
}

// Button hover effect
$(document).ready(function () {
    $('.buy-btn').hover(
        function () {
            $(this).css('transform', 'scale(1.05)');
        },
        function () {
            $(this).css('transform', 'scale(1)');
        }
    );
});

// Basic smooth scroll
$(document).ready(function(){
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});

// Add to YouTube API integration
