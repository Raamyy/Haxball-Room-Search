var roomListShowed = false;

window.onload = ()=>{
    setTimeout(setEvents, 500);
}
function setEvents(){
    var el = document.documentElement.getElementsByClassName("gameframe")[0];
    el = el.contentDocument;
    el.onkeydown = enter
    var button = el.querySelectorAll("[data-hook='ok']")[0];
    button.onclick = process;
    console.log("start");
}

function enter(e){
    if(e.keyCode == 13) //Enter Key
    if(roomListShowed == false)
    process();
}

// excuted when user press ok in haxball landing page
function process(){
console.log("button clicked");
roomListShowed = true;

// Add the search textbox
var gameframe = document.documentElement.getElementsByClassName("gameframe")[0];
var dialog = gameframe.contentDocument.getElementsByClassName("dialog")[0];

var input = document.createElement('input'); 
input.type = "text"; 
input.id = "searchRoom";
input.autocomplete = "off";
input.placeholder = "Enter room name - Haxball Search Bar by Raamyy and xenon";
input.oninput = searchForRoom;
input.onkeyup = searchForRoom;
input.onchange = searchForRoom;

insertPos = dialog.querySelector('h1').nextElementSibling;
insertPos.parentNode.insertBefore(input, insertPos.nextElementSibling);
}

// excuted when user press enter to search for a room
function searchForRoom() {
	var gameframe = document.documentElement.getElementsByClassName("gameframe")[0];
	var dialog = gameframe.contentDocument.getElementsByClassName("dialog")[0];
	input = gameframe.contentWindow.document.getElementById('searchRoom');
    searchRoom = input.value.toLowerCase();
    var roomTable = dialog.querySelectorAll("[data-hook='list']")[0]
    var totalNumberOfPlayers = 0;
    var totalNumberOfRooms = 0;
    for(room of roomTable.rows) {
        var roomName = room.querySelectorAll("[data-hook='name']")[0].innerHTML;
        var roomNumPlayers = room.querySelectorAll("[data-hook='players']")[0].innerHTML.split('/')[0];
        roomName = roomName.toLowerCase();

    if(roomName.includes(searchRoom) == true) {
        room.hidden = false;
        totalNumberOfPlayers += parseInt(roomNumPlayers);
        totalNumberOfRooms++;
        }
    else { 
        room.hidden = true;
        }
    }
    var roomsStats = dialog.querySelectorAll("[data-hook='count']")[0];
    roomsStats.innerHTML = totalNumberOfPlayers + "players in "+totalNumberOfRooms+" rooms";
}
