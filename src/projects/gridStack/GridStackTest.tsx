import "gridstack/dist/gridstack.min.css";
import "./GridStackTest.css";

import { GridStack } from "gridstack";
import { useEffect, useRef } from "react";

export const GridStackTest = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const grid = GridStack.init(
      { 
        margin: 0,
        column: 3,
        cellHeight: '100vh',
        float: false,
        disableResize: true
      },
      gridRef.current
    );

    return () => {
      grid.destroy(false);
    };
  }, []);

  return (
    <div ref={gridRef} className="grid-stack">
      <div className="grid-stack-item" gs-w="1" gs-h="1">
        <div className="grid-stack-item-content">
          <h3>Card 1</h3>
          <p>Drag me around!</p>
        </div>
      </div>
      <div className="grid-stack-item" gs-w="1" gs-h="1">
        <div className="grid-stack-item-content">
          <h3>Card 2</h3>
          <p>I'm draggable too!</p>
        </div>
      </div>
      <div className="grid-stack-item" gs-w="1" gs-h="1">
        <div className="grid-stack-item-content">
          <h3>Card 3</h3>
          <p>Try dragging us!</p>
        </div>
      </div>
    </div>
  );
};
