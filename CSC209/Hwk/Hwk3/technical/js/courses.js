


const computerScienceCourses = [
    {
        courseCode: "CS101",
        courseTitle: "Introduction to Computer Science",
        instructor: {
            name: "Dr. Alice Johnson",
            email: "alice.johnson@university.edu",
            officeHours: "MW 2:00-4:00 PM"
        },
        schedule: {
            days: ["Monday", "Wednesday", "Friday"],
            time: "10:00 AM - 11:30 AM",
            location: "Room 203, Science Building"
        },
        credits: 3,
        syllabus: [
            { week: 1, topic: "Introduction to Computing and Programming" },
            { week: 2, topic: "Data Types and Variables" },
            { week: 3, topic: "Control Structures and Loops" },
            { week: 4, topic: "Functions and Modular Programming" },
            { week: 5, topic: "Arrays and Lists" },
            { week: 6, topic: "Object-Oriented Programming Basics" },
            { week: 7, topic: "Recursion and Algorithm Efficiency" },
            { week: 8, topic: "Midterm Exam" },
            { week: 9, topic: "Sorting and Searching Algorithms" },
            { week: 10, topic: "Data Structures: Stacks and Queues" },
            { week: 11, topic: "Data Structures: Trees and Graphs" },
            { week: 12, topic: "Databases and SQL" },
            { week: 13, topic: "Web Development Basics" },
            { week: 14, topic: "Final Project Presentations" },
            { week: 15, topic: "Final Exam" }
        ]
    },
    {
        courseCode: "CS202",
        courseTitle: "Data Structures and Algorithms",
        instructor: {
            name: "Dr. Michael Smith",
            email: "michael.smith@university.edu",
            officeHours: "TTh 1:00-3:00 PM"
        },
        schedule: {
            days: ["Tuesday", "Thursday"],
            time: "2:30 PM - 4:00 PM",
            location: "Room 305, Engineering Building"
        },
        credits: 4,
        syllabus: [
            { week: 1, topic: "Complexity Analysis and Big O Notation" },
            { week: 2, topic: "Arrays and Linked Lists" },
            { week: 3, topic: "Stacks and Queues" },
            { week: 4, topic: "Recursion and Divide & Conquer" },
            { week: 5, topic: "Sorting Algorithms" },
            { week: 6, topic: "Searching Algorithms" },
            { week: 7, topic: "Hash Tables and Hashing" },
            { week: 8, topic: "Midterm Exam" },
            { week: 9, topic: "Binary Trees and Binary Search Trees" },
            { week: 10, topic: "Heaps and Priority Queues" },
            { week: 11, topic: "Graphs and Graph Algorithms" },
            { week: 12, topic: "Dynamic Programming" },
            { week: 13, topic: "Greedy Algorithms" },
            { week: 14, topic: "Advanced Data Structures" },
            { week: 15, topic: "Final Exam" }
        ]
    }
  ];
  
  console.log(computerScienceCourses);
//   console.log(computerScienceCourses[0].courseCode)
  function displayCourse(computerScienceCourses){
    const courseCode = document.getElementsByClassName("courseCode");
    const courseName = document.getElementsByClassName("courseName");
    const profInfo = document.getElementsByClassName("profInfo");
    const profName = document.getElementsByClassName("profName");
    const profEmail = document.getElementsByClassName("profEmail");
    const profOfficeHours = document.getElementsByClassName("profOfficeHours");
    const scheduleDays = document.getElementsByClassName("days");
    const scheduleTime = document.getElementsByClassName("time");
    const scheduleLocation = document.getElementsByClassName("location");
    const credits = document.getElementsByClassName("credits");
    for (i = 0; i < computerScienceCourses.length; i++) {
        courseCode[i].innerHTML = computerScienceCourses[i].courseCode;
        courseName[i].innerHTML = computerScienceCourses[i].courseTitle;
        profName[i].innerHTML = computerScienceCourses[i].instructor.name;
        profEmail[i].innerHTML = computerScienceCourses[i].instructor.email;
        profOfficeHours[i].innerHTML = computerScienceCourses[i].instructor.officeHours;
        scheduleDays[i].innerHTML = computerScienceCourses[i].schedule.days;
        scheduleTime[i].innerHTML = computerScienceCourses[i].schedule.time;
        scheduleLocation[i].innerHTML = computerScienceCourses[i].schedule.location;
        credits[i].innerHTML = computerScienceCourses[i].credits;
        
        // profInfo[i].innerHTML = computerScienceCourses[i].instructor.name;
    }
    
  }
  displayCourse(computerScienceCourses);