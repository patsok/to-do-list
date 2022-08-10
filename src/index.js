import './styles/styles.scss';

const path = require.context('./img', true, /\.(png|svg|jpg|jpeg|gif)$/i)
const image = path.keys().map(path);
console.log(image);

document.querySelector('.header').innerHTML = `<div class="left-header">
    <img src=${image[3]} alt="hamburger menu">
    <img src=${image[2]} alt="home">
</div>
<div class="right-header"><img src=${image[1]} alt="avatar"></div>`;

document.querySelector('.footer').innerHTML = `<div class="author">Made with <img src=${image[0]} width="15rem"> 
by <a href="https://github.com/patsok" target="_blank">Falco</a></div>`;

document.querySelector('.nav').innerHTML = `
<ul>
    <li>
        <span class="icon">
            <img src="${image[4]}" alt="">
        </span>
        <span class="nav-elem">Inbox</span>
    </li>
    <li>
        <span class="icon">
            <img src="${image[5]}" alt="">
        </span>
        <span class="nav-elem">Today</span>
    </li>
    <li>
        <span class="icon">
            <img src="${image[6]}" alt="">
        </span>
        <span class="nav-elem">Filter</span>
    </li>
    <li>
        <span class="icon">
            <img src="${image[7]}" alt="">
        </span>
        <span class="nav-elem">Projects</span>
    </li>
    <ul>
    <li><span class="dot"></span><span class="nav-project-elem">Work</span></li>
    <li><span class="dot"></span><span class="nav-project-elem">Personal</span></li>
    <li><span class="dot"></span><span class="nav-project-elem">Shopping</span></li>
</ul>
</ul>`;

document.querySelector('.main').innerHTML = `
<h1>Project Title</h1>
<div class="task-container">
    <div class="task-card high">
        <div class="task-card-left">
            <input type="checkbox" name="checkbox">
            <span class="task-title">Task title</span>
        </div>
        <div class="task-card-right">
            <span class="task-date">Nov 11th</span>
            <span class="task-details">DETAILS</span>
            <span class="task-icon"><img src="${image[5]}" alt=""></span>
            <span class="task-icon"><img src="${image[6]}" alt=""></span>
        </div>
    </div>
    <div class="task-card low">
        <div class="task-card-left">
            <input type="checkbox" name="checkbox" checked>
            <span class="task-title">Task title</span>
        </div>
        <div class="task-card-right">
            <span class="task-date">Nov 11th</span>
            <span class="task-details">DETAILS</span>
            <span class="task-icon"><img src="${image[5]}" alt=""></span>
            <span class="task-icon"><img src="${image[6]}" alt=""></span>
        </div>
    </div>
</div>`