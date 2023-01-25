import "../../styles/mind-map-detail/map-two.scss";

export default function MapTwo() {
  return (
    <div>
      <h1 className="detail-title">
        社群福利
        <span className="slash">//</span>
      </h1>
      <div className="detail-content">
        <ul className="community-introduce">
          <li>数字化社群潮流头像。</li>
          <li>与艺人零距离、无隔阂的接触。</li>
          <li>潮流品牌实物空投。</li>
          <li>线上、线下社群活动。</li>
          <li>Livehouse、音乐节免费门票。</li>
          <li style={{ color: "gray" }}>更多的社群福利等待你的探索……</li>
        </ul>
      </div>
    </div>
  );
}
