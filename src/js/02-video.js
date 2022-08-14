import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);



player.on('timeupdate', throttle(takeTime, 1000));

 function takeTime (e) {
        localStorage.setItem("videoplayer-current-time",e.seconds)
    }

const currentTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});




// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });