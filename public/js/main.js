const socket = io();

videoArea = document.getElementById("video-area");



const myVideo = document.createElement('video');
myVideo.muted = true;

socket.on("show-Webcam", () => {

    getUsersMedias();
   

});



function getUsersMedias(){
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        addVideoStream(myVideo, stream)
    })
    
}


function addVideoStream(video, stream){
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoArea.append(video);
}


