$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    // eslint-disable-next-line linebreak-style
    // {
    //   title: "Talk on ABC",
    //   image: "assets/images/event/image3.jpg",
    // },
    {
      title: "Toycathon",
      subtitle: "National Level Participant",
      image: "assets/images/experience-page/toycathon.jpg",
      desp: " National-level Finalist in Toycathon, a national-level competition focused on creating innovative solutions",
    },
    {
      title: "Debates & Speeches ",
      subtitle: "Veteran",
      image: "assets/images/experience-page/debate.jpeg",
      desp:  "Won zonal-level debating competitions, demonstrating superior public speaking prowess and adept critical thinking",
    },
    {
      title: "Entrepreneurship Development Cell",
      subtitle: "Participant",
      image: "assets/images/experience-page/entrepre.jpg",
      desp:  "Active participant in Entrepreneurship Development Cell, showcasing strong leadership and teamwork abilities",
    },
    {
      title: "HACK.IT @ BVP 2.0",
      subtitle: "4th Runner Up",
      image: "assets/images/experience-page/hackit.jpeg",
      desp:  "Rakshak: Connecting retired army and police officials to empower and safeguard women in times of need, from accidents to serious situations like rape prevention.",
    },
    {
      title: "BVEST' 2023",
      subtitle: "Event Manager",
      image: "assets/images/experience-page/bvest.png",
      desp:  "Planned and executed college events, including coding-based treasure hunts and blind code games, engaging over 150 participants to enhance problem-solving and teamwork skills.",

    },
    {
      title: "Placement Bootcamp",
      subtitle: "Participant",
      image: "assets/images/experience-page/placement.png",
      desp:  "Participated in a comprehensive placement bootcamp organized by my college, involving mock interviews, resume evaluations, group discussions, and assessments to prepare students for professional placements.",

    },
    {
      title: "CodeCaffe",
      subtitle: "Winner",
      image: "assets/images/experience-page/coffee.jpeg",
      desp:  " Ranked 1st in the College Coding Competition, showcasing superior problem-solving and coding skills",

    },
    // {
    //   title: "Keynote on XYZ",
    //   image: "assets/images/event/image2.jpg",
    // },
    // { title: "Group Picture", image: "assets/images/event/image1.jpg" },
    // {
    //   title: "Presentation",
    //   image: "assets/images/event/image4.jpg",
    // },
    // {
    //   title: "Note on XYZ",
    //   image: "assets/images/event/image5.jpg",
    // },
    // {
    //   title: "Keytopics",
    //   image: "assets/images/event/image6.jpg",
    // },
    // {
    //   title: "The Gist",
    //   image: "assets/images/event/image7.jpg",
    // },
    // {
    //   title: "Thank You",
    //   image: "assets/images/event/image8.jpg",
    // },
  ];
  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      output += `
    <div class="swiper-slide">
    <div class="img-container">
      <img src=${event[x].image} alt="" class="img-fluid" style={aspect-ratio: 3/2 ; object-fit: contain; mix-blend-mode: color-burn !important;}/>
    </div>
    <div class="container arrow_contain">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="wrapper">
            <div class="content">
              <div class="title">
                <div class="text-wrapper" style={background:beige;}>
                  <div class="text-inner">
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div> 
        
         <div>
         <br></br>
         ${event[x].desp}
         </div>
          <!-- wraper freee -->
      </div>
    </div>
  </div>`;
    }
    eventswiper.innerHTML = output;
  }
  document.addEventListener("DOMContentLoaded", fillData());
  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // parallax effect
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };
  // initializing swiper
  const slider = new Swiper(".image-slider", parallaxSliderOptions);
});
