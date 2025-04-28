import { latinToCyrillic, cyrillicToLatin } from "kaalin";

const converterSelectOption = document.getElementById(
  "converter-select-option"
);
const textFieldOne = document.getElementById("text-field-one");
const textFieldTwo = document.getElementById("text-field-two");
const latinRadio = document.getElementById("latin");
const cyrillicRadio = document.getElementById("cyrillic");

latinRadio.checked = true;

const converText = () => {
  const text = textFieldOne.value;

  if (latinRadio.checked) {
    textFieldTwo.value = cyrillicToLatin(text);
  } else if (cyrillicRadio.checked) {
    textFieldTwo.value = latinToCyrillic(text);
  }
};

textFieldOne.addEventListener("input", converText);
textFieldTwo.addEventListener("input", converText);
cyrillicRadio.addEventListener("change", converText);
latinRadio.addEventListener("change", converText);
