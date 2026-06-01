const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
//const coursesContainer = document.querySelector("#courses");


hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.textContent = menu.classList.contains("show") ? "X" : "☰";
});



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]





// BUTTONS
const allButton = document.querySelector("#All");
const cseButton = document.querySelector("#CSE");
const wddButton = document.querySelector("#WDD");

// COURSE CONTAINER
const coursesContainer = document.querySelector("#courses");


// FUNCTION TO DISPLAY COURSES
function displayCourses(courseList) {

    // Clears old content first
    coursesContainer.innerHTML = "";

    // Loop through courses
    courseList.forEach(course => {

        // Create card
        const courseCard = document.createElement("div");

        // Add class
        courseCard.classList.add("course-card");

        // Add content
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
            <p>${course.completed ? 'Completed' : 'In Progress'}</p>
            
        `;

        // Add card to page
        coursesContainer.appendChild(courseCard);
    });

    // Update credit total
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("credit-total").textContent = `Total Credits: ${totalCredits}`;

 
}


// ALL BUTTON
allButton.addEventListener("click", () => {
    displayCourses(courses);
});


// CSE FILTER
cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);
});


// WDD FILTER
wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);
});


// SHOW ALL COURSES WHEN PAGE LOADS
displayCourses(courses);


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;







document.getElementById("timestamp").value =
new Date().toISOString();



const npModal = document.getElementById("np-modal");
const openNp = document.getElementById("open-np");
const closeNp = document.getElementById("close-np");

openNp.addEventListener("click", () => {
    npModal.showModal();
});

closeNp.addEventListener("click", () => {
    npModal.close();
});




const bronzeModal = document.getElementById("bronze-modal");
const openBronze = document.getElementById("open-bronze");
const closeBronze = document.getElementById("close-bronze");

openBronze.addEventListener("click", () => {
    bronzeModal.showModal();
});

closeBronze.addEventListener("click", () => {
    bronzeModal.close();
});




const silverModal = document.getElementById("silver-modal");
const openSilver = document.getElementById("open-silver");
const closeSilver = document.getElementById("close-silver");

openSilver.addEventListener("click", () => {
    silverModal.showModal();
});

closeSilver.addEventListener("click", () => {
    silverModal.close();
});





const goldModal = document.getElementById("gold-modal");
const openGold = document.getElementById("open-gold");
const closeGold = document.getElementById("close-gold");

openNp.addEventListener("click", () => {
    npModal.showModal();
});

closeNp.addEventListener("click", () => {
    npModal.close();
});