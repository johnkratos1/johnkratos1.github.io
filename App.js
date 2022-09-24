const input = document.getElementById("input");
const changeBtn = document.getElementById("change");
const bgColor = document.getElementById("bgColor");
const randomBtn = document.getElementById("random");

// Created an arry of 1 to 9, A to F
let rand = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

// an empty container to hold temporary value
let value = [];

// Add Event listener to the Click me Button
changeBtn.addEventListener("click", () => {
  console.log(input.value);
  // It tavke values from the Input field
  let code = input.value;
  console.log(typeof code);
  // using the Style.background Js prop and equal it to a
  // template literal to contain both the (#) and the value from the
  // input field
  bgColor.style.backgroundColor = `#${code}`;
});

// A function that generates 6-different strings
// from the [rand] created above
function sixDgt() {
  // for loop to run 6x
  for (let i = 0; i < 6; i++) {
    // assigning nun a random vaule using the length of the
    // [rand]
    let num = Math.floor(Math.random() * rand.length);
    let digit = rand[num];
    // add the randomly generated digit to [value]arry that was
    // created earlier
    value.push(digit);
  }

  // converting the [value] to 'strings' with coma included
  let convertTostring = value.toString();

  // replacing All the coma with an empty ""
  let noComaString = convertTostring.replaceAll(",", "");

  // Assigning the noComaString to the backgroundColor
  bgColor.style.backgroundColor = `#${noComaString}`;

  // To display the Randomly generated Value that
  // changes the backgroungColor
  input.value = noComaString;

  // setting the [Value] to []
  value = [];
}

// Adding an event Listener to The Random Button
randomBtn.addEventListener("click", sixDgt);
