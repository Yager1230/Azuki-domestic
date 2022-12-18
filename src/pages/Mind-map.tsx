import MindMaps from "../components/MindMaps";
import MindIntroduce from "../components/MindIntroduce";
import "../styles/mindMap.scss";

export default function Mindmap() {
  return (
    <div className="mind-container">
      <div className="mind-content">
        <MindIntroduce></MindIntroduce>
        <MindMaps></MindMaps>
      </div>
    </div>
  );
}
