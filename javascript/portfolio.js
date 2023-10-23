
        document.querySelector(".menu-button")
        .addEventListener('click', () =>{
            document.querySelector(".nav-button-container").style.width ="300px"

        });

        document.querySelector(".close-button")
        .addEventListener('click', () =>{
            document.querySelector(".nav-button-container").style.width ="0px"

            
        })




            const projects = [
            {
                image: "pictures/project-pic-1.png",
                name: "Simple Calculator &#x2197 click",
                description: `This basic calculator is designed for carrying out fundamental mathematical
                           operations, including addition, subtraction, multiplication and division.`,
                tools: ['HTML', 'CSS','Javascript', 'VS Code','Github'],
                website: "http://adepojuwasiu.github.io/calculator/" 
            },
            {
                image: "pictures/project-pic-2.png",
                name: "YouTube Clone &#x2197 click",
                description: `Create a single page YouTube clone, designed to showcase the website User Interface`,
                tools: ['HTML', 'CSS','Javascript','VS Code','GitHub'],
                website: "http://adepojuwasiu.github.io/Youtube-clone/"
            },
            {
                image: "pictures/project-pic-3.png",
                name: "My Portfolio &#x2197 click",
                description: `Portfolio website that showcase my area of expertise, experience and projects in software 
                            development and datav science.`,
                tools: ['HTML', 'CSS','Javascript','VS Code','Github'],
                website: "http://adepojuwasiu.github.io/my-portfolio/"
            },
            {
                image: "pictures/project-pic-4.png",
                name: "Credit Card Fraud Detection &#x2197 click",
                description: `It's important that credit card companies are able to recognize fraudulent credit
                            card transactions so that customers are not charged for items that they did not purchase.`,
                tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib','Seaborn', 'Scikit-learn','Machine Learning',
                             'Classification','Jupyter Notebook'],
                website: "http://github.com/AdepojuWasiu/Credit-Card" 
            },
            {
                image: "pictures/project-pic-5.png",
                name: "Analysis of Shop Customer Data &#x2197 click",
                description: `Shop Customer data is detailed analysis of a imaginative shop's ideal customer. it helps a 
                          business to better understand its customers and to foster good decision making.`,
                tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib','Seaborn','Data Visualization','Jupyter Notebook'],
                website: "http://github.com/AdepojuWasiu/Customer-Project"
            },
            {
                image: "pictures/project-pic-6.png",
                name: "Car Price Prediction &#x2197 click",
                description: `it's important to know the variable affecting the selling price of car and to be able
                              to predict the selling price of car using other available variables.`,
                tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib','Seaborn','Scikit-learn','Machine Learning',
                            'Regression','Jupyter Notebook'],
                website: "http://github.com/AdepojuWasiu/Car-Price"
            }
        ];

        let projectHtml = "";

        projects.forEach((project) => {
            let toolButtons = project.tools.map(tool => `<button class="project-button">${tool}</button>`).join('');
            projectHtml += `
                <div class="project-sub-container">
                    <a href= "${project.website}">
                        <div class="project-image">
                            <img src="${project.image}">
                        </div>
                        <div class="project-name-description">
                            <h2>${project.name}</h2>
                            <p class="project-name-discriptions-p">${project.description}</p>
                        </div>
                        <div class="project-tools">
                            ${toolButtons}
                        </div>
                    </a>
                </div>`;
        });

        document.querySelector(".project-main-container").innerHTML = projectHtml;

        document.querySelector(".all-list").addEventListener('click', () =>{
            document.querySelector(".project-main-container").innerHTML= projectHtml;

        });


        const webProjects = [
            {
                image: "pictures/project-pic-1.png",
                name: "Simple Calculator &#x2197 click",
                description: `This basic calculator is designed for carrying out fundamental mathematical
                           operations, including addition, subtraction, multiplication and division.`,
                tools: ['HTML', 'CSS','Javascript', 'VS Code','Github'],
                website: "http://adepojuwasiu.github.io/calculator/" 
            },
            {
                image: "pictures/project-pic-2.png",
                name: "YouTube Clone &#x2197 click",
                description: `Create a single page YouTube clone, designed to showcase the website User Interface`,
                tools: ['HTML', 'CSS','Javascript','VS Code','GitHub'],
                website: "http://adepojuwasiu.github.io/Youtube-clone/"
            },
            {
                image: "pictures/project-pic-3.png",
                name: "My Portfolio &#x2197 click",
                description: `Portfolio website that showcase my area of expertise, experience and projects in software 
                            development and datav science.`,
                tools: ['HTML', 'CSS','Javascript','VS Code','Github'],
                website: "http://adepojuwasiu.github.io/my-portfolio/"
            },
        ];
        let webHtml = "";
        webProjects.forEach((project) => {
            let toolButtons = project.tools.map(tool => `<button class="project-button">${tool}</button>`).join('');
            webHtml += `
            <div class="project-sub-container">
                    <a href= "${project.website}">
                        <div class="project-image">
                            <img src="${project.image}">
                        </div>
                        <div class="project-name-description">
                            <h2>${project.name}</h2>
                            <p class="project-name-discriptions-p">${project.description}</p>
                        </div>
                        <div class="project-tools">
                            ${toolButtons}
                        </div>
                    </a>
                </div>`;
        });


            document.querySelector(".web-list").addEventListener('click', () =>{
                document.querySelector(".project-main-container").innerHTML= webHtml

            });


        const dataProjects = [
            {
                image: "pictures/project-pic-4.png",
                name: "Credit Card Fraud Detection &#x2197 click",
                description: `It's important that credit card companies are able to recognize fraudulent credit
                            card transactions so that customers are not charged for items that they did not purchase.`,
                tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib','Seaborn', 'Scikit-learn','Machine Learning',
                             'Classification','Jupyter Notebook'],
                website: "http://github.com/AdepojuWasiu/Credit-Card" 
            },
            {
                image: "pictures/project-pic-5.png",
                name: "Analysis of Shop Customer Data &#x2197 click",
                description: `Shop Customer data is detailed analysis of a imaginative shop's ideal customer. it helps a 
                          business to better understand its customers and to foster good decision making.`,
                tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib','Seaborn','Data Visualization','Jupyter Notebook'],
                website: "http://github.com/AdepojuWasiu/Customer-Project"
            },
            {
                image: "pictures/project-pic-6.png",
                name: "Car Price Prediction &#x2197 click",
                description: `it's important to know the variable affecting the selling price of car and to be able
                              to predict the selling price of car using other available variables.`,
                tools: ['Python', 'Pandas', 'Numpy', 'Matplotlib','Seaborn','Scikit-learn','Machine Learning',
                            'Regression','Jupyter Notebook'],
                website: "http://github.com/AdepojuWasiu/Car-Price"
            }
        ];
        let dataHtml = "";
        dataProjects.forEach((project) => {
            let toolButtons = project.tools.map(tool => `<button class="project-button">${tool}</button>`).join('');
            dataHtml += `
            <div class="project-sub-container">
                    <a href= "${project.website}">
                        <div class="project-image">
                            <img src="${project.image}">
                        </div>
                        <div class="project-name-description">
                            <h2>${project.name}</h2>
                            <p class="project-name-discriptions-p">${project.description}</p>
                        </div>
                        <div class="project-tools">
                            ${toolButtons}
                        </div>
                    </a>
                </div>`;
        });

        document.querySelector(".data-list").addEventListener('click', () =>{
            document.querySelector(".project-main-container").innerHTML= dataHtml

        });





        const links = document.querySelectorAll(".nav-list a");

        links.forEach(link => {
        link.addEventListener('click', function(e) {
            links.forEach(link => link.classList.remove('active'));

            this.classList.add('active');
            document.querySelector(".nav-button-container").style.width ="0px"        

        });

        });

        const dataLinks = document.querySelectorAll(".data-nav-list a");

            dataLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    dataLinks.forEach(link => link.classList.remove('active'));

                    this.classList.add('active');       

                });
                
            });