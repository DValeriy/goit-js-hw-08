import fnLodTrot from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const item = localStorage.getItem("videoplayer-current-time")

const onPlay = function ({seconds }) { localStorage.setItem("videoplayer-current-time", seconds) };

player.on('timeupdate', fnLodTrot(onPlay, 1000));

const timeToStart = item ? item : "0";

player.setCurrentTime(timeToStart)






