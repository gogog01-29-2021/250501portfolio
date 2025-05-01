document.addEventListener('DOMContentLoaded', ()=>{
    generateproject();
    setupFilterButtons();
});

const project=[
    {title:"Korean Won Detection",
     shortd:"Computer Vision",   
     Description:"A machine learning project that identifies and classifies Korean Won (currency) in images with high accuracy. Implemented using computer vision techniques and deep learning models.",
     url:"https://github.com/mannmi/KoreanWonDetection",
     youtubeurl:"https://www.youtube.com/embed/ULiOvo3cGKI?si=lDbhmdbNUzkTlj_h",
     Mechanism:"By Using Opencv ",
     taglist:["Fraud Detection","TensorFlow"]
    },
    {title:"Deep Hedging with Reinforcement Learning",
        shortd:"Hedging",      
        Description:"A machine learning project that identifies and classifies Korean Won (currency) in images with high accuracy. Implemented using computer vision techniques and deep learning models.",
        url:"https://www.qvest.ai",
        youtubeurl:"https://www.youtube.com/embed/watch?si=cpKni-BB02NJe7T1&embeds_referring_euri=http%3A%2F%2F127.0.0.1%3A5500%2F&source_ve_path=Mjg2NjQsMTY0NTA2&v=UeET6UTnXdY&feature=youtu.be",
   Mechanism:"Black Scholes",
   taglist:["PPO","Pytorch"]
       },
       {title:"Mohamed Salah Goal Prediction for Quantitative Betting Market",
        shortd:"Regression",   
        Description:"Created a predictive analytics model to forecast goal-scoring opportunities for Mohamed Salah in football matches. This project combines sports statistics, player performance metrics, and machine learning to develop quantitative betting insights.",
        url:"https://www.youtube.com/watch?si=CWL3RzVNkC35XVgm&embeds_referring_euri=http%3A%2F%2F127.0.0.1%3A5500%2F&source_ve_path=Mjg2NjQsMTY0NTA2&v=BPJBhvsICaA&feature=youtu.be",
        youtubeurl:"https://www.youtube.com/embed/BPJBhvsICaA?si=l-kkEPf7PuoadfU4",
   Mechanism:"Parameter Estimation ",
   taglist:["Geometrical Statistics","Naive Bayes"]
       },
]

function generateproject(filter="All") {
    const projectContainer = document.getElementById("project-list");
    if (!projectContainer) return;
    projectContainer.innerHTML = "";

    let delay = 0;
    console.log("GOTOMARS")
    project.forEach(item => {
        if (filter !== "All" && item.shortd !== filter) return;
        console.log("GOTOMARS2")
        const li = document.createElement('li');
        li.className = "project-item";
        li.style.animationDelay = `${delay}s`;
        delay += 0.1; // Each project fades slightly after previous one

        const h3 = document.createElement('h3');
        h3.innerHTML = item.title;
        li.appendChild(h3);

        let div = document.createElement('div');
        div.classList.add('project-meta');
        div.innerHTML = `<span class="project-type"><i class="fas fa-tags"></i>${item.shortd}</span>
        <a href="${item.url}" class="project-link">
            <i class="fab fa-github"></i> View on GitHub
        </a>`;
        li.appendChild(div);

        const p = document.createElement('p');
        p.innerHTML = item.Description;
        p.classList.add('project-description');
        li.appendChild(p);

        div = document.createElement('div');
        div.classList.add('video-wrapper');
        div.innerHTML = `<iframe src="${item.youtubeurl}" frameborder="0" allowfullscreen></iframe>`;
        li.appendChild(div);

        div = document.createElement('div');
        div.classList.add('project-details');
        const h4 = document.createElement('h4');
        h4.innerHTML = "Tags";
        div.appendChild(h4);

        const ul = document.createElement('ul');
        ul.classList.add('tech-list');
        item.taglist.forEach(tag => {
            const li2 = document.createElement('li');
            li2.innerHTML = tag;
            ul.appendChild(li2);
        });

        div.appendChild(ul);
        li.appendChild(div);
        projectContainer.appendChild(li);
    });
}

function setupFilterButtons() {
    const filterButtonsContainer = document.getElementById("filter-buttons");
    if (!filterButtonsContainer) return;

    const buttons = filterButtonsContainer.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            generateproject(filter);
        });
    });
}