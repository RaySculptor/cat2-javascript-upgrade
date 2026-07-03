//array for the two projects
const projects=[
    {
        name: "BootsHub",
        link:"https://boots-hub-chrisngilis-projects.vercel.app/"
    },
    {
        name: "HustleHub",
        link: "https://hustlehub-indol.vercel.app/"
    }
];

const projectsList= document.getElementById("projectsList");

//Display the projects
projects.forEach(function(project) {

    const listItem = document.createElement("li");

    const projectLink = document.createElement("a");

    projectLink.textContent = project.name;
    projectLink.href = project.link;
    projectLink.target = "_blank";

    listItem.appendChild(projectLink);

    projectsList.appendChild(listItem);

});