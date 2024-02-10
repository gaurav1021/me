/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "HUMAN ACTIVITY RECOGNITION",
    authors:
      "AKSHAY PRABHAT MISHRA, DHIRAJ KARGETI, DHRUV PAHADIA, GAURAV MANGAL",
    conferences:
      " ",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/human-activity-recognition-s.jpeg",
    citation: {
      vancouver:
        " ",
    },
    abstract: "Human activity recognition (HAR) is a critically important field of research with diverse applications spanning healthcare, sports, and human-computer interaction. In this context, Long-Short Term Memory (LSTM) Recurrent Convolutional Networks (LRCN) have emerged as a highly promising deep learning architecture. LRCN combines the strengths of two powerful neural network models, convolutional neural networks (CNN) and LSTM, to effectively process both spatial and temporal features extracted from sensor data, making it particularly suitable for HAR tasks. Computer vision has faced considerable challenges in recognizing and describing images and videos. While Convolutional Neural Networks (CNN) have significantly advanced supervised image recognition tasks, video data processing requires models capable of handling variable-length input sequences and generating variable-length outputs. To address these challenges, the concept of Long-term Recurrent Convolutional Networks (LRCNs) has been introduced. LRCNs represent an end-to-end trainable architecture for visual recognition and description by integrating convolutional layers and long-range temporal recursion. Unlike previous models, LRCNs excel at learning compositional representations in the time domain, enabling the capture of long-term dependencies in visual data. To mitigate the vanishing gradient problem, Long Short-Term Memory (LSTM) units are employed within the LRCN framework. The experimental results demonstrate the efficacy of LRCNs in enhancing various visual tasks and enabling the establishment of an end-to-end optimizable mapping from image pixels to sentence-level natural language descriptions. The proposed architecture of LRCNs has been instantiated and evaluated in three distinct experimental settings: video activity recognition, image-to-sentence mappings, and higher-level discriminative label prediction tasks. These experiments serve to validate the effectiveness and versatility of LRCNs in diverse visual recognition scenarios. The advancements offered by LRCNs in processing temporal dynamics alongside spatial information are pivotal in pushing the boundaries of computer vision and bolstering its capability to understand and interpret visual data in a holistic manner.",
    absbox: "absPopup1",
  },
  {
    title: "IMPROVING WEB PAGE LOADING TIMES THROUGH PREDICTIVE PREFETCHING METHODS BASED ON USER NAVIGATION HISTORY",
    authors:
      "AKSHAY PRABHAT MISHRA, DHIRAJ KARGETI, DHRUV PAHADIA, GAURAV MANGAL",
    conferences:
      " ",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/1_I7bQyWRdlZhZ3KN-JXuz2g.gif",
    citation: {
      vancouver:
        " ",
    },
    abstract: "In response to the growing demand for seamless user experiences in web applications, predictive prefetching based on user interaction has become a crucial technique to alleviate perceived latency. This paper presents an overview of predictive prefetching based on user interaction for web applications, elucidating essential concepts such as user interaction analysis, prediction algorithms, resource preloading, adaptability, and learning. The primary objective is to reduce perceived latency and improve the responsiveness of web applications by strategically preloading resources, thereby optimizing the user experience.",
    absbox: "absPopup1",
  }
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
