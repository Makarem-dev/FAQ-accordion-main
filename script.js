"use strict";

const collapse = (id) => {
  const textParagraphEl = document.querySelector(
    `#${id} > .FAQ-paragraph-container`
  );
  const svgEl = document.querySelector(`#${id} .button svg`);

  textParagraphEl.classList.toggle("show-paragraph");
  svgEl.classList.toggle("active-button-svg");
};
