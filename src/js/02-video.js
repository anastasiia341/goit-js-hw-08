import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

function getItemStorage() {
    const savedItem = localStorage.getItem("videoplayer-current-time");
    return savedItem;
}

player.on(
    'timeupdate',
    throttle(evt => {
        const currentTime = evt.seconds;
        localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
    }, 1000)
);

if (getItemStorage() > 0) {
    player.setCurrentTime(getItemStorage());
}