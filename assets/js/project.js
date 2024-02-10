AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Sorting Visualizer ( HTML, CSS, Javascript )",
    link: "https://gaurav1021.github.io/sorting-visualizer/",
    cardImage: "assets/images/project-page/sort.png",
    description: " An interactive web application enabling real-time visualization of sorting algorithms. Leveraged JavaScript to create an intuitive user interface, enabling users to initiate and observe sorting algorithms. Integrated sections providing detailed insights into algorithm, fostering a deeper comprehension of their mechanics. Employed modern development practices, optimizing code efficiency while adhering to best coding standards. ",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/gaurav1021/sorting-visualizer",
  },
  {
    title: "Enoy ( React, Pusher, NextAuth, Cloudinary CDN )",
    link: "https://messenger-ebon.vercel.app/",
    cardImage: "assets/images/project-page/mess.png",
    description: " Architected real-time messaging web application to ensure seamless messaging and optimise message latency. Developed a sleek and responsive UI that resulted in substantial improvements in user engagement and retention. Implemented secure credential authentication, integrating Google and Github authentication to streamline login process. Achieved file uploads with minimised transfer time, ensuring precise data submissions through client-side validation.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/gaurav1021/messenger",
  },
  {
    title: "Vyayam ( React, Tailwind CSS, RapidAPI )",
    link: "https://vyayam.netlify.app/",
    cardImage: "assets/images/project-page/exer.jpeg",
    description: "Directed full-cycle development of a scalable workout guide and planner application, overseeing all aspects of the project. Demonstrated mastery in file structuring, optimising component performance, resulting in enhanced rendering time. Implemented centralized state management for efficient data sharing and reduced code complexity across components. Successfully implemented dynamic search functionality, resulting in 60% increase in search accuracy and user satisfaction.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/gaurav1021/Vyayam",
  },
  {
    title: "Keeper ( React )",
    link: "https://github.com/gaurav1021/keeper/",
    cardImage: "assets/images/project-page/note.jpeg",
    description: " Revolutionize your note-taking experience with our cutting-edge online application built on React. Seamlessly organize, sync, and access your notes from any device, anytime, anywhere. Enjoy a sleek, user-friendly interface designed for efficiency and productivity. Utilizing the power of React, our application offers lightning-fast performance and real-time collaboration capabilities, ensuring seamless teamwork and idea sharing. ",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/gaurav1021/keeper",
  },
  {
    title: "Rakshak (Goal of my life)",
    link: "https://www.figma.com/proto/QJHb3Q8A4ezksfporoqUlK/Untitled?page-id=0%3A1&node-id=25-4&viewport=212%2C291%2C0.19&scaling=scale-down&starting-point-node-id=1%3A9&show-proto-sidebar=1",
    cardImage: "assets/images/project-page/sos.png",
    description: "Rakshak: Connecting retired army and police officials to empower and safeguard women in times of need, from accidents to serious situations like rape prevention.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://www.figma.com/proto/QJHb3Q8A4ezksfporoqUlK/Untitled?page-id=0%3A1&node-id=25-4&viewport=212%2C291%2C0.19&scaling=scale-down&starting-point-node-id=1%3A9&show-proto-sidebar=1",
  },
  {
    title: "Pocket Piano",
    link: "https://docs.google.com/presentation/d/1odWRyXEoWDD41nhYl4kfI9VQYH4vL30L/edit?usp=sharing&ouid=111764031772217602456&rtpof=true&sd=true",
    cardImage: "assets/images/project-page/piano.png",
    description: " It’s a pocket keyboard, a pad that you can attach to your mobile and and you can use your mobile as a actual musical instrument now, the mobile will now act as a speaker and the device will take input for it. It will be very cost effective since it’s just a device to take input. It is colored to attract children,and have punctured so blind person can also play and enjoy music. It will be very pocket friendly,easy to carry. It will of the size of a mobile cover.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://docs.google.com/presentation/d/1odWRyXEoWDD41nhYl4kfI9VQYH4vL30L/edit?usp=sharing&ouid=111764031772217602456&rtpof=true&sd=true",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, link, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up"  data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${link}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
