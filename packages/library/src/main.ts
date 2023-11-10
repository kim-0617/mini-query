export const name = "sh-kim";

class MiniQuery {
  private elements: Element[];

  constructor(selector: string, container?: Element) {
    this.elements = Array.from(
      (container ?? document).querySelectorAll(selector)
    );
  }

  length() {
    return this.elements.length;
  }

  click(handler: EventListener) {
    this.elements.forEach((element) => {
      element.addEventListener("click", handler);
    });
  }
}

export const $ = (selector: string, container?: Element) => {
  return new MiniQuery(selector, container);
};
