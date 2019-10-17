var HyperionSimulator = {   
    videoObject : null,
    fac : null,
    hc: null,
    leds: [],
    scanElements: [],
    initHyperionlights: function() {
        console.log('init fired');
        document.getElementById('playbutton').addEventListener('click', function() {
            console.log('play');
            videoObject.play();
        });
        createLeds();
    },
    startHyperion: function() {
        console.log('Hyperion started');
    },
    stopHyperion: function() {
        console.log('Hyperion stop');
    },
    createLeds: function() {
        console.log('Creating Leds');
        var videoParent = videoObject.offsetParent;
        var ledsholder = videoParent.getElementsByClassName("leds")[0];
        let ledcounter = 0;
        // TOP
        let topStepWidth = videoparams.width / leds.top;
        for (topLedcounter = 0 ; topLedcounter <= leds.top; topLedcounter++){
            ledsholder.appendChild(
                createSingleLed(
                    ledcounter, 
                    (topStepWidth * topLedcounter),
                    0,
                    "topLeds"
                )
            );
            ledcounter++;
        }
    },
    createSingleLed(id, x, y, className){
        var led = document.createElement('div');
        led.setAttribute('id', `led-no-${id}`);
        led.style.borderRadius = "2px";
        led.style.height = "5px";
        led.style.width = "5px";
        led.style.color = "#fef13e";
        led.className = className;
        led.style.position = "absolute";
        led.style.top = `${y}px`;
        led.style.left = `${x}px`;
        const ledPosi = {
            id: id,
            name: `led-no-${id}`,
            posX: x,
            posY: y,
            className: className,
        }
        this.leds.push(ledPosi)
        return led;
    },
    setLedColor(ledid){
        var activeLed = videoParent.getElementsByClassName("leds")[0].children[ledid];
    
        size = Math.floor(this._width / this.countByWidth);
        var getColor = ac.getColor(videoObject, {
            left: size * i,
            top: 0,
            width: size,
            height: size
        });
    },
    init: function(videoObject, hyperionConfig) {
        this.fac = new FastAverageColor();
        this.hc =  hyperionConfig;
        ['canplay', 'pause', 'play', 'error'].forEach(event => {
            videoObject.addEventListener(event, function(e) {
                switch (event) {
                    case 'canplay':
                        this.initHyperionlights();
                        break;
                    case 'error':                    
                    case 'pause':
                        this.stopHyperion();
                        break;
                    case 'play':
                        this.startHyperion();
                        break;
                }
            });
            this.videoObject = videoObject;
            this.videoObject.src="videos/dark_light.mp4"
        })
    },
};

window.addEventListener('load', function(e) {
    console.log('Document load finished');
    HyperionSimulator.init(
        document.getElementById('tvscreen_video'),
        new HyperionConfig()
    );
});