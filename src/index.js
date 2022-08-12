import './styles/styles.scss';

const path = require.context('./img', true, /\.(png|svg|jpg|jpeg|gif)$/i)
const image = path.keys().map(path);

let projectList = [];

const renderController = (() => {
    const renderHeader = () => {
        document.querySelector('.header').innerHTML = `
        <div class="left-header">
        <img src=${image[3]} alt="hamburger menu">
        <img src=${image[2]} alt="home">
        </div>
        <div class="right-header"><img src=${image[1]} alt="avatar"></div>`;
    }
    const renderFooter = () => {
        document.querySelector('.footer').innerHTML = `
        <div class="author">Made with <img src=${image[0]} width="15rem"> 
        by <a href="https://github.com/patsok" target="_blank">Falco</a></div>`;
    }
    const renderNav = () => {
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

        </ul>
        </ul>`;
        let projectUL = document.querySelector('ul>ul');
        projectList.forEach(project => {
            let newLi = document.createElement('li');
            let dotColor = document.createElement('span');
            dotColor.classList.add('dot');
            dotColor.style.backgroundColor = project.color;
            dotColor.style.opacity = 0.8;
            let spanProject = document.createElement('span');
            spanProject.classList.add('nav-project-elem')
            spanProject.textContent = project.name;
            newLi.appendChild(dotColor);
            newLi.appendChild(spanProject);
            // newLi.innerHTML = `<span class="dot"></span><span class="nav-project-elem">${project.name}</span>`;
            projectUL.appendChild(newLi);
            newLi.addEventListener('click',() => renderMain(newLi.querySelector('span + span').textContent));
        });
        let projectDiv = document.createElement('div');
        projectDiv.classList.add("add-project");
        projectDiv.textContent = '+ New Project'
        projectUL.appendChild(projectDiv);
        projectDiv.addEventListener('click',() => renderProjectDetails());
        
    }
    const renderMain = (projectName) => {
        document.querySelector('.main').innerHTML = `
            <h1>Inbox</h1>
            <div class="task-container">
            </div>
            <div class="add-task">+ New Task</div>
            `;
        let currentProjectTasks = []; 
        let test = dataHandler.getProjectList();    
        test.forEach(project => {
            project.taskArray.forEach(task => {
                currentProjectTasks.push(task);
            })
        })

        let taskContainer = document.querySelector('.task-container');

        dataHandler.getProjectList().forEach(project => {
            if (project.name == projectName) {
                currentProjectTasks = project.taskArray;
                document.querySelector('h1').textContent = project.name;
            }
        });

        currentProjectTasks.forEach(task => {
            let priority = task.priority;
            let taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.classList.add(`${priority}`);
            taskCard.innerHTML = `
            <div class="task-card-left">
                <input type="checkbox" name="checkbox">
                <span class="task-title">${task.title}</span>
            </div>
            <div class="task-card-right">
                <span class="task-date">${task.date}</span>
                <span class="task-details">DETAILS</span>
                <span class="task-icon delete"><img src="${image[5]}" alt=""></span>
            </div>`;
            taskContainer.appendChild(taskCard);
            taskCard.querySelector('.task-details').addEventListener('click',() => renderDetails(task));
            taskCard.querySelector('.task-icon').addEventListener('click',() => deleteTask(task));
        });
        document.querySelector('.add-task').addEventListener('click',renderDetails);
    }

    const deleteTask = (task) => {
        projectList.forEach(project => {
            if (project.name == task.project){
                project.getTaskArray().forEach((tk,index) => {
                    if(tk.title == task.title){
                        project.deleteTaskFromArray(index);
                        renderMain(project.name);
                    }
                });
            }
        });
    }

    const renderDetails = (task) => {
        const card = document.querySelector('body');
        let div = document.createElement('div');
        let contentDiv = document.createElement('div');
        div.classList.add('task-popup')
        contentDiv.classList.add('task-popup-content');
        contentDiv.innerHTML = `
        <div class="title">New Task</div>
        <form action="">
            <div class="input-field">
                <label for="t-title">Title</label>
                <input type="text" name="t-title" id="t-title">
            </div>
            <div class="input-field">
                <label for="t-details">Details</label>
                <textarea id="t-details" name="t-details" rows="6"></textarea>
            </div>
            <div class="input-field">
                <label for="t-date">Date</label>
                <input type="date" name="t-date" id="t-date">
            </div>
            <div class="input-field">
                <div class="priority">Priority</div>
                <div class="radios">
                    <label for="low">LOW</label>
                    <input type="radio" name="t-priority" id="low" value="low" required>
                    <label for="medium">MEDIUM</label>
                    <input type="radio" name="t-priority" id="medium" value="medium">
                    <label for="high">HIGH</label>
                    <input type="radio" name="t-priority" id="high" value="high">
                </div>
            </div>
            <div class="input-field">
                <label for="t-project">Project</label>
                <select name="t-project" id="t-project">               
                </select>
            </div>
            <button type="submit">ADD TASK</button>
            <div class="close-button">X</div>
        </form>`;




        div.appendChild(contentDiv);
        card.appendChild(div);
        let priority = document.querySelectorAll('.radios > label');
        priority.forEach((button,index) => {
        button.addEventListener('click',()=>displayController.changePriority(button,index))
        });

        const closePopup = () => {
            document.querySelector('.task-popup').remove();
        }

        document.querySelector('.close-button').addEventListener('click',closePopup);
        const taskPopup = document.querySelector('.task-popup');
        taskPopup.addEventListener('click',(e)=> {if (e.target==taskPopup) {closePopup()}});

        const form = document.querySelector('form');

        if(typeof(task.title) !== 'undefined'){
            form.querySelector('input#t-title').value = task.title;
            form.querySelector('#t-details').value = task.details;
            form.querySelector('input#t-date').value = task.date;
            console.log(form.querySelector(`.radios #${task.priority}`));
            form.querySelector(`.radios label[for=${task.priority}`).classList.add('prio-checked');
        }

        let select = document.querySelector('#t-project');
        let projectNam = document.querySelector('h1').textContent;
        dataHandler.getProjectList().forEach(proj => {
            let option = document.createElement('option');
            option.value = proj.name;
            option.textContent = proj.name;
            if (projectNam == proj.name){
                option.selected = true;
            }
            select.appendChild(option);
        })

        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            let title = form.querySelector('input#t-title').value;
            let details = form.querySelector('#t-details').value;
            let date = form.querySelector('input#t-date').value;
            let priority = form.elements["t-priority"].value;
            let project = form.querySelector('select').value;
            dataHandler.addTask(title,details,date,priority,project);
            closePopup();
            renderMain(document.querySelector('h1').textContent);
        })
    }


    const renderProjectDetails = () => {
        const card = document.querySelector('body');
        let div = document.createElement('div');
        let contentDiv = document.createElement('div');
        div.classList.add('task-popup')
        contentDiv.classList.add('task-popup-content');
        contentDiv.innerHTML = `
        <div class="title">New Project</div>
        <form action="">
            <div class="input-field">
                <label for="p-title">Title</label>
                <input type="text" name="p-title" id="p-title" required>
            </div>
            <div class="input-field">
                <label for="p-color">Color</label>
                <input type="color" name="p-color" id="p-color">
            </div>
            <button type="submit">ADD PROJECT</button>
            <div class="close-button">X</div>
        </form>`;
        div.appendChild(contentDiv);
        card.appendChild(div);

        const closePopup = () => {
            document.querySelector('.task-popup').remove();
        }

        document.querySelector('.close-button').addEventListener('click',closePopup);
        const taskPopup = document.querySelector('.task-popup');
        taskPopup.addEventListener('click',(e)=> {if (e.target==taskPopup) {closePopup()}});

        const form = document.querySelector('form');
        // form.querySelector('input#p-title').value = task.title;
        // form.querySelector('input#p-color').value = task.details;

        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            let title = form.querySelector('input#p-title').value;
            let color = form.querySelector('input#p-color').value;
            dataHandler.addProject(title,color);
            closePopup();
            renderNav();
        })
    }

    const renderAll = () => {
        renderHeader();
        renderFooter();
        renderNav();
        renderMain();
    }

    return {renderDetails, renderNav, renderMain,renderAll};
})()

const displayController = (() => {
    const changePriority = (button,index) => {
        let labels = document.querySelectorAll(`.radios label`);
        labels.forEach(label => {
            label.classList.remove('prio-checked')
        });
        button.classList.add('prio-checked');
    }
    return {changePriority};
})()


class Project{
    constructor(name, color = 'white'){
        this.name = name;
        this.color = color;
        this.taskArray = [];
        this.addToProjectsArray();

    }
    addTaskToCurrentProject(task) {
        this.taskArray.push(task);
    }

    addToProjectsArray(){
        projectList.push(this);
    }

    getTaskArray(){
        return this.taskArray;
    }

    deleteTaskFromArray(index){
        this.taskArray.splice(index,1);
    }
}
class Task{
    constructor(title, details, date, priority, project){
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
        this.project = project;
    }
}

const dataHandler = (()=>{
    let testproject = new Project("Boi",'green');
    let testproject2 = new Project("Klawisz",'yellow');
    let testproject3 = new Project("Test97",'black');

    let testtask1 = new Task("Tytul1","Desc1","2022-08-04","high","Boi");
    let testtask2 = new Task("Tytul2","Desc2","2022-08-06","medium","Boi");
    let testtask3 = new Task("Tytul3","Desc3","2022-07-04","low","Klawisz");

    testproject.addTaskToCurrentProject(testtask1);
    testproject.addTaskToCurrentProject(testtask2);
    testproject2.addTaskToCurrentProject(testtask3);

    const getProjectList = () => {
        return projectList;
    }
    const getProject = () => {
        return testproject;
    }

    const addTask = (title,details,date,priority,project) =>{
        let newTask = new Task(title,details,date,priority,project);
        dataHandler.getProjectList().forEach(proj => {
            if(proj.name == project){
                proj.addTaskToCurrentProject(newTask);
            }
        })
    }

    const addProject = (title, color) => {
        let newProject = new Project(title,color);
        console.log(dataHandler.getProjectList());
    }

    return {addTask,addProject,getProjectList,getProject}
})()

renderController.renderAll();

