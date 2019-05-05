const pageSize = 15;
const delay = 3 * 60;

function removePosts() {
	console.log("Removing posts...");
	
	let posts = $("._5jmm._5pat._3lb4.r_s3tf6o0y3");
	for (let i = 0; i < posts.length - pageSize; i++)
		posts[i].remove();
}

setInterval(removePosts, delay * 1000);

// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
		
// 	});