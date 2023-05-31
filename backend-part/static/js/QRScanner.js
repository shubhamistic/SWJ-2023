(()=>{
    const video = document.getElementById('video');
    const scanner = new Instascan.Scanner({ video: video });

    // Add event listener when a QR code is scanned
    scanner.addListener('scan', function(content) {
        console.log("QR code detected: " + content);


    });

    // Request permission to access the camera
    Instascan.Camera.getCameras()
    .then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error("No cameras found.");
        }
    })
    .catch(function(error) {
        console.error("Error accessing the camera: " + error);
    });
})()