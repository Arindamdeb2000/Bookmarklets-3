// use redirect detective as it not only checks for HTTP but also JS/Meta redirects
const u = "https://redirectdetective.com/index.html";

// open redirect detective if not yet open
if (location != u) {
    alert("Hit me baby, one more time!");
    location=u;
}


else {
    // ask for url to check for redirects
    const url = prompt("Enter URL to check for redirects", "https://bbdworld.net/news/2020/facebook-security-breach-exposes-accounts-of-1-billion-users");

    // fill out form and submit
    document.f1.word.value = url;
    document.f1.full.checked = true;
    document.close();
    document.f1.submit();
}
