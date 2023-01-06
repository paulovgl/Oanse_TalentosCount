var acc = document.querySelector(`[data-js="accordion"]`);

acc.addEventListener("click", (e) => {
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

  if (accordionToBeClosed) {
    const accordionHeaderId = accordionToBeClosed.dataset.accordionHeader;
    const accordionBodyToBeClosed = document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`);

    accordionToBeClosed.classList.remove("actived");
    accordionBodyToBeClosed.classList.remove("actived");
  }

  clickedAccordionHeader.classList.toggle("actived");
  accordionToBeOpened.classList.toggle("actived");
});
