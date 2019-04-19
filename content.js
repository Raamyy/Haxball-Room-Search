var roomListShowed = false;

window.onload = ()=>{
    var el = document.documentElement.getElementsByClassName("gameframe")[0];
    el = el.contentDocument;
    el.onkeydown = enter
    var button = el.querySelectorAll("[data-hook='ok']")[0];
    button.onclick = process;
    console.log("start");
}
function enter(){
    if(roomListShowed == false)
    process();
}

// excuted when user press ok in haxball landing page
function process(){
console.log("button clicked");
roomListShowed = true;

// Add the search textbox
var gameframe = document.documentElement.getElementsByClassName("gameframe")[0]
var dialog = gameframe.contentDocument.getElementsByClassName("dialog")[0];

var input = document.createElement('input'); 
input.type = "text"; 
input.id = "searchRoom";
input.onchange = searchForRoom
dialog.appendChild(input); 

}

// excuted when user press enter to search for a room
function searchForRoom(){
var gameframe = document.documentElement.getElementsByClassName("gameframe")[0];
var dialog = gameframe.contentDocument.getElementsByClassName("dialog")[0];

var inputs = dialog.getElementsByTagName("input");
var textbox = inputs[inputs.length-1];
var searchRoom = textbox.value;
searchRoom = searchRoom.toLowerCase();

var roomTable = dialog.querySelectorAll("[data-hook='list']")[0]

var totalNumberOfPlayers = 0;
var totalNumberOfRooms = 0;
for(room of roomTable.rows){
    var roomName = room.querySelectorAll("[data-hook='name']")[0].innerHTML;
    var roomNumPlayers = room.querySelectorAll("[data-hook='players']")[0].innerHTML.split('/')[0];
    roomName = roomName.toLowerCase();

    if(roomName.includes(searchRoom) == true){
        room.hidden = false;
        totalNumberOfPlayers += parseInt(roomNumPlayers);
        totalNumberOfRooms++;
    }
    else
        room.hidden = true;

}
    var roomsStats = dialog.querySelectorAll("[data-hook='count']")[0];
    roomsStats.innerHTML = totalNumberOfPlayers + "players in "+totalNumberOfRooms+" rooms";
}