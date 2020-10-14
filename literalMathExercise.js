let warmHugs = "Hi, I'm Olaf and I like warm hugs";
console.log(warmHugs.toUpperCase());

warmHugs.replace(warmHugs.replace("l", "l"));
console.log(warmHugs.replace("like", "love"));

let beenImpaled = "Oh, look at that. I've been impaled."
console.log(beenImpaled.slice(-18));

let dotDotDot = "...";
let skullBones = "I don't have a skull or bones";
dotDotDot = `I don't have a skull${"..."}or bones`
console.log(dotDotDot);


console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber); 
randomNumber++;
console.log(randomNumber);