import { desktop, mobile, tablet } from 'constants';

export const scrollSection = (ref, windowSize) => {
  if (ref.current === null) return;
  const sectionPosition = ref.current.getBoundingClientRect().top;
  let scrollOffset;
  if (windowSize < tablet.width) {
    scrollOffset = mobile.scrollOffset;
  } else if (windowSize >= tablet.width && windowSize < desktop.width) {
    scrollOffset = tablet.scrollOffset;
  } else {
    scrollOffset = desktop.scrollOffset;
  }
  window.scrollBy({
    top: sectionPosition - scrollOffset,
    behavior: 'smooth',
  });
};
