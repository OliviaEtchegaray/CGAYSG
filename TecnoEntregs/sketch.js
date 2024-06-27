let monitorear = true;

const FREC_MIN = 900;
const FREC_MAX = 1200;

const AMP_MIN = 0.01;
const AMP_MAX = 0.4;

let mic;
let pitch;
let audioContext;
let gestorAmp;
let gestorPitch;

const model_url = "https://teachablemachine.withgoogle.com/models/aa8HDTmfc/model.json";

let haySonido;
let antesHabiaSonido = false;

let fondo;
let texturas;
const FondoColor = ['#3769C5', '#2ecc71', '#e74c3c', '#f1c40f']; 
const fadeSpeed = 0.02; 
let imagenes = [];

function preload() {
    for (let n = 1; n <= 18; n++) {
        let img = loadImage('libraries/t' + n + '.png');
        imagenes.push(img);
    }
}

function setup() {
    createCanvas(600, 600);
    background(255);

    fondo = new Fondo(FondoColor, fadeSpeed);
    fondo.initBackground();

    texturas = new Texturas(imagenes, width, height);

    audioContext = getAudioContext();
    
    if (typeof p5.AudioIn === 'undefined') {
        console.error('p5.AudioIn no está disponible. Verifica que p5.sound.min.js esté cargado correctamente.');
        return;
    }

    mic = new p5.AudioIn();
    mic.start(startPitch);

    userStartAudio();

    gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
    gestorPitch = new GestorSenial(FREC_MIN, FREC_MAX);

    antesHabiaSonido = false;
}

function draw() {
    let vol = mic.getLevel();
    gestorAmp.actualizar(vol);

    haySonido = gestorAmp.filtrada > 0.1;

    let inicioElSonido = haySonido && !antesHabiaSonido;
    let finDelSonido = !haySonido && antesHabiaSonido;

    if (monitorear) {
        gestorAmp.dibujar();
    }

    fondo.opacity = lerp(fondo.opacity, haySonido ? 1 : 0, fadeSpeed);
    texturas.opacity = lerp(texturas.opacity, haySonido ? 1 : 0, fadeSpeed);

    fondo.draw();
    texturas.draw(fondo.opacity, mouseY);

    antesHabiaSonido = haySonido;
}

function startPitch() {
    pitch = ml5.pitchDetection(model_url, audioContext, mic.stream, modelLoaded);
}
function modelLoaded() {
    getPitch();
}

function getPitch() {
    pitch.getPitch(function(err, frequency) {
        if (frequency) {
            gestorPitch.actualizar(frequency);
            console.log(frequency);
        }
        getPitch();
    });
}

function toggleMonitorear() {
    monitorear = !monitorear;
}