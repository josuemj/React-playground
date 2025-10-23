interface LabelColor {
  backgroundColor: string;
  onHoverColor: string;
  textColor: string;
}

export const labelColors: Record<string, LabelColor> = {
  te: {
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
    onHoverColor: "rgb(17, 91, 21)",
    textColor: "white",
  },
  setTimeout: {
    backgroundColor: "rgba(236, 51, 51, 1)",
    onHoverColor: "rgb(116, 5, 5)",
    textColor: "white",
  },
  setState: {
    backgroundColor: "rgb(255, 150, 50)",
    onHoverColor: "rgb(204, 102, 0)",
    textColor: "black",
  },
  useEffect: {
    backgroundColor: "rgb(16, 75, 35)",
    onHoverColor: "rgb(20, 136, 78)",
    textColor: "white",
  },
  math: {
    backgroundColor: "rgb(213, 0, 0)",
    onHoverColor: "rgb(184, 78, 78)",
    textColor: "white",
  },
  style: {
    backgroundColor: "rgb(95, 0, 155)",
    onHoverColor: "rgb(105, 74, 176)",
    textColor: "white",
  },
  Time: {
    backgroundColor: "rgb(36, 52, 195)",
    onHoverColor: "rgb(131, 106, 189)",
    textColor: "white",
  },
  Design: {
    backgroundColor: "rgb(89, 10, 10)",
    onHoverColor: "rgb(17, 91, 21)",
    textColor: "white",
  },
  Layout: {
    backgroundColor: "rgb(31, 32, 105)",
    onHoverColor: "rgb(17, 91, 21)",
    textColor: "white",
  },
  game: {
    backgroundColor: "rgb(255, 204, 102)",
    onHoverColor: "rgb(255, 153, 51)",
    textColor: "black",
  },
  board: {
    backgroundColor: "rgb(102, 204, 255)",
    onHoverColor: "rgb(51, 153, 255)",
    textColor: "black",
  },
  strategy: {
    backgroundColor: "rgb(255, 153, 153)",
    onHoverColor: "rgb(255, 102, 102)",
    textColor: "black",
  },
  canvas: {
    backgroundColor: "rgb(153, 255, 153)",
    onHoverColor: "rgb(102, 255, 102)",
    textColor: "black",
  },
};
