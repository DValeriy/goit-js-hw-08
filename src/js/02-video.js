import fnLodTrot from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const item = localStorage.getItem("videoplayer-current-time")

let onPlay = function (data) { localStorage.setItem("videoplayer-current-time", `${data.seconds}`) };

player.on('timeupdate', fnLodTrot(onPlay, 1000));

let timeToStart = item ? item : "0";

player.setCurrentTime(timeToStart)






