import { useEffect, useRef, useState } from "react";

import "../styles/mindMapsShow.scss";
import { blockConfig } from "../consts/mind-map-config";
import MindMapDetail from "./MindMapDetail";

export default function MindMaps() {
  const blockContainer = useRef<HTMLDivElement>(null);
  const [currentShowMap, setCurrentShowMap] = useState<HTMLDivElement>(null);
  const [detailFlag, setDetailFlag] = useState<boolean>(false);
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [showCancelIcon, setShowCancelIcon] = useState<boolean>(false);
  const [blockWidth, setBlockWidth] = useState<number>(0);
  const [arrowClassName, setArrowClassName] = useState<string[]>(
    new Array(7).fill("arrow-hide arrow"),
  );
  const [componentName, setComponentName] = useState(null);
  const updateSize = () => {
    if (blockContainer.current) {
      const containerWidth = blockContainer.current.clientWidth;
      const widthValue = (containerWidth - 25) / 4;
      setBlockWidth(widthValue);
    }
  };

  const showArrow = (index) => {
    arrowClassName[index] = "arrow-show arrow";
    setArrowClassName([...arrowClassName]);
  };

  const hideArrow = (index) => {
    arrowClassName[index] = "arrow-hide arrow";
    setArrowClassName([...arrowClassName]);
  };

  const hoverBlock = (index) => {
    showArrow(index);
  };

  const leaveBlock = (index) => {
    hideArrow(index);
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
      {showCancelIcon && (
        <div
          className="expand-cancel-icon"
          onClick={() => {
            setShowTitle(true);
            setShowCancelIcon(false);
            currentShowMap.className = "mind-block";
          }}
        >
          ←
        </div>
      )}
      {blockConfig.map(
        ({ leftConfficient, lastOne, title, imgSrc, ...rest }, index) => (
          <div
            onMouseEnter={hoverBlock.bind(null, index)}
            onMouseLeave={leaveBlock.bind(null, index)}
            onClick={(e) => {
              if (!title || detailFlag) {
                return;
              }
              setComponentName(index);
              setDetailFlag(true);
              const modal = e.currentTarget as HTMLDivElement;
              modal.className = "mind-block expand-detail";
              setShowTitle(false);
              setTimeout(() => {
                setShowCancelIcon(true);
              }, 500);
              setTimeout(() => {
                setDetailFlag(false);
              }, 1000);
              setCurrentShowMap(modal);
            }}
            key={index}
            className="mind-block"
            style={{
              ...rest,
              width: `${lastOne ? 2 * blockWidth + 5 : blockWidth}px`,
              left: `${leftConfficient * blockWidth + leftConfficient * 5}px`,
            }}
          >
            {showTitle && (
              <div className="title-container">
                <p className="title-num">{`0${index + 1}`}</p>
                <p className="title-content">
                  <span>{title}</span>
                  <span
                    className={title ? arrowClassName[index] : "arrow-hide"}
                  >
                    →
                  </span>
                </p>
                <img
                  style={{
                    opacity: arrowClassName[index].includes("arrow-hide")
                      ? 0.3
                      : 0.7,
                  }}
                  className="block-img arrow"
                  src={imgSrc}
                  alt=""
                />
              </div>
            )}
            {showCancelIcon && componentName === index && (
              <div className="detail-container">
                <MindMapDetail componentName={componentName}></MindMapDetail>
                <img className="detail-img" src={imgSrc} alt="" />
              </div>
            )}
          </div>
        ),
      )}
    </div>
  );
}
