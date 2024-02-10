AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
  },
  {
    langImage:"assets/images/techstack-page/sql.jpeg",
    langName:"Structural Query Language",
    langDesc:"<li>SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases, enabling tasks such as data retrieval, insertion, updating, and deletion, as well as defining and modifying database schema.</li>"
  },
  {
    langImage:"assets/images/techstack-page/oops.jpeg",
    langName:"Object Oriented Programming Language",
    langDesc:"<li>Object-Oriented Programming (OOP) is a programming paradigm that models software components as 'objects,' which encapsulate data and behavior, promoting modularity, reusability, and maintainability in software development.</li>"
  },
  {
    langImage:"assets/images/techstack-page/mongo.jpeg",
    langName:"MongoDB",
    langDesc:"<li>MongoDB is a flexible, scalable NoSQL database solution that facilitates the storage and retrieval of unstructured data, offering high performance and easy scalability for modern application development.</li>"
  },
  {
    langImage:"assets/images/techstack-page/java.jpeg",
    langName:"Java",
    langDesc:"<li>Java is a versatile, object-oriented programming language renowned for its portability, performance, and extensive ecosystem, powering everything from enterprise applications to mobile and web development.</li>"
  },
  {
    langImage:"assets/images/techstack-page/express.jpeg",
    langName:"Express",
    langDesc:"<li>Express.js is a minimalist and flexible Node.js web application framework that simplifies the process of building powerful and scalable web applications.</li>"
  },
  {
    langImage:"assets/images/techstack-page/dsa.jpeg",
    langName:"Data Structures and Algorithms",
    langDesc:"<li>DSA (Data Structures and Algorithms) are fundamental tools for efficient problem-solving in computer science.</li>"
  },
  {
    langImage:"assets/images/techstack-page/dead.jpeg",
    langName:"Operating Systems",
    langDesc:"<li>Operating systems serve as the intermediary between hardware and software, managing resources and providing a user-friendly interface for efficient computer operation.</li>"
  },
  {
    langImage:"assets/images/techstack-page/dbms.jpeg",
    langName:"DataBase Management Systems",
    langDesc:"<li>DBMS (Database Management Systems) organize and manage data efficiently, ensuring secure storage, retrieval, and manipulation for various applications.</li>"
  },
  {
    langImage:"assets/images/techstack-page/cn.jpeg",
    langName:"Computer Networks",
    langDesc:"<li>Computer networks enable the exchange of data and resources between devices, facilitating communication and collaboration on a global scale.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
