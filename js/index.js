const acc = document.querySelector(`[data-js="accordion"]`);
const caminhante = document.querySelector(`[data-sections="caminhante"]`);
const checkedCheckbox = document.getElementsByName("caminhante");
const resultBtn = document.querySelector(".calcular");

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
};

acc.addEventListener("click", handleAccordionClick);
resultBtn.addEventListener("click", () => {
  const talentos = [];

  for (let i = 0; i < checkedCheckbox.length; i++) {
    if (checkedCheckbox[i].checked) {
      console.log(checkedCheckbox[i].value);
      talentos.push(parseInt(checkedCheckbox[i].value));
    }
  }

  const soma = talentos.reduce(function (soma, i) {
    return soma + i;
  });
  console.log(soma);
});

/*
if(e.classList.contains('checked')) {
        console.log(e.attributes.value.value)
      }

const checkboxId = e.target.dataset.caminhanteId;

  const clickedCheckbox = document.querySelector(
    `[data-caminhante-id="${checkboxId}"]`
  );

  clickedCheckbox.classList.toggle("checked");

 */
