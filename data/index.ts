import { damp } from "three/src/math/MathUtils.js";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Experience", link: "#experience" },
  { name: "Resume", link: "/cv.pdf" },
];

export const gridItems = [
  {
    id: 1,
    title: "Cultivating Client Connections with Clear Communication",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] border-2 border-primary",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 border-2 border-primary",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 border-2 border-primary",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for scalable systems and growth.",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 border-2 border-primary",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Cloud Architecture and Scalable Systems",
    description: "AWS Certification",
    className: "md:col-span-3 md:row-span-2 border-2 border-primary",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 border-2 border-primary",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 2,
    title: "LearnAI Prompts",
    des: "Dissecting and refining the intricacies of AI-generated prompts, fostering effective utilization of AI.",
    img: "/learnAi.webp",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/expressjs.svg",
      "/mongodb.svg",
    ],
    link: "https://learnaiprompts.vercel.app",
  },
  {
    id: 3,
    title: "Hoobank",
    des: "Handling finances and navigating the banking system with this app powered by NextJS.",
    img: "/hoobank.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://hoobank-rouge.vercel.app",
  },
  {
    id: 4,
    title: "Noshnest",
    des: "Offering a diverse collection of recipes and a user-friendly food menu powered by Vue and Django.",
    img: "/noshnest.webp",
    iconLists: [
      "/vuejs.svg",
      "/tail.svg",
      "/ts.svg",
      "/django.svg",
      "/gsap.svg",
    ],
    link: "https://noshnest.vercel.app",
  },
  {
    id: 5,
    title: "LinkUp",
    des: "An innovative online conference platform, leverages Clerk for secure authentication and enhances its real-time communication",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://linkup-connect.vercel.app",
  },
  {
    id: 6,
    title: "Beacon",
    des: "A career guidance web app that uses Generative AI creates personalized visual roadmaps for users",
    img: "/beacon.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/gpt-4.svg"],
    link: "https://beaconph.site",
  },
  {
    id: 7,
    title: "FAVisualizer",
    des: "Converts given regular expressions into their corresponding deterministic finite automata and presents them as visual diagrams.",
    img: "/favisualizer.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/next.svg"],
    link: "https://favisualizer.vercel.app",
  },
  {
    id: 8,
    title: "Apple Store Prototype",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://mobile-preview-psi.vercel.app",
  },
  {
    id: 9,
    title: "Deductly",
    des: "A web app that allows users to track their deductions and credits.",
    img: "/deductly/deductly.webp",
    iconLists: ["/expo.svg", "/django.svg", "/chatgpt.svg.png", "/cloudinary.svg"],
    isMobile: true,
  },
  {
    id: 10,
    title: "UP Chatbot ",
    des: "A chatbot that allows users to learn more about the University of the Philippines.",
    img: "/upchatbot.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/django.svg", "/chatgpt.svg.png"],
    link: "https://upchat.jed-edison.com/",
  },
];

export const testimonials = [
  {
    quote:
      "As class valedictorian graduate at elementary level, as young as I am, I was already equipped to create dynamic and inspiring learning environment.",
    name: "Valedictorian",
    title: "Gen. P. del Rosario Elementary School (Primary)",
  },
  {
    quote:
      "As a batch salutatorian graduate from a Science High School, I have proven to be commitment to academic inquiry, innovation, and critical thinking. ",
    name: "Salutatorian",
    title: "Toledo City Science High School",
  },
  {
    quote:
      "Pursuing undergraduate studies at UP, thrives in an academic setting synonymous with excellence in academics, rigorous research, and creative innovation.",
    name: "University Scholar and Sunlife Scholar (Junior)",
    title: "University of the Philippines Cebu",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title:
      "Fullstack Developer",
    company: "Unravyl",
    date: "(Sept 2022 - Jun 2023)",
    desc: [
      "Conducted the creation, planning, and development of the company.",
      "Pioneered in making the portfolio or the company website of the company.",
      "Assisted in making the design, making the prototype and flow of the app.",
      "Worked on website, on mobile application using react-native as well as integrating it to web app.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    techStack: ["/next.svg", "/re.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "BPOSeats HQZen",
    date: "(Dec 2023 - March 2025)",
    desc: [
      "Implemented custom framework  built upon Django REST framework",
      "Integrated Vue and Django unit tests into automated pipelines, reducing deployment failures by 80%.",
      "Assisted in developing the time and money feature, providing granular access control to optimize usage for both employees and owners.",
      "Debugged code, significantly reducing bugs and contributing to a 65% increase in system availability.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    techStack: ["/vuejs.svg", "/ts.svg", "/django.svg", "/scss.svg"],
  },
  {
    id: 3,
    title:
      "Software Developer",
    company: "Bitworks Solutions",
    date: "(March 2024 - October 2024)",
    desc: [
      "Conducted the initial planning and development phases in making an app based on client needs and wants.",
      "Integrated NextJs and and Animation Libraries to better enhance the frontend and satisfy client needs.",
      "One of the pioneers in making the design in Figma, making the prototype and flow of the app.",
      "Worked on website, on mobile application using react-native as well as integrating it to web app.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    techStack: [
      "/next.svg",
      "/ts.svg",
      "/figma.svg",
      "/tail.svg",
      "/re.svg",
      "/directus.svg",
      "/aws.svg",
    ],
  },
  {
    id: 4,
    title: "Lead Frontend Developer & Automations Engineer",
    company: "Tranches",
    date: "(Sept 2024 - Present)",
    desc: [
      "Served as the lead frontend developer for the company, overseeing the UI/UX of the application.",
      "From the initial planning, development phases, and automating workflow, I was able to create a seamless and user-friendly experience for the users and client itself.",
      "Directly communicated with the client to ensure that the app is meeting their needs and expectations.",
      "Fast development and deployment of the app, one month of development and deployment from the initial planning.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    techStack: [
      "/svelte.svg",
      "/ts.svg",
      "/djangorest.svg",
      "/tail.svg",
      "/django.svg",
      "/aws.svg",
      "/figma.svg",
    ],
  },
    {
    id: 5,
    title: "Lead Software Engineer",
    company: "Netlify",
    date: "(March 2025 - Present)",
    desc: [
      "Served as the lead frontend engineer for Netlify support system tool, overseeing the UI/UX of the application and streamlining process and method addressing client concerns.",
      "Mainly streamlining the support system of Netlify, by integrating inlined IRB commands and logs on the application.",
      "Directly communicated with the Support and Software Engineers to ensure that the app is meeting their needs and expectations.",
      "Fast development and fast learning of the frameworks used in a short amount of time, streamlining their process to 80% faster.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    techStack: [
      "/ruby.svg",
      "/rails.svg",
      "/go.svg",
      "/re.svg",
      "/humio.svg",
      "/aws.svg",
      "/figma.svg",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yunjin08",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/donaire-jed-edison-291a76282/",
  },
];
