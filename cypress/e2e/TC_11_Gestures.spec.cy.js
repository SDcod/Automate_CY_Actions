import Homepage from "../pages/Homepage";

describe("Gestures Suite", () => {
  beforeEach(() => {
    cy.visit("/");
    Homepage.clickGestures();
  });

  it("drag around", () => {
    cy.get("#moveMeHeader").trigger("mousedown");
    cy.get("#moveMeHeader").trigger("mousemove", {
      clientX: 800,
      clientY: 400,
    });
    cy.get("#moveMeHeader").trigger("mouseup");
  });

  it("drag and drop", () => {
    const dataTransfer = new DataTransfer();
    cy.get("#div1").trigger("dragstart", { dataTransfer });
    cy.get("#div2").trigger("drop", { dataTransfer });
    cy.get("#div2").find("img[id='dragMe']");
  });

  it.only("drag navigation map", () => {
    cy.get(".mk-map-node-element").scrollIntoView();
    cy.wait(4000);
    cy.get(".mk-map-node-element")
      .realMouseDown({ position: "center" })
      .realMouseMove(0, 100)
      .realMouseUp();
  });
});
