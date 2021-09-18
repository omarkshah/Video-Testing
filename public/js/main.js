const socket = io();

videoArea = document.getElementById("video-area");

var peer = new Peer();

peer.on('open', id=>{
    console.log('peer id is ' + id);
})


const myVideo = document.createElement('video');
myVideo.muted = true;


    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(stream => {
        addVideoStream(myVideo, stream)

        socket.on('user-connected', userId => {
            connectToNewUser(userId, stream);
        })
    })
    



function addVideoStream(video, stream){
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoArea.append(video);
}

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
      video.remove()
    })

}