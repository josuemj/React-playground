interface LabelColor {
  backgroundColor: string;
  onHoverColor: string;
  textColor: string;
}

export const labelColors: Record<string, LabelColor> = {
  setState: {
    backgroundColor: "rgb(100, 200, 255)",
    onHoverColor: "rgb(55, 141, 194)",
    textColor: "black",
  },
  foundational: {
    backgroundColor: "rgb(200, 100, 255)",
    onHoverColor: "rgb(180, 80, 240)",
    textColor: "white",
  },
  fetch: {
    backgroundColor: "rgb(100, 255, 150)",
    onHoverColor: "rgb(12, 210, 75)",
    textColor: "black",
  },
  data: {
    backgroundColor: "rgb(255, 180, 100)",
    onHoverColor: "rgb(197, 153, 109)",
    textColor: "black",
  },
  API: {
    backgroundColor: "rgb(150, 150, 255)",
    onHoverColor: "rgb(65, 65, 220)",
    textColor: "white",
  },
  JSON: {
    backgroundColor: "rgb(255, 100, 100)",
    onHoverColor: "rgb(194, 25, 25)",
    textColor: "white",
  },
};
