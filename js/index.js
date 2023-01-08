const acc = document.querySelector(`[data-js="accordion"]`);
const caminhante = document.getElementsByName("caminhante");
const saltitante = document.getElementsByName("saltitante");
const escalador = document.getElementsByName("escalador");
const sabia = document.getElementsByName("sabia");
const aguia = document.getElementsByName("aguia");
const carneiro = document.getElementsByName("carneiro");
const leao = document.getElementsByName("leao");
const sprint = document.getElementsByName("sprint");
const maratona = document.getElementsByName("maratona");
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

  clearChecked();

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
      }
      break;
    case 2:
      for (let i = 0; i < saltitante.length; i++) {
        if (saltitante[i].checked) {
          talentos.push(parseInt(saltitante[i].value));
        }
      }
      break;
    case 3:
      for (let i = 0; i < escalador.length; i++) {
        if (escalador[i].checked) {
          talentos.push(parseInt(escalador[i].value));
        }
      }
      break;
    case 4:
      for (let i = 0; i < sabia.length; i++) {
        if (sabia[i].checked) {
          talentos.push(parseInt(sabia[i].value));
        }
      }
      break;
    case 5:
      for (let i = 0; i < aguia.length; i++) {
        if (aguia[i].checked) {
          talentos.push(parseInt(aguia[i].value));
        }
      }
      break;
    case 6:
      for (let i = 0; i < carneiro.length; i++) {
        if (carneiro[i].checked) {
          talentos.push(parseInt(carneiro[i].value));
        }
      }
      break;
    case 7:
      for (let i = 0; i < leao.length; i++) {
        if (leao[i].checked) {
          talentos.push(parseInt(leao[i].value));
        }
      }
      break;
    case 8:
      for (let i = 0; i < sprint.length; i++) {
        if (sprint[i].checked) {
          talentos.push(parseInt(sprint[i].value));
        }
      }
      break;
    case 9:
      for (let i = 0; i < maratona.length; i++) {
        if (maratona[i].checked) {
          talentos.push(parseInt(maratona[i].value));
        }
      }
      break;
    default:
      break;
  }

  const soma = talentos.reduce(function (soma, i) {
    return soma + i;
  });

  resultOutput.value = "T$" + soma;
  talentos = [0];
  clearChecked();
};

const clearChecked = () => {
  switch (atualAccordionId) {
    case 1:
      for (let i = 0; i < caminhante.length; i++) {
        caminhante[i].checked = false;
      }
      break;
    case 2:
      for (let i = 0; i < saltitante.length; i++) {
        saltitante[i].checked = false;
      }
      break;
    case 3:
      for (let i = 0; i < escalador.length; i++) {
        escalador[i].checked = false;
      }
      break;
    case 4:
      for (let i = 0; i < sabia.length; i++) {
        sabia[i].checked = false;
      }
      break;
    case 5:
      for (let i = 0; i < aguia.length; i++) {
        aguia[i].checked = false;
      }
      break;
    case 6:
      for (let i = 0; i < carneiro.length; i++) {
        carneiro[i].checked = false;
      }
      break;
    case 7:
      for (let i = 0; i < leao.length; i++) {
        leao[i].checked = false;
      }
      break;
    case 8:
      for (let i = 0; i < sprint.length; i++) {
        sprint[i].checked = false;
      }
      break;
    case 9:
      for (let i = 0; i < maratona.length; i++) {
        maratona[i].checked = false;
      }
      break;
    default:
      break;
  }
};

acc.addEventListener("click", handleAccordionClick);
resultBtn.addEventListener("click", talentosCalculator);
