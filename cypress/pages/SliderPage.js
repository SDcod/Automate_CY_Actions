class SliderPage {
  elements = {
    sliderInput: () => cy.get("#slideMe"),
    sliderResult: () => cy.get(".coolslider").find("p").eq(1),
  };

  //actions

  dragSlider(targetValue) {
    // Why "input" instead of "change"?
    // "input" fires immediately when the slider moves.
    // "change" fires only when the user releases the slider (mouseup event), which may not work for all cases.
    this.elements.sliderInput().invoke("val", targetValue).trigger("input");

    this.elements.sliderResult().contains(`Current value: ${targetValue}`);
  }
}

export default new SliderPage();
