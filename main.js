import "./style.css";

/**
 * Function that returns either an element or null given a valid query string
 * @param {string} query
 * @return {HTMLElement | null}
 */
const $ = (query) => document.querySelector(query);

const $app = $("#app");
const $changeColorButton = $("button");
const $h2 = $("h2");

if (!$app) throw new Error("No app id found");

$changeColorButton.addEventListener("click", () => {
  const hexColor = getHexColor();
  $h2.innerHTML = `Current color: ${hexColor}`;
  $app.style.backgroundColor = hexColor;
});

/**
 * Generates a random integer given the max value
 * @param {number} number - The max value that a random number can be
 * @returns {number}
 */
function getRandomNumber(number = 10) {
  return Math.floor(Math.random() * number);
}

/**
 *  Generates a random Hexadecimal color string with a given number of digits (3 or 6).
 * @param {number}  [digits=6] - The number of digits for the Hex color (Must be 3 or 6).
 * @returns {string} A string that represents a valid Hexadecimal color
 * @throws {Error} If the provided digits is not 3 or 6.
 */
function getHexColor(digits = 6) {
  if (digits !== 6 && digits !== 3)
    throw new Error("No valid hex string digits");

  const HEX_CHARACTERS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexColor = "#";

  for (let i = 0; i < digits; i++) {
    hexColor += HEX_CHARACTERS[getRandomNumber(HEX_CHARACTERS.length)];
  }
  return hexColor;
}
