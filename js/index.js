const acc = document.querySelector(`[data-js="accordion"]`);
const caminhante = document.getElementsByName("caminhante");
const saltitante = document.getElementsByName("saltitante");
const resultOutput = document.querySelector(".result-output");
const resultBtn = document.querySelector(".calcular");

resultOutput.value = "T$0";
var talentos = [0];
var atualAccordionId = 0;

const closeAccordionItem = (accordionToBeClosed) => {
  const accordionHeaderId = accordionToBeClosed.dataset.accordionHeader;
  const accordionBodyToBeClosed = document.querySelector(
    `[data-accordion-body="${accordionHeaderId}"]`
  );

  accordionToBeClosed.classList.remove("actived");
  accordionBodyToBeClosed.classList.remove("actived");
};

const handleAccordionClick = (e) => {
  const accordionHeaderId = e.target.dataset.accordionHeader;
  const clickedAccordionHeader = document.querySelector(
    `[data-accordion-header="${accordionHeaderId}"]`
  );
  const accordionToBeOpened = document.querySelector(
    `[data-accordion-body="${accordionHeaderId}"]`
  );
  const accordionToBeClosed = Array.from(
    document.querySelectorAll(`[data-js="accordion-header"]`)
  )
    .filter((accordionHeader) => accordionHeader !== clickedAccordionHeader)
    .find((accordionHeader) => accordionHeader.classList.contains("actived"));

  if (!e.target.dataset.accordionHeader) {
    return;
  }

  if (accordionToBeClosed) {
    closeAccordionItem(accordionToBeClosed);
  }

  clickedAccordionHeader.classList.toggle("actived");
  accordionToBeOpened.classList.toggle("actived");
  atualAccordionId = parseInt(accordionHeaderId);
  talentos = [0];
};

const talentosCalculator = () => {
  switch (atualAccordionId) {
    case 1:
      for (let i = 0; i < caminhante.length; i++) {
        if (caminhante[i].checked) {
          talentos.push(parseInt(caminhante[i].value));
        }
        clearChecked(caminhante[i]);
      }
      break;
    case 2:
      for (let i = 0; i < saltitante.length; i++) {
        if (saltitante[i].checked) {
          talentos.push(parseInt(saltitante[i].value));
        }
        clearChecked(saltitante[i]);
      }
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;

    default:
      break;
  }

  const soma = talentos.reduce(function (soma, i) {
    return soma + i;
  });
  resultOutput.value = "T$" + soma;
  console.log("Soma: ", soma);
};

const clearChecked = (checkbox) => {
  checkbox.checked = false;
};

acc.addEventListener("click", handleAccordionClick);
resultBtn.addEventListener("click", talentosCalculator);
