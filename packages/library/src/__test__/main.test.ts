import { describe, expect, it, vi } from "vitest";
import { $ } from "../main";

describe("MiniQuery", () => {
  it("nothing", () => {
    expect(true).toBe(true);
  });

  describe("length()", () => {
    it("returns length correctly", () => {
      const div = document.createElement("div");
      div.innerHTML = `
      <button class="btn" type="button">
        button 1
      </button>
      <button class="btn" type="button">
        button 2
      </button>
      <button class="btn" type="button">
        button 3
      </button>
      <button class="btn" type="button">
        button 4
      </button>
  
      `;
      expect($(".btn", div).length()).toBe(4);
    });
  });

  describe("click()", () => {
    it("returns length correctly", () => {
      const div = document.createElement("div");
      div.innerHTML = `
      <button class="btn" type="button">
        button 1
      </button>
      <button class="btn" type="button">
        button 2
      </button>
      <button class="btn" type="button">
        button 3
      </button>
      <button class="btn" type="button">
        button 4
      </button>
      `;

      const handler = vi.fn();
      $(".btn", div).click(handler);

      (div.querySelectorAll(".btn")[0] as HTMLElement).click();
      expect(handler).toBeCalledTimes(1);
    });
  });
});
