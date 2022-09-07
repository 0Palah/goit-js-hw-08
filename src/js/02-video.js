import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
console.log(iframeEl);

const player = new Player(iframeEl);
console.log(player);

const currentVideoTime = data => {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(currentVideoTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
console.log(localStorage.getItem('videoplayer-current-time'));
