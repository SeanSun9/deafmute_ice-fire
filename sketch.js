let microphone;
let song;
let btn;
let amp;
let history1 = [];
let history2 = [];
let img;

function preload() {
    song = loadSound('colorBlind.mp3');
    img = loadImage('bg2.png');

}

function setup() {
    createCanvas(window.innerWidth,600);

    //microphone = new p5.AudioIn();
    //microphone.start();

    amp = new p5.Amplitude();


    btn = createButton('play');
    btn.mousePressed(toggle);

    

    
    

}

function draw() {
    clear();
    image(img,0,0,window.innerWidth,window.innerWidth/3);
    let vol = amp.getLevel();

    

    history2.push(vol);
    //history2.push(vol);

    

    
    // strokeWeight(0.8);
    // stroke(255,0,0);
    // noFill();
    // beginShape();
    // for(let i=0;i<history1.length;i++){
        
        
    //     let y1 = map(history1[i],0,0.3,height,height*0.6);
    //     vertex(10*i,y1);
        
    // }
    // endShape();

    // if(history1.length*10>window.innerWidth){
    //     history1.splice(0,window.innerWidth/10);
    // }

    //stroke(0);
    //line(history1.length,0,history1.length,height);

    stroke(211,63,1);
    strokeWeight(1.5);
    noFill();
    beginShape();
    for(let i=0;i<history2.length;i++){
        let y2 = map(history2[i],0,0.3,height*0.5,height*0.4);
        vertex(i*3,y2);
        //console.log(history2[i]);
    }
    endShape();
    if(history2.length*3>window.innerWidth){
        history2.splice(0,history2.length);  
    }

    // for(let i=0;i<history2.length;i++){
    //     let y3 = map(history2[i],0,0.3,height*0.8,height*0.5);
    //     let Csize = map(history2[i],0,0.3,5,10);
    //     let Cfill = map(history2[i],0,0.3,150,255);
    //     fill(Cfill,Cfill*0.8,60,255-Cfill*0.8);
    //     stroke(220,100);
    //     strokeWeight(0.5);
    //     ellipse(i,y3,Csize,Csize);
    // }


    // let diam = map(vol,0,0.3,40,200);
    // noFill();
    // stroke(50);
    // strokeWeight(0.5);
    // ellipse(width/2,height*0.25,diam,diam);

}

function toggle() {
    if(song.isPlaying()){
        song.pause();
    }
    else{
        song.play();
    }
}




