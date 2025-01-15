import { MOBILE, TABLET, DESKTOP } from 'constants';

export const scrollIntoView = (ref, windowSize) => {
  if (ref.current === null) return;
  const sectionPosition = ref.current.getBoundingClientRect().top;
  let scrollOffset;
  if (windowSize < TABLET.vw_width) {
    scrollOffset = MOBILE.scrollOffset;
  } else if (windowSize >= TABLET.vw_width && windowSize < DESKTOP.vw_width) {
    scrollOffset = TABLET.scrollOffset;
  } else {
    scrollOffset = DESKTOP.scrollOffset;
  }
  window.scrollBy({
    top: sectionPosition - scrollOffset,
    behavior: 'smooth',
  });
};
