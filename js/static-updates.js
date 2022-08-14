let pageID = document.getElementsByTagName("body")[0].id

// Update title
document.getElementsByTagName('title')[0].innerHTML = pageID.charAt(0).toUpperCase() + pageID.slice(1) + " - LinusRJ"

// Update footer content
document.getElementsByTagName('footer')[0].innerHTML = 
`<p>Website last updated: 2022-08-13</p></br>
<p>Linus Johansson &copy; 2022</p>`

// Update header
let header = 
`<a style="margin-left: 20px;" href="../index.html" id="index">Home</a>
<div>
    <a href="../projects.html" id="projects">Projects</a>
    <a href="../blog.html" id="blog">Blog</a>
</div>
<a style="margin-right: 20px" href="../about.html" id="about">About</a>`

var snackbar = document.createElement("div");
snackbar.id = 'snackbar'
snackbar.innerHTML = `<img src="../images/rotate-device.png" height="160px">Rotate your device for a better viewing experience`
document.body.appendChild(snackbar)

// Indicate active page
let parser = new DOMParser();
let htmlDoc = parser.parseFromString(header, 'text/html');  // Parse header string to html
try {
    let active = htmlDoc.getElementById(pageID)
    active.style.textDecoration = 'underline'
    active.href = "#"
    
} catch (error) {
    
}
document.getElementsByTagName('header')[0].innerHTML = htmlDoc.documentElement.innerHTML

if (screen.width < 500) {
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}


/*// Update social links
if(pageID === 'index') {
    document.getElementById("github-link").href = "https://github.com/linusrj"
    document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/linus-johansson-b64941219/"
}*/