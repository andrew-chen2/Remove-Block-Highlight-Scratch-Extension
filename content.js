function removeHighlightFilter() {
  const filterElements = document.querySelectorAll('filter[id^="blocklyStackGlowFilter"]');
  filterElements.forEach(filterElement => filterElement.remove());
}

removeHighlightFilter()

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      removeHighlightFilter();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
