AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/bittech.png",
    place: "Bittech Today",
    time: "(Aug, 2023 - Sep, 2023)",
    desp: "<li>Spearheaded the creation of web pages using React.js, resulting in a 30% increase in average user engagement metrics</li> <li>Collaborated with design and content teams to integrate information, contributing to a 20% enhancement in page views</li> <li>Conducted comprehensive testing, identifying and rectifying potential issues, achieving a 95% bug-free deployment rate</li> <li>Actively contributed innovative ideas in team meetings, fostering a culture of continuous improvement and ideation</li>",
  },
  {
    title: "Software Developer Intern",
    cardImage: "assets/images/experience-page/bondsindia.png",
    place: "Infixin Technologies Private Limited",
    time: "(July, 2022 - Aug, 2022)",
    desp: "<li>Developed optimized responsive web pages using JavaScript and jQuery, driving a 25% increase in user engagement</li> <li>Designed and implemented RESTful APIs with the MERN stack, resulting in a 40% reduction in server response time</li> <li>Conducted testing and resolution of 20+ bugs, leading to a 20% improvement in application stability</li> <li>Collaborated in a cross-functional team, delivering 4 critical projects on time and within budget</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);



// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Toycathon",
    subtitle: "National Level Participant",
    image: "assets/images/experience-page/toycathon.jpg",
    desp: " National-level Finalist in Toycathon, a national-level competition focused on creating innovative solutions",
    href: "#",
  },
  {
    title: "Debates & Speeches ",
    subtitle: "Veteran",
    image: "assets/images/experience-page/debate.jpeg",
    desp:  "Won zonal-level debating competitions, demonstrating superior public speaking prowess and adept critical thinking",
    href: "#",
  },
  {
    title: "Entrepreneurship Development Cell",
    subtitle: "Participant",
    image: "assets/images/experience-page/entrepre.jpg",
    desp:  "Active participant in Entrepreneurship Development Cell, showcasing strong leadership and teamwork abilities",
    href: "#",
  },
  {
    title: "HACK.IT @ BVP 2.0",
    subtitle: "4th Runner Up",
    image: "assets/images/experience-page/hackit.jpeg",
    desp:  "Rakshak: Connecting retired army and police officials to empower and safeguard women in times of need, from accidents to serious situations like rape prevention.",
    href: "#",
  },
  {
    title: "BVEST' 2023",
    subtitle: "Event Manager",
    image: "assets/images/experience-page/bvest.png",
    desp:  "Planned and executed college events, including coding-based treasure hunts and blind code games, engaging over 150 participants to enhance problem-solving and teamwork skills.",
    href: "#",
  },
  {
    title: "Placement Bootcamp",
    subtitle: "Participant",
    image: "assets/images/experience-page/placement.png",
    desp:  "Participated in a comprehensive placement bootcamp organized by my college, involving mock interviews, resume evaluations, group discussions, and assessments to prepare students for professional placements.",
    href: "#",
  },
  {
    title: "CodeCaffe",
    subtitle: "Winner",
    image: "assets/images/experience-page/coffee.jpeg",
    desp:  " Ranked 1st in the College Coding Competition, showcasing superior problem-solving and coding skills",
    href: "#",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
