const linkedin = "https://www.linkedin.com/in/ryan-qui%C3%B1ones-b7a274176/";
const github = "https://github.com/ryanquin";
const email = "mailto:ryanquin.02@gmail.com";
var today = new Date();

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

about = [
  "<br>",
  "Hey, I'm Ryan Quiñones! 👋",
  "<br>",
  "Hi! My name is Ryan, and I am a passionate Full Stack Developer. My experience in web",
  "development has given me a strong foundation in both front-end and back-end",
  "technologies. During my career, I have had the chance to work on multiple projects from",
  "start to finish. I am adept at problem-solving and is always eager to learn and adapt to",
  "new technologies. I am looking to join a company that values innovation, collaboration,",
  "and continuous learning and am confident that my enthusiasm and drive will help me",
  "succeed in any role that leverages my passion for technology.",
  "<br>",
  "Hope you explore and enjoy this website! 🙏🏻",
  "<br>",
];

banner = [
  "<br>",
  '<span class = "index">' +
    String(convertTZ(today, "Asia/Manila")) +
    "</span>",
  '<span class="index">Ryan Quinones </span>',
  "<br>",
  "██████╗   ██╗  ██╗    ██╗    ███╗  ██╗",
  "██╔══██╗  ╚██╗██╔╝   ████╗   ████╗ ██║",
  "██████╔╝   ╚███╔╝   ██╔███║  ██╔██╗██║",
  "██╔══██╗    ██║     ██║ ██║  ██║╚████║",
  "██║  ██║    ██║     ██║  ██║ ██║ ╚══██║",
  "<br>",
  '<span class="color2">Welcome to my Portfolio Website..</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
  // '<span class="color2"></span>',
  "<br>",
];

help = [
  "<br>",
  '👦🏻  <span class="command">About</span>          About Me',
  '🌏  <span class="command">Social</span>         Display social networks',
  '🏗  <span class="command">Projects</span>       View coding projects',
  '📧  <span class="command">Email</span>          Reach me through email',
  '🧹  <span class="command">Clear</span>          Clear the terminal',
  '❓  <span class="command">Help</span>           Open the help menu',
  '🕰  <span class="command">History</span>        View command history',
  '👋  <span class="command">Exit</span>           Close the tab and exit',
  "<br>",
];

social = [
  "<br>",
  "Enter the name of any of the following or simply click the links...",
  "<br>",
  'Linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/ryanquinones' +
    "</a>",
  'Github         <a href="' +
    github +
    '" target="_blank">github/ryanquinones' +
    "</a>",
  "<br>",
];

projects = [
  "<br>",
  '<span class="command">1. Terminal Like Portfolio Website</span>',
  "<br>",
  "<br>",
  '<span class="command">2. My Old Portfolio Website',
  "<br>",
  "<br>",
  '<span class="command">3. My Main Portfolio Website',
  "<br>",
  'Click the following links to access all my projects: <a href = "https://github.com/ryanquin" target="_blank">(Github)</a>',
  "<br>",
];
