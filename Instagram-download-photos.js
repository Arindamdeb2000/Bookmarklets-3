function isInstagramPhoto() {
	var url = window.location.href;
	var regexp = /http.?:\/\/www\.instagram\.com\/p\/.+/gi;
	return (url.match(regexp) !== null)
}

function downloadOgImage() {
	var metas = document.getElementsByTagName("meta");
	for(var i = 0; i < metas.length; i++) {
		if(metas[i].getAttribute("property") == "og:image") {
			var a = document.createElement("a");
			a.download = "dummy.jpg";
			a.href =  metas[i].getAttribute("content");
			a.click();
			return true;
		}
	}

	alert("Could not find OG:Image definition. 500px might have changed their code :( ");
}

if(isInstagramPhoto()) {
	downloadOgImage();
} else {
	alert("You're currently not on a Instagram photo page.");
}
