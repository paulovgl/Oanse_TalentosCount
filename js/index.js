var acc = document.querySelector(`[data-js="accordion"]`);

acc.addEventListener("click", (e) => {
  const accordionHeaderId = e.target.dataset.accordionHeader;
  const accordionToBeOpened = document.querySelector(
    `[data-accordion-body="${accordionHeaderId}"]`
  );
  
  accordionToBeOpened.classList.toggle("actived");
});
