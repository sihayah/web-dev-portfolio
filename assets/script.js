const content = document.querySelector('.content');
const forwardBtn = document.querySelector('.forward');
const workBtn = document.querySelector('#work-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

const imgArr = ["assets/images/code-quiz.JPEG", "assets/images/taskmaster.JPEG", "assets/images/weather-dashboard.JPEG", "assets/images/chaos-ritual.JPEG"];

// About me content
const generateAbout = function() {
    content.style.background = "#ffffff";
    content.classList = "content text-content";
    content.innerHTML = `
    <h2>Hello there,</h2><br><p>I'm a full-stack web developer with a background in art & design. I am based out of Brooklyn, and I'm currently seeking out my next endeavor.</p>
    `;
}
// Contact content
const generateContact = function() {
    content.style.background = "#ffffff";
    content.classList = "content text-content";
    content.innerHTML = `
    <p>email: sihaya_a@hotmail.com</p>
    `;
}

generateAbout();

let itemNum = -1;
const nextItem = function () {
    if (itemNum === imgArr.length -1){
        itemNum = -1;
        nextItem();
    } else {
    ++itemNum; 
    content.style.height = "39.5vh";
    content.style.background = "#ffffff url('" + imgArr[itemNum] + "') no-repeat center";
    content.style.backgroundSize = "65.7vh 36vh";
    }
};




forwardBtn.addEventListener('click', function() {
    content.classList = "";
    content.innerHTML = "";
    nextItem();
});
workBtn.addEventListener('click', function() {
    content.classList = "";
    content.innerHTML = "";
    nextItem();
});
aboutBtn.addEventListener('click', function() {
    content.classList = "";
    content.innerHTML = "";
    generateAbout();
});
contactBtn.addEventListener('click', function() {
    content.classList = "";
    content.innerHTML = "";
    generateContact();
});


