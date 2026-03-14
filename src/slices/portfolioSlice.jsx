import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    portfolio: {
        projects: [
          {
            _id: 0,
            title: "Intellexa – AI Based Decision Support System",
            description:
              "Intellexa is an AI-powered decision support system designed to help businesses transform raw data into actionable insights. It enables users to upload CSV or Excel datasets and instantly receive interactive visualizations, predictive analytics, risk detection, and AI-driven recommendations. The platform also includes an AI assistant that allows users to ask business-related questions and get intelligent responses based on their data, making decision-making faster, smarter, and data-driven.",
          
            techStack: [
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Redux Toolkit",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Python",
              "Flask",
              "Scikit-learn",
              "Groq API"
            ],
          
            liveDemoLink: "https://intellexaa.netlify.app/",
            codeLink: "https://github.com/vedantshelar/INTELLEXA",
          
            features: [
              "Upload business data using CSV or Excel files",
              "Automatic data preprocessing and transformation",
              "Interactive dashboards with Line, Bar, Pie, and Area charts",
              "AI-based revenue prediction for next 30 days",
              "KPI analysis for last 7, 30, and 365 days",
              "Customer insights including retention and behavior analysis",
              "AI-generated insights, risk alerts, and recommendations",
              "Business risk detection (drop in revenue, churn signals)",
              "AI Assistant (chatbot) for asking data-related business questions",
              "Secure authentication using JWT and cookies",
              "Dataset management (upload, view, delete)",
              "Modern responsive UI (SaaS dashboard design)",
              "Full-stack integration (Frontend + Backend + ML Service)",
              "Real-time data processing pipeline from upload → AI → visualization"
            ],
          
            thumbnail: "/thumbanails/intellexa.png",
          
            screenshots: [
              "/projectScreenshots/intellexa/ss1.png",
              "/projectScreenshots/intellexa/ss2.png",
              "/projectScreenshots/intellexa/ss3.png",
              "/projectScreenshots/intellexa/ss4.png",
              "/projectScreenshots/intellexa/ss5.png",
              "/projectScreenshots/intellexa/ss6.png",
              "/projectScreenshots/intellexa/ss7.png",
              "/projectScreenshots/intellexa/ss8.png",
              "/projectScreenshots/intellexa/ss9.png"
            ]
          }
          ,{
            _id: 1,
            title: "QR Code-Based Restaurant Ordering System",
            description:
              "A modern contactless restaurant ordering system using QR codes and NFC that allows customers to browse menus, place customized orders, and track order status in real time, while providing restaurant admins with powerful tools for order management, menu control, and business analytics.",
            techStack: [
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
            ],
            liveDemoLink: "https://full-stack-project3.onrender.com/user/landing",
            codeLink: "https://github.com/vedantshelar/FULL-STACK-PROJECT3",
            features: [
              "QR & NFC-based digital menu access",
              "Category-wise menu browsing with descriptions and pricing",
              "Seamless order placement with customization options",
              "Real-time order status tracking (Pending → Preparing → Ready)",
              "Admin dashboard with daily, monthly, and yearly profit analytics",
              "Top-selling menu item and category insights",
              "Real-time order acceptance and rejection",
              "Dynamic menu and category management",
              "Efficient pending orders handling system",
              "Fully responsive design for all devices"
            ],
            thumbnail: "/thumbanails/qrCode.png",
            screenshots: [
              "/projectScreenshots/qrDine/ss1.jpeg",
              "/projectScreenshots/qrDine/ss2.jpeg",
              "/projectScreenshots/qrDine/ss3.jpeg",
              "/projectScreenshots/qrDine/ss4.jpeg",
              "/projectScreenshots/qrDine/ss5.jpeg",
              "/projectScreenshots/qrDine/ss6.jpeg",
              "/projectScreenshots/qrDine/ss7.jpeg",
              "/projectScreenshots/qrDine/ss8.jpeg",
              "/projectScreenshots/qrDine/ss9.jpeg",
              "/projectScreenshots/qrDine/ss10.jpeg",
              "/projectScreenshots/qrDine/ss11.jpeg",
              "/projectScreenshots/qrDine/ss12.jpeg",
              "/projectScreenshots/qrDine/ss13.jpeg",
              "/projectScreenshots/qrDine/ss14.jpeg",
              "/projectScreenshots/qrDine/ss15.jpeg",
              "/projectScreenshots/qrDine/ss16.jpeg",
            ]
          },
          {
            _id: 2,
            title: "PRO-SKILLHUB",
            description:
              "A collaborative platform for college students to showcase skills, share projects, publish educational content, and connect with peers through real-time chat, enabling talent discovery and strong academic networking.",
            techStack: [
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Socket.IO",
              "Javascript",
              "CSS",
              "HTML"
            ],
            liveDemoLink: "https://pro-skillhub.netlify.app/",
            codeLink: "https://github.com/vedantshelar/PRO-SKILLHUB",
            features: [
              "Student profiles to showcase skills, projects, and achievements",
              "Project showcase for academic and personal work",
              "Educational posts creation and discovery",
              "Real-time one-to-one chat using Socket.IO",
              "Skill-based student discovery and networking",
              "Secure authentication using JWT",
              "Fully responsive user interface across devices"
            ],
            thumbnail: "/thumbanails/proSkillHub.png",
            screenshots: [
              "/projectScreenshots/skillhub/ss1.png",
              "/projectScreenshots/skillhub/ss2.png",
              "/projectScreenshots/skillhub/ss3.png",
              "/projectScreenshots/skillhub/ss4.png",
              "/projectScreenshots/skillhub/ss5.png",
              "/projectScreenshots/skillhub/ss6.png", 
              "/projectScreenshots/skillhub/ss7.png",
              "/projectScreenshots/skillhub/ss8.png",
            ]
          },
          {
            _id: 3,
            title: "EchoChat",
            description:
              "The frontend client of EchoChat, a modern real-time chat application supporting one-to-one and group messaging. Built with React.js and Tailwind CSS, it delivers a fast, responsive, and intuitive chatting experience with live message updates using Socket.IO.",
            techStack: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Socket.IO",
                "Javascript",
                "Tailwind CSS",
                "CSS",
                "HTML",
            ],
            liveDemoLink: "https://echochat-web.netlify.app/",
            codeLink: "https://github.com/vedantshelar/EchoChat-Frontend",
            features: [
              "JWT-based user authentication with secure login and signup",
              "Real-time one-to-one and group chat user interface",
              "Instant message delivery using Socket.IO client",
              "Responsive design optimized for mobile and desktop devices",
              "State management using React Hooks and Context API",
              "Dynamic routing with React Router DOM",
              "Clean and minimal UI styled with Tailwind CSS"
            ],
            thumbnail: "/thumbanails/echoChat.png",
            screenshots: [
              "/projectScreenshots/echochat/ss1.png",
              "/projectScreenshots/echochat/ss2.png",
              "/projectScreenshots/echochat/ss3.png",
              "/projectScreenshots/echochat/ss4.png",
              "/projectScreenshots/echochat/ss5.png",
            ]
          },
          {
            _id: 4,
            title: "RENTO – Property Listing & Management Platform",
            description:
              "RENTO is a web-based property management platform that allows users to upload, manage, and browse property listings with advanced search and filtering options, while providing admins with full control over property moderation through a dedicated admin panel.",
            techStack: [
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "Node.js",
              "Express.js",
              "MongoDB",
            ],
            liveDemoLink: "https://full-stack-project-1-1z4c.onrender.com/list",
            codeLink: "https://github.com/vedantshelar/FULL-STACK-PROJECT-1",
            features: [
              "User property upload with images, descriptions, and location details",
              "Edit and update uploaded property information",
              "Browse all available property listings",
              "Advanced search and filtering for easy property discovery",
              "Admin panel to modify or delete any property listing",
              "Session-based authentication for secure access",
              "User-friendly and intuitive interface for seamless interaction"
            ],
            thumbnail: "/thumbanails/rento.png",
            screenshots: [
             "/projectScreenshots/rento/ss1.png",
              "/projectScreenshots/rento/ss2.png",
              "/projectScreenshots/rento/ss3.png",
              "/projectScreenshots/rento/ss4.png",
              "/projectScreenshots/rento/ss5.png",
              "/projectScreenshots/rento/ss6.png",
            ]
          },     
          {
            _id: 5,
            title: "Zerodha – Trading Platform Clone (Full Stack)",
            description:
              "A full-stack clone inspired by Zerodha’s Kite trading platform, including a professional fintech landing page, a responsive trading dashboard frontend, and a secure backend API server handling authentication, user management, and trading data.",
            techStack: [
              "HTML5",
              "CSS3",
              "JavaScript (ES6)",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
            ],
            liveDemoLink: "https://zerodha-landing-page-web.netlify.app",
            codeLink: "https://github.com/vedantshelar/ZERODHA_LANDING_PAGE",
            features: [
              "Professional Zerodha-style fintech landing page",
              "User authentication with JWT-based login and signup",
              "Secure cookie-based session handling",
              "Trading dashboard with portfolio and stats visualization",
              "Interactive charts and graphs using Chart.js",
              "RESTful backend APIs for user and trading data",
              "Scalable backend architecture using Node.js and Express",
              "MongoDB database integration with Mongoose",
              "Responsive UI optimized for desktop and mobile devices"
            ],
            thumbnail: "/thumbanails/zerodha.png",
            screenshots: [
           "/projectScreenshots/zerodha/ss1.png",
              "/projectScreenshots/zerodha/ss2.png",
              "/projectScreenshots/zerodha/ss3.png",
              "/projectScreenshots/zerodha/ss4.png",
              "/projectScreenshots/zerodha/ss5.png",
              "/projectScreenshots/zerodha/ss6.png",
            ]
          }
               
        ],
        achievements: [
            {
                image: "/achievements/clgTopper.png",
                title: "College Topper – Diploma in Information Technology",
                description:
                  "Awarded College Topper for outstanding academic performance in Diploma in Information Technology, officially recognized by the institute with a banner display on the college premises."
              },
              {
                image: "/achievements/msbtStateLevelCompetitionCertificate.jpg",
                title: "Selected for MSBTE State-Level Project Competition",
                description:
                  "Selected from my college to represent the institute at the MSBTE state-level project competition, recognizing the quality, innovation, and real-world relevance of the project."
              },
              {
                image: "/achievements/innotraonCertificate.jpg",
                title: "Selected for State-Level Business Idea Presentation",
                description:
                  "Selected to represent my institute at a state-level business idea presentation competition, recognizing innovation, feasibility, and entrepreneurial thinking."
              },
              {
                image: "/achievements/deltaCourse.png",
                title: "Completed Full Stack Web Development Course",
                description:
                  "Successfully completed a comprehensive Full Stack Web Development course, gaining hands-on experience in building end-to-end web applications using modern technologies."
              }     
        ]
    }
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {},
  })

  export default portfolioSlice.reducer;