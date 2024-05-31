import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import postgresqlicon from "../../assets/icons/postgresqlicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import reduxicon from "../../assets/icons/reduxicon.svg";
import bootstrapicon from "../../assets/icons/bootstrapicon.svg";
import javaicon from "../../assets/icons/javaicon.svg";
import auth0icon from "../../assets/icons/auth0icon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import eurekaMockup from "../../assets/img/eureka_mokup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import tailwindicon from "../../assets/icons/tailwindicon.svg";
import mongoicon from "../../assets/icons/mongoicon.svg";
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
    title: "MSC-Amoblamientos",
    description:
      "Plataforma E-Commerce excepcionalmente exitosa llamada MSC-Amoblamientos, especializada en amoblamientos comerciales. Utilizando el stack PERN, lideré la creación de esta plataforma desde cero, implementando un diseño eficiente y una arquitectura robusta. Mi contribución abarcó desde el diseño y desarrollo hasta la implementación de características clave, como la gestión de inventario, carrito de compras y sistemas de pago seguros. La plataforma no solo cumplió con las expectativas comerciales, sino que también superó las metas de conversión y proporcionó una experiencia de usuario altamente satisfactoria. Este proyecto no solo demostró mis habilidades técnicas en el desarrollo web, sino también mi capacidad para liderar equipos y gestionar proyectos complejos.",
    description_EN:
      "An exceptionally successful e-commerce platform named MSC-Amoblamientos, specialized in commercial furnishings. Utilizing the PERN stack, I led the creation of this platform from scratch, implementing an efficient design and a robust architecture. My contribution spanned from design and development to the implementation of key features such as inventory management, shopping cart, and secure payment systems. The platform not only met business expectations but also exceeded conversion goals, providing a highly satisfying user experience. This project not only showcased my technical skills in web development but also demonstrated my ability to lead teams and manage complex projects.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Trello", icon: trelloicon },
      { name: "Axios", icon: axiosicon },
      { name: "PostgreSQL", icon: postgresqlicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Bootstrap", icon: bootstrapicon },
      { name: "Auth0", icon: auth0icon },
      { name: "Redux", icon: reduxicon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://msc-amoblamientos.vercel.app/",
    githuburl: "https://github.com/AgustinMandarini/MSC-Amoblamientos",
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
    title: "Eureka",
    description:
      "Plataforma de e-learning desarrollada por un equipo multidisciplinario de profesionales apasionados y comprometidos. Con un enfoque en la colaboración y la innovación, el equipo ha creado un MVP sólido en solo 5 semanas, ofreciendo una experiencia educativa excepcional para profesores y estudiantes.",
    description_EN:
      "An e-learning platform developed by a multidisciplinary team of passionate and committed professionals. With a focus on collaboration and innovation, the team has created a solid MVP in just 5 weeks, offering an exceptional educational experience for teachers and students.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Axios", icon: axiosicon },
      { name: "Redux", icon: reduxicon },
      { name: "Tailwind", icon: tailwindicon },
      { name: "Trello", icon: trelloicon },
      { name: "Java", icon: javaicon },
    ],
    image: eurekaMockup,
    deploymenturl: "https://s14-11-m-java-e5su.vercel.app/",

    githuburl: "https://github.com/No-Country/s14-11-m-java",
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
      { name: "PostgreSQL", icon: postgresqlicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Redux", icon: reduxicon },
    ],
    image: tastyMockup,
    deploymenturl: null,

    githuburl: "https://github.com/Kobi96/PI-Food-main",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
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
        title: "PostgreSQL",
        hash: "#postgreSQL",
        icon: postgresqlicon,
        color: "#000000",
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
      {
        title: "Bootstrap",
        hash: "#bootstrap",
        icon: bootstrapicon,
        color: "#8A2BE2",
      },
      {
        title: "MongoDB",
        hash: "#mongo",
        icon: mongoicon,
        color: "#339933",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
      {
        title: "WordPress",
        hash: "#Adobe Premiere Pro",
        icon: wordpressicon,
        color: "#1572B6",
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
      title: "Mi Background",
      description:
        "Mi background está relacionado a las artes escénicas, lo que resulta atípico para la industria en la que actualmente me desempeño. Esto me ha permitido desarrollar soft skills con las cuales trabajar.",
    },
    {
      title: "Actualmente",
      description:
        "Actualmente estoy en búsqueda laboral activa y buscando proyectos web para ampliar mi stack de conocimientos.",
    },
    {
      title: "Futuro",
      description:
        "Mi objetivo principal es evolucionar hacia un rol de líder técnico, y estoy seguro de que mi combinación única de habilidades técnicas y experiencia en liderazgo me posiciona como un activo valioso para cualquier posición en la que termine.",
    },
  ],
  paragraphs_EN: [
    {
      title: "My Background",
      description:
        "My background is related to performing arts, which is atypical for the industry I currently work in. This has allowed me to develop soft skills that I can leverage in my professional endeavors.",
    },
    {
      title: "Currently",
      description:
        "I am currently actively seeking employment and looking for web projects to expand my knowledge stack.",
    },
    {
      title: "Future",
      description:
        "My primary goal is to evolve into a Tech Lead, and I am confident that my unique blend of technical prowess and leadership experience positions me as a valuable asset for any position I end up on.",
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
  noDeployment: {
    esp: "🦄 Este proyecto aún no ha sido deployado",
    en: "🦄 This project hasn't been deployed yet",
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
