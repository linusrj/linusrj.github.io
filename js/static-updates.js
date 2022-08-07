let pageID = document.getElementsByTagName("body")[0].id

// Update title
document.getElementsByTagName('title')[0].innerHTML = pageID.charAt(0).toUpperCase() + pageID.slice(1) + " - LinusRJ"

// Update footer content
document.getElementsByTagName('footer')[0].innerHTML = 
`<p>Last updated: 2022-08-07</p></br>
<p>Engineering student @ Chalmers University of Technology</p>
<p>& Embedded engineer @ Plejd AB</p></br>
<p>Linus Johansson &copy; 2022</p>`

// Update header
let header = 
`<a style="margin-left: 20px;" href="../index.html" id="index">Home</a>
<div>
    <a href="../projects.html" id="projects">Projects</a>
    <a href="../blog.html" id="blog">Blog</a>
</div>
<a style="margin-right: 20px" href="../about.html" id="about">About</a>`

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

/*// Update social links
if(pageID === 'index') {
    document.getElementById("github-link").href = "https://github.com/linusrj"
    document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/linus-johansson-b64941219/"
}*/