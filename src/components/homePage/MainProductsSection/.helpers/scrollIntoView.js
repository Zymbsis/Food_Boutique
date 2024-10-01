export const scrollSection = (ref, windowSize) => {
  if (ref.current === null) return;
  const sectionPosition = ref.current.getBoundingClientRect().top;
  window.scrollBy({
    top: sectionPosition - (windowSize < 768 ? 74 : 96),
    behavior: 'smooth',
  });
};
