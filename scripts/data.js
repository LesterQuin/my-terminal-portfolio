const linkedin = "https://www.linkedin.com/in/lester-qui%C3%B1ones-95b012220/";
const github = "https://github.com/LesterQuin";
const facebook = "https://www.facebook.com/LesterQuin";
const instagram = "https://www.instagram.com/acether.png";
const email = "mailto:lehzter@gmail.com";

const today = new Date();

function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}

const about = [
  "<br>",
  "Hey, I'm Lester Quiñones! 👋",
  "<br>",
  "I'm a passionate Full Stack Developer focused <br>on crafting scalable and performant web applications.",
  "Experienced in both front-end and back-end technologies, <br> I bring ideas to life through clean, efficient code.",
  "I enjoy solving challenging problems <br> and love to explore new technologies.",
  "<br>",
  '📄 <a href="images/Lester_Quinones_Resume.pdf" download target="_blank">Download My Resume</a>',
  "<br>",
  "Thanks for stopping by! Hope you enjoy <br> exploring this terminal-style portfolio. 🙏🏻",
  "<br>",
];

const banner = [
  "<br>",
  `<span class="index">${convertTZ(today, "Asia/Manila")}</span>`,
  '<span class="index">Lester Quiñones</span>',
  "<br>",
  "██╗     ███████╗███████╗████████╗███████╗██████╗ ",
  "██║     ██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗",
  "██║     █████╗  ███████╗   ██║   █████╗  ██████╔╝",
  "██║     ██╔══╝  ╚════██║   ██║   ██╔══╝  ██╔═══╝ ",
  "███████╗███████╗███████║   ██║   ███████╗██║╚██╗██╗",
  "╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝╚═╝ ╚═╝╚═╝",
  "<br>",
  '<span class="color2">Welcome to my interactive portfolio terminal!</span>',
  '<span class="color2">Type</span> <span class="command">help</span> <span class="color2">to get started.</span>',
  "<br>",
];

const help = [
  "<br>",
  '👦🏻  <span class="command">about</span>       About Me',
  '🌐  <span class="command">social</span>      Social Media Links',
  '💼  <span class="command">projects</span>    View My Projects',
  '✉️  <span class="command">email</span>       Send Me an Email',
  '🧹  <span class="command">clear</span>       Clear the Terminal',
  '❓  <span class="command">help</span>        Show Help Menu',
  '🕒  <span class="command">history</span>     View Command History',
  '👋  <span class="command">exit</span>        Exit the Terminal',
  "<br>",
];

const social = [
  "<br>",
  "Feel free to click or type any platform below:",
  "<br>",
  `🔗 Linkedin:   <a href="${linkedin}" target="_blank">linkedin/lesterquinones</a>`,
  `🐱 Github:     <a href="${github}" target="_blank">github/lesterquinones</a>`,
  `📘 Facebook:   <a href="${facebook}" target="_blank">facebook/lesterquinones</a>`,
  `📷 Instagram:  <a href="${instagram}" target="_blank">instagram/acether.png</a>`,
  "<br>",
];

const projects = [
  "<br>",
  '🚚 <span class="command"><a href="https://storagemart.com.ph/" target="_blank">StorageMart</a></span>',
  '📊 <span class="command"><a href="https://www.attendance.storagemart.com.ph/" target="_blank">Attendance Monitoring</a></span>',
  '🏢 <span class="command"><a href="https://bcstechnology.com.au/" target="_blank">BCS Technology</a></span>',
  '💰 <span class="command"><a href="https://wealthlander.com.au/" target="_blank">Wealthlander</a></span>',
  '🏎 <span class="command"><a href="https://www.cameroncrickracing.com.au/" target="_blank">Cameron Crick Racing</a></span>',
  '🌐 <span class="command"><a href="https://lesterquin.github.io/MyPorfolio/" target="_blank">Portfolio Website</a></span>',
  "<br>",
  `View more on GitHub: <a href="${github}" target="_blank">github.com/LesterQuin</a>`,
  "<br>",
];
