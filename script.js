// Citation: https://www.w3schools.com/jsref/prop_html_innerhtml.asp

// Citation for extra feature: https://www.w3schools.com/howto/howto_css_dropdown.asp


document.getElementById("header").innerHTML = `
    <div class="header">
        <button class="btn" id="home">Home</button>
        <div class = "dropdown">
            <button class="btn" id="resume">Resume</button>
            <div class="dropdown-content">
                <a href="resume.html#education">Education</a>
                <a href="resume.html#work">Work Experience</a>
                <a href="resume.html#skills">Technology Skills</a>
            </div>
        </div>
        <div class = "dropdown">
            <button class="btn" id="portfolio">Portfolio</button>
            <div class = "dropdown-content">
                <a href="portfolio.html#banking-app">Mobile Banking App</a>
                <a href="portfolio.html#drawing-project">Multi-User Drawing App</a>
            </div>
        </div>
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