import "../../styles/mind-map-detail/map-one.scss";

export default function MapOne() {
  return (
    <div>
      <h1 className="detail-title">
        愿景与价值
        <span className="slash">//</span>
      </h1>
      <div className="detail-content">
        <p className="mb-middle">
          <span className="heavy-font">我们是潮流文化的引领者。</span>
          <span className="gray-text">
            我们将以Hiphop文化作为载体，共同创造融合web3文化与互联网潮流的第三世界。滚雪球将在大家的共创下，成为国际上影响力最大的共同治理潮流IP。
          </span>
        </p>
        <p className="heavy-font value-title">价值</p>
        <ul className="value-des gray-text">
          <li>
            <span>共同治理:</span>
            每一位社区成员都拥有治理滚雪球的话语权，IP由我们共同创造，共同治理，共同拥有，并逐步形成潮流IP品牌矩阵。
          </li>
          <li>
            <span>享受过程:</span>
            不单是传统的粉丝群，而是一群志同道合的兄弟姐妹组建的潮流文化俱乐部。核心团队将持续性为社区提供资源。享受在社群的每一秒，由好的情绪激发灵感，创造更多价值。
          </li>
          <li>
            <span>以酷为本:</span>
            我们的初心是只做最酷。摒弃一切旧俗与不合时宜，做最酷的潮流原创IP，将我们创造的第三世界如滚雪球一般病毒性的侵入大众视野。
          </li>
        </ul>
      </div>
    </div>
  );
}
