const content = document.querySelector('.content');
const forwardBtn = document.querySelector('.forward');
const sectionTitle = document.querySelector('#section-title');
const workBtn = document.querySelector('#work-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');
const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');
const titleLink = document.createElement("a");

const imgArr = [
    {
    img: "assets/images/pet-project.PNG",
    url: "https://warm-springs-61498.herokuapp.com/",
    title: "Pet Project"
    },
    {
    img: "assets/images/forum-follows-func.PNG", 
    url: "https://forum-follows-functions.herokuapp.com/",
    title: "Forum Follows Functions"
    },   
    {
    img: "assets/images/weather-dashboard.JPEG", 
    url: "https://sihayah.github.io/weather-dashboard/",
    title: "Weather Dashboard"
    },
    {
    img: "assets/images/coding-quiz.jpg", 
    url: "https://sihayah.github.io/coding-quiz/",
    title: "Coding Quiz"
    },
    {
    img: "assets/images/taskmaster.JPEG", 
    url: "https://sihayah.github.io/taskmaster-pro/",
    title: "Task-master"
    },
 
    {
    img: "assets/images/chaos-ritual.JPEG",
    url: "https://chaosritual.com/",
    title: "Chaos Ritual"
    }];

// About me content
const generateAbout = function() {
    titleLink.textContent = "";
    titleLink.href = "";
    content.classList = "content text-content";
    content.innerHTML = `
    <h2>Hello there,</h2><br><p>I'm a dynamic full-stack web developer with a background in art & design. I am based out of Brooklyn, and I'm currently seeking out my next endeavor.</p>
    `;
}
// Contact content
const generateContact = function() {
    content.style.backgroundImg = "";
    titleLink.textContent = "";
    titleLink.href = "";    
    const emailContent = document.createElement("p");
    content.classList = "content text-content";
    emailContent.classList = "email-content";
    emailContent.innerHTML = `
    email: <a href = "mailto: sihayaharris@gmail.com"> sihayaharris@gmail.com</a>
    `;
    content.append(emailContent)

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
    imgContent.src = imgArr[itemNum].img;
    content.append(imgContent);
    
    titleLink.classList = "title-link";
    titleLink.textContent = imgArr[itemNum].title;
    titleLink.href = imgArr[itemNum].url;
    sectionTitle.append(titleLink)
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


