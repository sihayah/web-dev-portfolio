const content = document.querySelector('.content');
const forwardBtn = document.querySelector('.forward');
const workBtn = document.querySelector('#work-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');
const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');

const imgArr = ["assets/images/coding-quiz.jpg", "assets/images/taskmaster.JPEG", "assets/images/weather-dashboard.JPEG", "assets/images/chaos-ritual.JPEG"];

// About me content
const generateAbout = function() {
    content.classList = "content text-content";
    content.innerHTML = `
    <h2>Hello there,</h2><br><p>I'm a full-stack web developer with a background in art & design. I am based out of Brooklyn, and I'm currently seeking out my next endeavor.</p>
    `;
}
// Contact content
const generateContact = function() {
    content.style.backgroundImg = "";
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
    const imgContent = document.createElement("img");
    imgContent.classList = "img-content";
    imgContent.src = imgArr[itemNum];
    content.append(imgContent);
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
menuBtn.addEventListener('click', function() {
    menuBtn.style.display = "none";
    nav.style.display = "block";
});


