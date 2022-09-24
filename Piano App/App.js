// buttons
const key1 = document.getElementById("key-1");
const key2 = document.getElementById("key-2");
const key3 = document.getElementById("key-3");
const key4 = document.getElementById("key-4");
const key5 = document.getElementById("key-5");
const key6 = document.getElementById("key-6");
const key7 = document.getElementById("key-7");
const key8 = document.getElementById("key-8");

const dol = new Audio("./tunes/do low.mp3");
const re = new Audio("./tunes/re.mp3");
const mi = new Audio("./tunes/mi.mp3");
const fa = new Audio("./tunes/fa.mp3");
const sol = new Audio("./tunes/sol.mp3");
const la = new Audio("./tunes/la.mp3");
const si = new Audio("./tunes/si.mp3");
const doh = new Audio("./tunes/do hi.mp3");

key1.addEventListener("click", () => {
  dol.play();
});
key2.addEventListener("click", () => {
  re.play();
});
key3.addEventListener("click", () => {
  mi.play();
});
key4.addEventListener("click", () => {
  fa.play();
});
key5.addEventListener("click", () => {
  sol.play();
});
key6.addEventListener("click", () => {
  la.play();
});
key7.addEventListener("click", () => {
  si.play();
});
key8.addEventListener("click", () => {
  doh.play();
});

// keypress Assignment
document.addEventListener(
  "keypress",
  (event) => {
    let name = event.key;
    let code = event.code;
    // console.log(`key pressed ${name} \r\n key code value: ${code}`);
    if (name === "a") {
      dol.play();
      return;
    }
    if (name === "s") {
      re.play();
      return;
    }
    if (name === "d") {
      mi.play();
      return;
    }
    if (name === "f") {
      fa.play();
      return;
    }
    if (name === "g") {
      sol.play();
      return;
    }
    if (name === "h") {
      la.play();
      return;
    }
    if (name === "j") {
      si.play();
      return;
    }
    if (name === "k") {
      doh.play();
      return;
    }
  },
  false
);
