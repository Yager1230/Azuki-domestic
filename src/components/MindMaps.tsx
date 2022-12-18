import { useEffect, useRef, useState } from "react";

import "../styles/mindMapsShow.scss";

const blockConfig = [
  { height: "360px", top: "5px", leftConfficient: 0 },
  { height: "224px", top: "5px", leftConfficient: 1 },
  { height: "360px", top: "5px", leftConfficient: 2 },
  { height: "360px", top: "5px", leftConfficient: 3 },
  { height: "236px", top: "370px", leftConfficient: 0 },
  { height: "372px", top: "234px", leftConfficient: 1 },
  { height: "236px", top: "370px", leftConfficient: 2, lastOne: true },
];

export default function MindMaps() {
  const blockContainer = useRef<HTMLDivElement>(null);
  const [blockWidth, setBlockWidth] = useState<number>(0);
  const updateSize = () => {
    if (blockContainer.current) {
      const containerWidth = blockContainer.current.clientWidth;
      const widthValue = (containerWidth - 25) / 4;
      setBlockWidth(widthValue);
    }
  };
  useEffect(() => {
    updateSize();
    window.addEventListener("resize", () => {
      updateSize();
    });
  });

  return (
    <div ref={blockContainer} className="blocks-container">
      {blockConfig.map(({ leftConfficient, lastOne, ...rest }, index) => (
        <div
          key={index}
          className="mind-block"
          style={{
            ...rest,
            width: `${lastOne ? 2 * blockWidth + 5 : blockWidth}px`,
            left: `${
              leftConfficient * blockWidth + (leftConfficient + 1) * 5
            }px`,
          }}
        ></div>
      ))}
    </div>
  );
}
