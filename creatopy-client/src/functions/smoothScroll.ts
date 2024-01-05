export const smoothScroll = (el: string) => {
  setTimeout(() => {
    const element: HTMLElement | null = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 1);
};
