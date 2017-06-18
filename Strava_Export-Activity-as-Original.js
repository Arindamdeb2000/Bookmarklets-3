function isStravaActivity() {
	var url = window.location.href;
	var regexp = /http.?:\/\/www.strava\.com\/activities\/[0-9]+/gi;
	return (url.match(regexp) !== null)
}

if (isStravaActivity()) {
	window.location.href = window.location.href + "/export_original";
} else {
	alert("You're currently not on a Strava activity page.")
}
