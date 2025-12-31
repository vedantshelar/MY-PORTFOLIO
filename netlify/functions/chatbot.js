import natural from "natural";

const classifier = new natural.BayesClassifier();

// GREETINGS
classifier.addDocument("hi", "greeting");
classifier.addDocument("hello", "greeting");
classifier.addDocument("hey", "greeting");
classifier.addDocument("hii", "greeting");
classifier.addDocument("hey there", "greeting");
classifier.addDocument("hello there", "greeting");
classifier.addDocument("hi there", "greeting");
classifier.addDocument("good morning", "greeting");
classifier.addDocument("good afternoon", "greeting");
classifier.addDocument("good evening", "greeting");
classifier.addDocument("greetings", "greeting");
classifier.addDocument("what's up", "greeting");
classifier.addDocument("whats up", "greeting");
classifier.addDocument("how are you", "greeting");
classifier.addDocument("how are you doing", "greeting");

// EDUCATION
classifier.addDocument("tell me about your education", "education");
classifier.addDocument("what is your education", "education");
classifier.addDocument("what is your educational background", "education");
classifier.addDocument("where did you study", "education");
classifier.addDocument("which college did you attend", "education");
classifier.addDocument("what degree are you pursuing", "education");
classifier.addDocument("what is your qualification", "education");
classifier.addDocument("tell me about your academics", "education");
classifier.addDocument("what have you studied", "education");
classifier.addDocument("your education details", "education");


// ABOUT
classifier.addDocument("tell me about yourself", "about");
classifier.addDocument("who are you", "about");
classifier.addDocument("what do you do", "about");
classifier.addDocument("introduce yourself", "about");
classifier.addDocument("give me your introduction", "about");
classifier.addDocument("what is your background", "about");
classifier.addDocument("what is your profile", "about");
classifier.addDocument("what kind of developer are you", "about");

// Projects
classifier.addDocument("what projects have you built", "projects");
classifier.addDocument("what projects have you developed", "projects");
classifier.addDocument("tell me about your projects", "projects");
classifier.addDocument("what have you created", "projects");

// Tech Stack
classifier.addDocument("what is your tech stack", "tech");
classifier.addDocument("what technologies do you use", "tech");
classifier.addDocument("what tools do you work with", "tech");
classifier.addDocument("what skills you have", "tech");

// Experience
classifier.addDocument("tell me about your experience", "experience");
classifier.addDocument("what is your background", "experience");

// Contact
classifier.addDocument("how can i contact you", "contact");
classifier.addDocument("how to reach you", "contact");

classifier.train();

// -------- RESPONSES --------

const responses = {
    projects:
        "I have built full-stack projects like QR-Dine, SkillHub, EchoChat, and other MERN-based applications.You can see all my projects either in project section of this portfolio or on GitHub by clicking github link from the footer section of my portfolio.",
    tech:
        `My tech stack includes 
        Node.js,Express.js,React.js,MongoDB, 
        MySQL,C,C++,Java,
        Javascript,CSS,HTML,
        Git and GitHub and many more...`,
    experience:
        "I am a full-stack developer with strong experience in building scalable web applications using the MERN stack.",
    contact:
        "You can contact me via the contact form on this website or connect with me on LinkedIn.",
    about:
        "Hello, my name is Vedant Shelar. I am a Full Stack MERN Developer with a strong foundation in building modern web applications.",
    education:
        "I am currently pursuing a Bachelor of Engineering in Information Technology at Rajiv Gandhi Institute of Technology, Mumbai. I have completed a Diploma in Information Technology from Kala Vidya Mandir Institute of Technology with a score of 91.20%. I have also completed my Higher Secondary (HSC) in Commerce from Kirti M. Doongursee College and Secondary School (SSC) from Sharadashram Vidyamandir Boys High School & Junior College of Commerce, Mumbai.",
    greeting:
        "Hello! 👋 I’m Vedant Shelar’s portfolio assistant. Feel free to ask me about his skills, projects, education, or experience."
};

export async function handler(event) {
    try {
        const { message } = JSON.parse(event.body);

        const intent = classifier.classify(message);

        return {
            statusCode: 200,
            body: JSON.stringify({
                reply:
                    responses[intent] ||
                    "You can only ask me about my projects,skills, education, experience, or contact details."
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                reply: "Something went wrong. Please try again."
            })
        };
    }
}
