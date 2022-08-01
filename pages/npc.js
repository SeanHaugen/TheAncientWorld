const NPC = new URLSearchParams(window.location.search);

function cleanAndCap (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
  }

let firstName = NPC.get('name-1');
const NPC_info = `<p>Character Name: ${firstName} </p>`
const new_name = document.getElementById('npcName');

let genChar = (char) =>{
    new_name.innerHTML = NPC_info;
}
genChar();

let getAbout = NPC.get('description');
const NPC_about = `About: ${getAbout}`
const new_about = document.getElementById('about');

let genAbout = (about) =>{ 
    new_about.innerHTML = NPC_about
}
genAbout();