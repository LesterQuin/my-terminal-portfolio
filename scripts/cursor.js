let cursor;

window.onload = () => {
  initCursor();
};

// Initialize the cursor at the leftmost position
function initCursor() {
  cursor = document.getElementById('cursor');
  cursor.style.left = "0px";
  cursor.classList.add("blinking-cursor");
}

// Remove newlines
function replaceNewline(str) {
  return str.replace(/\n/g, '');
}

// Display input inside styled terminal line
function typeToLine(source, e) {
  e = e || window.event;
  const text = source.value;
  const inputLine = document.getElementById('input');
  inputLine.innerHTML = replaceNewline(text);
}

// Animate cursor movement
function moveCursor(len, e) {
  e = e || window.event;
  const keyCode = e.keyCode || e.which;
  const position = parseInt(cursor.style.left);

  if (keyCode === 37 && position >= (0 - ((len - 1) * 10))) {
    cursor.style.left = (position - 10) + "px";
  } else if (keyCode === 39 && position + 10 <= 0) {
    cursor.style.left = (position + 10) + "px";
  }
}
