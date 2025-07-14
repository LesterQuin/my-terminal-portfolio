var before = document.getElementById("before");
var command = document.getElementById("input");
var textarea = document.getElementById("textbox");
var terminal = document.getElementById("terminal");
var git = 0;
var commands = [];

setTimeout(() => {
  printLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", handleKey);
textarea.value = "";
command.innerHTML = textarea.value;

function handleKey(e) {
  if (e.key === "Enter") {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine(`Lester Portfolio:~$ ${command.innerHTML}`, "no-animation", 0);
    router(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  } else if (e.key === "ArrowUp" && git > 0) {
    git--;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  } else if (e.key === "ArrowDown" && git < commands.length) {
    git++;
    textarea.value = commands[git] || "";
    command.innerHTML = textarea.value;
  } else if (e.keyCode === 181) {
    location.reload();
  }
}

function router(cmd) {
  switch (cmd) {
    case "help":
      printLines(help, "color2 margin", 80);
      break;
    case "about":
      printLines(about, "color2 margin", 80);
      break;
    case "social":
      printLines(social, "color2 margin", 80);
      break;
    case "projects":
      printLines(projects, "color2 margin", 80);
      break;
    case "banner":
      printLines(banner, "", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      printLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:lehzter@gmail.com">lehzter@gmail.com</a>...',
        "color2",
        80
      );
      openNewTab(email);
      break;
    case "clear":
      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      printLines(banner, "", 80);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      openNewTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      openNewTab(github);
      break;
    case "ls":
    case "cd":
      addLine("So you are a real programmer at heart ❤️. PS. It's just a website!<br>", "color2", 0);
      break;
    case "sudo":
      addLine("Woah Woah Woah!! Relax!!<br>", "color2", 0);
      break;
    case "exit":
      window.close();
      addLine("If the window doesn't close, it might be because of a safety feature!<br> Close the tab manually!", "color2", 0);
      break;
    default:
      addLine('<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>', "error", 100);
      break;
  }
}

function printLines(lines, style, delay) {
  lines.forEach((line, index) => {
    addLine(line, style, index * delay);
  });
}

function addLine(text, style, time) {
  const sanitized = text.replace(/  /g, "&nbsp;&nbsp;");
  setTimeout(() => {
    const line = document.createElement("p");
    line.innerHTML = sanitized;
    line.className = style;
    before.parentNode.insertBefore(line, before);
    window.scrollTo(0, document.body.scrollHeight);
  }, time);
}

function openNewTab(url) {
  setTimeout(() => window.open(url, "_blank"), 500);
}
