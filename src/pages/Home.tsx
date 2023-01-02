import "../styles/home.scss";
import homeBgSrc from "../static/img/home-page.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <img className="home-page" src={homeBgSrc} alt="" />
    </div>
  );
}
