export const name = "sh-kim";
export const $ = (selector: string, container?: Element) => {
  const elements = Array.from(
    (container ?? document).querySelectorAll(selector)
  );

  // closure

  return {
    length() {
      return elements.length;
    },

    click(handler: EventListener) {
      elements.forEach((element) => {
        element.addEventListener("click", handler);
      });
    },
  };
};
