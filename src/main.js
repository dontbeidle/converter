import { latinToCyrillic, cyrillicToLatin, toWord } from "kaalin";

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
  if (converterSelectOption.value === "text") {
    clearTextFields();
    if (latinRadio.checked) {
      textFieldTwo.value = cyrillicToLatin(text);
    } else if (cyrillicRadio.checked) {
      textFieldTwo.value = latinToCyrillic(text);
    }
  } else if (converterSelectOption.value === "numbers") {
    clearTextFields();
    if (/^\d+$/.test(text) && text !== "") {
      if (latinRadio.checked) {
        textFieldTwo.value = toWord(text);
      } else if (cyrillicRadio.checked) {
        textFieldTwo.value = latinToCyrillic(toWord(text));
      }
    }
  }
};

const clearTextFields = () => {
  textFieldTwo.value = "";
};

textFieldOne.addEventListener("input", converText);
textFieldTwo.addEventListener("input", converText);
latinRadio.addEventListener("change", converText);
cyrillicRadio.addEventListener("change", converText);

// else if (converterSelectOption.value === "numbers") {
//     if (latinRadio.checked) {
//       textFieldTwo.value = cyrillicToLatin(toWord(text));
//     } else if (cyrillicRadio.checked) {
//       textFieldTwo.value = latinToCyrillic(toWord(text));
//     }
//   }
