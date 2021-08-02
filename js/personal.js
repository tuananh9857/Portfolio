var personal = {
  name: "Tuan Anh",
  about_me: [
    "My name is Tuan Anh. I ' m originally from Sai Gon, Viet Nam, and now I 'm living in Fremont, California. I got the Degree of Engineer in Chemical Engineering Technology from HCMC University of Food Industry, Viet Nam. After that, I started out working as Water Treatment operator at Powder milk factory before I became fascinated by code!!!.",
    "Currently, I'm a Junior Software Engineering at San Jose State University. Besides, I self-learn more about programming skills through websites like udemy, simplilearn, coursera.",
  ],
  education: {
    years: ["01/2014 - 12/2017", "01/2019 - 6/2021", "08/2021"],
    institute: [
      "HCMC University Of Food Industry, Viet Nam",
      "Foothill College",
      "San Jose State University",
    ],
    degrees: {
      type: ["Bachelor's Degree", "Associate Of Science", "Bachelor's Degree"],
      names: [
        "Chemical Engineering Technology",
        "Computer Science",
        "Computer Software Engineering",
      ],
      status: {
        nOStatus: ["GPA", "GPA", "Expected graduation"],
        degreeStatus: [2.49, 3.55, 2024],
      },
    },
  },
  skills: {
    skill: ["Java", "Spring Boot", "Data Base", "Web"],
    overView: [
      "Object-Oriented Programming, Data Structures",
      "Spring Data JDBA, Hibernate, H2, RestApi",
      "MySql",
      "Html, Javascript, Css",
    ],
  },
  project: {
    nameOfProject: [
      "Million Songs Subset",
      "Shopping Bag",
      "Browser Navigation",
      "Super Market"
    ],
    summary: [
      "One object of class FoothillTunesStore parses a JSON data set with a given json file and stores each entry in an array tunes and acts as a iTune song store. It provides methods showing all the songs in our personal tunes library, adding new songs in our tunes collection by title selection, making a play list of a certain duration.",
      "Similar To Million Songs Subset, Find Items That Sum Up Best Match The Customer's Budget.",
      'Simulates A Browser\'s Back And Forward Buttons By Recording Links That Are Visited, And Then Keeping A Stack Of "Back" Links And A Stack Of "Forward" Links.',
      "Simulates the market scenario of buying and adding items to a store's inventory. Implements BST with lazy deletion to keep track of total inventory (deleted + non deleted) and current inventory (non deleted only).",
    ],
  },
};

aboutMe();
education();
skill();
project();

function aboutMe() {
  let aboutMeIndex = 0;
  let titleTxts = document.querySelectorAll(".title_txt");
  titleTxts.forEach((titleTxt) => {
    let p = document.createElement("p");
    titleTxt.appendChild(p);
    p.append(personal.about_me[aboutMeIndex]);
    aboutMeIndex++;
  });
}
function education() {
  let edu = document.querySelector(".education");

  edu.appendChild(addTitle("Education"));

  for (let i = 0; i < personal.education.years.length; i++) {
    let ul = createElement("ul", "title-year");
    ul.append(personal.education.years[i]);

    for (let j = 0; j < personal.education.institute.length; j++) {
      let li = createElement("li");
      let span = createElement("span", "title-year-1");

      switch (j) {
        case 0:
          span.append("Institute: ");
          li.appendChild(span);
          li.append(personal.education.institute[i]);
          break;
        case 1:
          span.append(personal.education.degrees.type[i] + ": ");
          li.appendChild(span);
          li.append(personal.education.degrees.names[i]);
          break;
        case 2:
          span.append(personal.education.degrees.status.nOStatus[i] + ": ");
          li.appendChild(span);
          li.append(personal.education.degrees.status.degreeStatus[i]);
          break;
      }
      ul.appendChild(li);
    }
    edu.appendChild(ul);
  }
}
function skill() {
  let skill = document.querySelector(".skill");
  skill.appendChild(addTitle("Skills"));
  let ul = createElement("ul", "title-year");
  ul.append('Basic Knowledge Of:');
  
  for (let i = 0; i < personal.skills.skill.length; i++){
  let li = createElement('li');
  let span = createElement('span', 'title-year-1', personal.skills.skill[i] +': ');
  li.appendChild(span);
  li.append(personal.skills.overView[i]);
  ul.appendChild(li);
  skill.appendChild(ul);
  }
}
function project(){
    let project = document.querySelector('.project');
    let span = createElement('span', 'title', 'Project: ');
    project.appendChild(span);

    for (let i = 0; i < personal.project.nameOfProject.length; i++){
        let li = document.createElement('li');
        let span = createElement('span','title-year-1',personal.project.nameOfProject[i] +': ');
        li.appendChild(span);
        li.append(personal.project.summary[i]);
        project.appendChild(li);
    }
}
function createElement(element, addClass, txt) {
  let temp = document.createElement(element);
  if (addClass != null) 
    temp.classList.add(addClass);
  if (txt!= null)
    temp.append(txt);
  return temp;
}
function addTitle(title) {
  let p = document.createElement("p");
  let s = document.createElement("span");
  s.classList.add("title");
  s.append(title + ": ");
  p.appendChild(s);
  return p;
}
