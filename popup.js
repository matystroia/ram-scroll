function start(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {command: 'start'}, function(response){});
		}
	);
}

document.getElementById('start').addEventListener('click', start);