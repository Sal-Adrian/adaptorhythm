
let clicked = false;

export function setClicked(val) {
    clicked = val;
}

//////////////////////////////////////////////

Tone.Transport.bpm.value = 240;
const sec_8 = Tone.Time("8n").toSeconds();
const sec_4 = Tone.Time("4n").toSeconds();
const measure = Tone.Time("1m").toSeconds();

//////////////////////////////////////////////

let drumLoopPlaying = false;

const bass = new Tone.MembraneSynth().toDestination();
const snare = new Tone.NoiseSynth().toDestination();
const hiHat = new Tone.MetalSynth().toDestination();
const adaptClick = new Tone.Synth().toDestination();

const drumID = Tone.Transport.scheduleRepeat((time) => {
    const now = time;
    bass.triggerAttackRelease("C1", "4n", now);
    snare.triggerAttackRelease("4n", now + (2*sec_4));
}, "1m");

const hiHatID = Tone.Transport.scheduleRepeat((time) => {
    if(clicked) {
        adaptClick.triggerAttackRelease("Ab3", "8n", time, 0.5);
        clicked = false;
    } else hiHat.triggerAttackRelease("C3", "8n", time, 0.03);
}, "4n");

export function drumLoop() {
    if (drumLoopPlaying) {
        console.log("Stoping Drum Loop.")
        drumLoopPlaying = false;
        Tone.Transport.stop();
        return;
    }
    console.log("Starting Drum Loop.")
    drumLoopPlaying = true;
    Tone.Transport.start();
    Tone.Transport.clear(songID);
}

/////////////////////////////////////////////////////////////////////////////////

let songPlaying = false;

const accomp = new Tone.PolySynth(Tone.AMSynth).toDestination();
const singer = new Tone.MonoSynth().toDestination();

const songID = Tone.Transport.scheduleRepeat((time) => {
    const now = time;
    accomp.triggerAttackRelease(["F3, Ab3, C4, Eb4"], "1m");
    singer.triggerAttackRelease("Ab4", "1m");
    
    accomp.triggerAttackRelease(["F3, Ab3, Bb3, Db4"], "1m", measure + now);
    singer.triggerAttackRelease("Db5", 3*sec_4, measure + now);
    singer.triggerAttackRelease("Ab4", "4n", measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Eb3, G3, Bb3, Db4"], "1m", 2*measure + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Eb3, G3, Ab3, C4"], "1m", 3*measure + now);
    singer.triggerAttackRelease("G4", "4n", 3*measure + now);
    singer.triggerAttackRelease("C5", "2n", 3*measure + sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 3*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Db3, F3, Ab3, C4"], "1m", 4*measure + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Db3, E3, Ab3, B3"], "2n", 5*measure + now);
    singer.triggerAttackRelease("F4", "4n", 5*measure + now);
    singer.triggerAttackRelease("B4", "2n", 5*measure + sec_4 + now);
    accomp.triggerAttackRelease(["D3, F3, G3, B3"], "2n", 5*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("F4", "4n", 5*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["C3, E3, G3, B3"], "2m", 6*measure + now);
    singer.triggerAttackRelease("E4", "2m", 6*measure + now);

    accomp.triggerAttackRelease(["C3, Eb3, G3, Bb3"], "1m", 8*measure + now);
    singer.triggerAttackRelease("Eb4", "1m", 8*measure + now);

    accomp.triggerAttackRelease(["C3, Eb3, F3, Ab3"], "1m", 9*measure + now);
    singer.triggerAttackRelease("Ab4", 3*sec_4, 9*measure + now);
    singer.triggerAttackRelease("Eb4", "4n", 9*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Bb2, D3, F3, Ab3"], "1m", 10*measure + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + 3*sec_4 + now);
    
    accomp.triggerAttackRelease(["Bb2, D3, Eb3, G3"], "1m", 11*measure + now);
    singer.triggerAttackRelease("D4", "4n", 11*measure + now);
    singer.triggerAttackRelease("G4", "2n", 11*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 11*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Ab2, C3, Eb3, G3"], "1m", 12*measure + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Ab2, B2, Eb3, Gb3"], "2n", 13*measure + now);
    singer.triggerAttackRelease("C4", "4n", 13*measure + now);
    singer.triggerAttackRelease("D4", "8n", 13*measure + sec_4 + now);
    singer.triggerAttackRelease("Eb4", "8n", 13*measure + sec_4 + sec_8 + now);
    accomp.triggerAttackRelease(["A2, C3, D3, Gb3"], "2n", 13*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 13*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("C4", "4n", 13*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["G2, B2, D3, Gb3"], "2m", 14*measure + now);
    singer.triggerAttackRelease("B3", measure+sec_4, 14*measure + now);

    singer.triggerAttackRelease("D4", "4n", 15*measure + sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 15*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("D5", "4n", 15*measure + 3*sec_4 + now);
}, "16m");

// Currently programed for "All The Things You Are"
export async function playSong() {
    if (songPlaying) {
        console.log("Stoping Song.")
        songPlaying = false;
        Tone.Transport.stop();
        return;
    }
    console.log("Starting Song.")
    songPlaying = true;
    Tone.Transport.start();
    Tone.Transport.clear(drumID);
    Tone.Transport.clear(hiHatID);
}

export function testMessage() {
    console.log("Ok");
}