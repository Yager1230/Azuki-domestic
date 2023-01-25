import react from "react";

import "../styles/mind-map-detail/index.scss";

// TODO 暂时引入全部组件，后续再实现动态组件
import MapOne from "../components/min-map-detail/MapOne";
import MapTwo from "../components/min-map-detail/MapTwo";
import MapThree from "../components/min-map-detail/MapThree";

const componentMap = [MapOne, MapTwo, MapThree];

export default function MindMapDetail(props) {
  const { componentName, imgSrc } = props;
  const renderComponent = react.createElement(componentMap[componentName]);
  return <div>{renderComponent}</div>;
}
