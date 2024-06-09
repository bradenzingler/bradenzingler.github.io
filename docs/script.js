document.addEventListener('DOMContentLoaded', function() {
    const bodyContent = document.getElementById('quick-view');

    const content = {
        about: `
        <h2>Quick facts</h2>
            <ul>
                <li>
                    <h3>Education</h3>
                    University of Wisconsin - Madison, Computer Engineering<br>
                    Spring 2026 - Dean's Honor List every semester
                </li>
                <li>
                    <h3>Skills</h3>
                <ul>
                    <li><b>Software</b>: Java, Python, C/C++, JavaScript, HTML/CSS, Dart, Flutter, React, Node.js, SQL</li>
                    <li><b>AWS</b>: Lambda, SNS, SQS, S3, DynamoDB, Polly, APIGW</li>
                    <li><b>Hardware</b>: Circuit design & analysis, ModelSim, LTSpice, SystemVerilog,
                        logic design
                    </li>
                </ul>
                </li>
                <li>
                    <h3>Experience</h3>
                    <ul>
                        <li><b>2024</b>: Software Engineering Intern, Sinclair Digital</li>
                        <li><b>2023</b>: Software Engineering Intern, Sinclair Digital</li>
                        <li><b>2022</b>: Engineering Intern, Cardinal Glass</li>
                    </ul>
                </li>
                <li>
                    <h3>Interests</h3>
                    <ul>
                        <li>Software development</li>
                        <li>Machine Learning</li>
                        <li>Hardware design</li>
                    </ul>
                </li>
            </ul>
        `,
        projects: `
            <h2>Projects</h2>
            <ul id="project-list">
                <li class="project-card">
                    <h3>Portfolio</h3>
                    This website is one of my most recent projects. I built this portfolio to showcase my projects, skills, and experience. The website is built using HTML, CSS, and JavaScript and is hosted on GitHub Pages.
                    <ul class="skills">
                        <li class="skill">Web development</li>
                        <li class="skill">JavaScript</li>
                        <li class="skill">HTML</li>
                        <li class="skill">CSS</li>
                        <li class="skill">Responsive design</li>
                    </ul>
                </li>
                <li class="project-card">
                <h3><a href="/recipe_extractor">Recipe Extractor</a></h3>
                A Chrome extension to extract recipes from web pages and simplify the cooking process.
                This project taught me the basics of web scraping and Chrome extension development.
                I also implemented a blacklist to block the extension on certain websites, along with an integrated
                nightmode feature. I am currently working on an extension website and a feature to allow users to save recipes
                and search through them later.
                    <ul class="skills">
                        <li class="skill">JavaScript</li>
                        <li class="skill">HTML</li>
                        <li class="skill">CSS</li>
                        <li class="skill">jQuery</li>
                    </ul>
                </li>
                <li class="project-card">
                <h3><a href="/search_engine">Search Engine</a></h3>
                A search engine that indexes thousands of web pages based on the term-frequency inverse document frequency (TF-IDF) algorithm.
                The search engine can return <i>somewhat</i> relevant results, generally in less than 20 milliseconds. The search
                engine operates on solely Wikipedia articles, since the internet is a big place. Made in conjunction with the web crawler.
                    <ul class="skills">
                        <li class="skill">Java</li>
                        <li class="skill">SQLite</li>
                        <li class="skill">Maven</li>
                    </ul>
                </li>
                <li class="project-card">
                <h3><a href="/web_crawler">Web Crawler</a></h3>
                A web crawler used to crawl Wikipedia articles and index them for the search engine. The web crawler sends
                the keywords of each article it crawls to a SQLite database, and appends any new links to a queue for it to continue crawling.
                The crawler is compliant with the robots.txt file of Wikipedia, and can be paused and resumed at any time.
                Additionally, the crawler is set to crawl at a certain rate to avoid overloading Wikipedia's servers.
                <ul class="skills">
                        <li class="skill">Java</li>
                        <li class="skill">SQLite</li>
                        <li class="skill">JSoup</li>
                        <li class="skill">Maven</li>
                        <li class="skill">NLP</li>
                    </ul>
                </li>
                <li class="project-card">
                    <h3>Mutual Friends</h3>
                    An implementation of Dijkstra's algorithm to find the closest mutual connections between
                    two users of a social media app. The project read a CSV file of users into a graph, where
                    a user being friends with another user is an edge of the graph, and each user is a node. The project was done
                    for a programming class at UW-Madison with a team of eight people. I was responsible for the backend of
                    the project.
                    <ul class="skills">
                        <li class="skill">Java</li>
                        <li class="skill">Algorithms</li>
                        <li class="skill">CSV file parsing</li>
                        <li class="skill">Data Science</li>
                    </ul>
                </li>
                <li class="project-card">
                    <h3>Snake Game</h3>
                    A simple snake game built using Java and Java GUI. The game allows users to control a snake that grows in length as it eats food. The game includes features such as score tracking, game over detection, and collision detection. I want to eventually train a neural network to play the game.
                    <ul class="skills">
                        <li class="skill">Java</li>
                        <li class="skill">Java GUI</li>
                    </ul>
                </li>
                <li class="project-card">
                    <h3>Chat App</h3>
                    A command-line chat application that enables real-time communication between users. The application is built on a server-client model, where the server manages all incoming messages and broadcasts them to all connected clients. It uses socket programming to facilitate communication between the server and clients and supports multiple concurrent connections. While it still needs some work, the chat app was a great way for me to learn about socket programming and network communication, as well as the capabilities of the command line.
                    <ul class="skills">
                        <li class="skill">Python</li>
                        <li class="skill">Sockets</li>
                        <li class="skill">Multithreading</li>
                    </ul>
                </li>
                
                <li class="project-card">
                    <h3>Mandelbrot Set Visualizer</h3>
                    A visualizer for the Mandelbrot set that allows users to explore the set. The visualizer is built using Java and Java GUI and uses the Mandelbrot set algorithm to generate the fractal. The visualizer also includes a color mapping feature that allows users to customize the colors of the set. The project was a fun way for me to learn more about fractals and visualization techniques, as well as mathematical applications of computer science.
                    <ul class="skills">
                        <li class="skill">Java</li>
                        <li class="skill">Java GUI</li>
                    </ul>
                </li>
            </ul>
        `,
        work: `
            <h2>Work Experience</h2>
            <ul id="project-list">
                <li class="project-card">
                <h3>Software Engineering Intern</h3>
                <h4>Sinclair Digital | June 2023 - Present</h4>
                I worked on the AI team to build and maintain AI productivity, SEO optimization,
                and more tools to produce increases in consumer engagement and producer productivity.
                I designed and implemented the backend behind an AI text-to-speech service for news stories, 
                wrote unit tests and maintained existing AI services, and helped to build and 
                launch several new large AI products during my time at Sinclair Digital.
                    <ul class="skills">
                        <li class="skill">Python</li>
                        <li class="skill">Java</li>
                        <li class="skill">Pandas</li>
                        <li class="skill">Pytest</li>
                        <li class="skill">Javascript</li>
                        <li class="skill">Node.js</li>
                        <li class="skill">Lambda</li>
                        <li class="skill">S3</li>
                        <li class="skill">SQS</li>
                        <li class="skill">React</li>
                    </ul>
                </li>

            </ul>
        `,
    };
    
    projectsLink = document.getElementById('projects-link');
    aboutLink = document.getElementById('about-link');
    workLink = document.getElementById('work-link');


    /**
     * Set the active link in the navbar.
     */
    function setActiveLink(link) {
        const links = [projectsLink, aboutLink, workLink];
        for (let i = 0; i < links.length; i++) {
            links[i].classList = '';
        }
        link.classList = 'active';
    }


    /**
     * Projects section
     */
    projectsLink.addEventListener('click', () => {
        bodyContent.innerHTML = content.projects;
        setActiveLink(projectsLink);
    });


    /**
     * About me section
     */
    document.getElementById('about-link').addEventListener('click', () => {
        bodyContent.innerHTML = content.about;
        setActiveLink(aboutLink);
    });


    /**
     * Work experience section
     */
    document.getElementById('work-link').addEventListener('click', () => {
        bodyContent.innerHTML = content.work;
        setActiveLink(workLink);
    });
});

