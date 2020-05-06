console.log("hello")

var socket=io.connect('http://'+document.domain+':'+location.port);

function send(){
	var msgBox=document.getElementById('msgBox')
	socket.emit('msg',msgBox.value)
	msgBox.value=""
}
socket.on('push',function(data){
	var msgList=document.getElementById('msgList')
	msgList.innerHTML+="<p>"+data+"<p>"
})

function fetchUsers(){
	fetch('/users').then(function(res){
		res.json().then(function(data){
			console.log(data)
		})
	})
}