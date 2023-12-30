import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
/* import apiicon from "../../assets/icons/apiicon.svg";*/
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
/* import netlifyicon from "../../assets/icons/netlifyicon.svg";*/
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    esp: "Hola, soy Tobias Olveira",
    en: "Hi, I'm Tobias Olveira",
  },
  subtitle: "Fullstack Developer ",
  description: {
    esp: "Soy Tobias, un desarrollador Fullstack con la meta de impulsar mi carrera y participar en proyectos inspiradores. Aquí presento mis trabajos y mi pasión por el desarrollo web. ¡Trabajemos juntos para crear soluciones digitales y dar forma al futuro!",
    en: "I'm Tobias, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        esp: "Contacto",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        esp: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Food App",
    description:
      "Una aplicación de recetas que construí como proyecto individual para el bootcamp de Henry utilizando React, Express, PostgreSQL y la API de Spoonacular. La aplicación se desarrolló en menos de un mes.",
    description_EN:
      "A recipe app that I built as the individual proyect for the Henry bootcamp with React, Express, PostgreSQl and the spoonacular API. The app was developed in under a month.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "MSC-Amoblamientos",
    description:
      "Plataforma E-Commerce excepcionalmente exitosa llamada MSC-Amoblamientos, especializada en amoblamientos comerciales. Utilizando el stack PERN, lideré la creación de esta plataforma desde cero, implementando un diseño eficiente y una arquitectura robusta. Mi contribución abarcó desde el diseño y desarrollo hasta la implementación de características clave, como la gestión de inventario, carrito de compras y sistemas de pago seguros. La plataforma no solo cumplió con las expectativas comerciales, sino que también superó las metas de conversión y proporcionó una experiencia de usuario altamente satisfactoria. Este proyecto no solo demostró mis habilidades técnicas en el desarrollo web, sino también mi capacidad para liderar equipos y gestionar proyectos complejos.",
    description_EN:
      "An exceptionally successful e-commerce platform named MSC-Amoblamientos, specialized in commercial furnishings. Utilizing the PERN stack, I led the creation of this platform from scratch, implementing an efficient design and a robust architecture. My contribution spanned from design and development to the implementation of key features such as inventory management, shopping cart, and secure payment systems. The platform not only met business expectations but also exceeded conversion goals, providing a highly satisfying user experience. This project not only showcased my technical skills in web development but also demonstrated my ability to lead teams and manage complex projects.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Rick and Morty",
    description:
      "Desarrollé de manera individual una aplicación llamada 'Rick and Morty' como proyecto durante el bootcamp de Henry. Esta aplicación utiliza tecnologías como React, Express, PostgreSQL y la API de Rick and Morty para mostrar cartas detalladas de los personajes emblemáticos de la serie. Mi enfoque durante este proyecto abarcó desde la concepción y diseño hasta la implementación de características clave, garantizando una experiencia interactiva y atractiva para los usuarios que buscan explorar y conocer más sobre los personajes de Rick and Morty.",
    description_EN:
      "I individually developed an application called 'Rick and Morty' as a project during the Henry bootcamp. This application leverages technologies such as React, Express, PostgreSQL, and the Rick and Morty API to showcase detailed cards of the iconic characters from the series. My focus during this project encompassed everything from conception and design to the implementation of key features, ensuring an interactive and engaging experience for users looking to explore and learn more about the characters of Rick and Morty.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    esp: "Más Proyectos en Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { esp: "Home", en: "Home", hash: "#home", icon: GoHome },
  { esp: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { esp: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { esp: "Acerca de mí", en: "About me", hash: "#about-me", icon: GoPerson },
  { esp: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { esp: "Aviso Legal", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { esp: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:tobiasolveira@outlook.com",
  text: "@outlook.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/tobias-olveira-52a0311b7/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Kobi96",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:tobiasolveira@outlook.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    esp: '"No es importante hacerlo bien la primera vez. Es crucial hacerlo bien la última vez."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    esp: '"La web es como un lienzo, y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Sobre mí",
  title_EN: "About me",
  description: "Algunos fragmentos de código sobre mí",
  description_EN: "A few code snippets about me",
  paragraphs_ESP: [
    {
      title: "Los circuitos de mi corazón",
      description:
        "Cuando no estoy navegando en el mundo digital, exploró el fascinante universo de la tecnología y el hardware. Los circuitos y las soldaduras son como piezas de rompecabezas para mí en una emocionante aventura.",
      icon: hardwareicon,
    },
    {
      title: "En la vía rápida de la vida",
      description:
        "Además de programar, me gusta estar en la vía rápida, en el sentido más literal de la palabra. Los autos son mi pasión, y disfruto estar en carreteras desconocidas con máquinas potentes.",
      icon: caricon,
    },
    {
      title: "La alegría de descubrir como lema de vida",
      description:
        "Mi viaje como desarrollador web es solo una parte de mi camino de vida. Vivo según el lema de que la aventura solo comienza cuando dejas atrás lo conocido. Descubrir nuevos lugares es mi forma de inspiración creativa.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    esp: "Contacto",
    en: "Contact",
  },
  description: {
    esp: "Escríbeme un mensaje y me pondré en contacto contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        esp: "Tu nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        esp: "Por favor completar con tu nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        esp: "Tu dirección de correo electrónico",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        esp: "Por favor ingresa tu correo electrónico",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        esp: "Tu asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        esp: "Por favor ingresa un asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      esp: "Tu mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      esp: "Por favor ingresa tu mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      esp: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      esp: "Estoy de acuerdo en que Tobias pueda utilizar mis datos personales (nombre y dirección de correo electrónico) para ponerse en contacto conmigo.",
      en: "I agree that Tobias may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      esp: "Al enviar esta solicitud, confirmas que has leído la política de privacidad",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    esp: "🦄 La demostración en vivo se abrirá en breve. Los servidores están siendo iniciados...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    esp: "🦄 Gracias por tu correo electrónico. Me pondré en contacto contigo lo más pronto posible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    esp: "🦄 Lamentablemente, el envío de tu correo electrónico no fue exitoso. Por favor, inténtalo de nuevo más tarde.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    esp: "Por favor, introduce tu nombre.",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    esp: "ESP",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
