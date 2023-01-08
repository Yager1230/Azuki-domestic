import react, { useState } from "react";

import "../styles/mind-map-detail/index.scss";

// TODO 暂时引入全部组件，后续再实现动态组件
import MapOne from "../components/min-map-detail/MapOne";
import MapTwo from "../components/min-map-detail/MapTwo";
import MapThree from "../components/min-map-detail/MapThree";
import MapFour from "../components/min-map-detail/MapFour";

const componentMap = [MapOne, MapTwo, MapThree, MapFour];

export default function MindMapDetail(props) {
  const { componentName } = props;
  const renderComponent = react.createElement(componentMap[componentName]);
  return <div>{renderComponent}</div>;
}
