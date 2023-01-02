import { useEffect, useRef, useState } from "react";

import "../styles/mindMapsShow.scss";
import { blockConfig } from "../consts/mind-map-config";

export default function MindMaps() {
  const blockContainer = useRef<HTMLDivElement>(null);
  const [blockWidth, setBlockWidth] = useState<number>(0);
  const [arrowClassName, setArrowClassName] = useState<string[]>(
    new Array(7).fill("arrow-hide arrow"),
  );
  const updateSize = () => {
    if (blockContainer.current) {
      const containerWidth = blockContainer.current.clientWidth;
      const widthValue = (containerWidth - 25) / 4;
      setBlockWidth(widthValue);
    }
  };

  const showArrow = (index) => {
    const arr = arrowClassName;
    arr[index] = "arrow-show arrow";
    setArrowClassName([...arr]);
  };

  const hideArrow = (index) => {
    const arr = arrowClassName;
    arr[index] = "arrow-hide arrow";
    setArrowClassName([...arr]);
  };

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });

  return (
    <div ref={blockContainer} className="blocks-container">
      {blockConfig.map(
        ({ leftConfficient, lastOne, title, ...rest }, index) => (
          <div
            onMouseEnter={showArrow.bind(null, index)}
            onMouseLeave={hideArrow.bind(null, index)}
            key={index}
            className="mind-block"
            style={{
              ...rest,
              width: `${lastOne ? 2 * blockWidth + 5 : blockWidth}px`,
              left: `${leftConfficient * blockWidth + leftConfficient * 5}px`,
            }}
          >
            <div className="title-container">
              <p className="title-num">{index + 1}</p>
              <p className="title-content">
                <span>{title}</span>
                <span className={title ? arrowClassName[index] : "arrow-hide"}>
                  →
                </span>
              </p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
