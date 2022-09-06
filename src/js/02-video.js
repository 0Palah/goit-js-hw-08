import Player from '@vimeo/player';

const iframeEl = document.querySelector('#vimeo-player');
console.log(iframeEl);

const player = new Player(iframeEl);
console.log(player);

const currentVideoTime = {};
player.on('timeupdate', function (data) {
  console.log(data);
  let time = `"videoplayer-current-time": ${data.seconds}`;
  console.log(time);
});

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
