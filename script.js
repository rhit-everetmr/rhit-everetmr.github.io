// Citation: https://www.w3schools.com/jsref/prop_html_innerhtml.asp


document.getElementById("header").innerHTML = `
    <div class="header">
        <button class="btn" id="home">Home</button>
        <button class="btn" id="resume">Resume</button>
        <button class="btn" id="portfolio">Portfolio</button>
    </div>
`;

document.getElementById("footer").innerHTML = `
    <div class="footer">
        <p>Contact me</p>
        <a href="https://www.linkedin.com/in/matthewroyeverett/">LinkedIn</a>
    </div>
`;

document.getElementById("home").addEventListener("click", () => {
    location.href = "index.html";
});

document.getElementById("resume").addEventListener("click", () => {
    location.href = "resume.html";
});

document.getElementById("portfolio").addEventListener("click", () => {
    location.href = "portfolio.html";
});