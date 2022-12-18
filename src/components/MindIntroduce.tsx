import { I18nEnum } from "consts/i18n";
import "../styles/mindIntroduce.scss";

export default function MindIntroduce() {
  return (
    <div className="container">
      <div className="word-part">
        <h3 className="title-container">
          <span>{I18nEnum.MIND_MAP}</span>
          <span className="slash">//</span>
        </h3>
        <div className="description-container">{I18nEnum.MIND_MAP_DES}</div>
      </div>
      <div className="img-container">
        <img
          className="summarize-image"
          src="https://www.azuki.com/gmanifesto2.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}
