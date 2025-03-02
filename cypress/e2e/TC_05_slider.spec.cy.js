import Homepage from "../pages/Homepage";
import SliderPage from "../pages/SliderPage";

describe("Slider Page spec", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickSliders();
  });
  it("drags the slider to start", () => {
    SliderPage.dragSlider(0);
  });
  it("drags the slider to 80", () => {
    SliderPage.dragSlider(80);
  });
  it("drags the slider to center", () => {
    SliderPage.dragSlider(50);
  });
});
