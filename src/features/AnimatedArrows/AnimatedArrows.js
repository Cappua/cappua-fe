import React from "react";
import "./AnimatedArrows.scss";

function AnimatedArrows() {
  return (
    // <div className="arrow-container">
      <div
        className="scroll-prompt"
        scroll-prompt=""
        ng-show="showPrompt"
        // style={{ opacity: "1" }}
      >
        <div className="scroll-prompt-arrow-container">
          <div className="scroll-prompt-arrow">
            <div></div>
          </div>
          <div className="scroll-prompt-arrow">
            <div></div>
          </div>
        </div>
      </div>
    // </div>
  );
}
export default AnimatedArrows;
