import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <video
        className="home-video"
        playsInline={true}
        loop={true}
        muted={true}
        autoPlay={true}
      >
        <source
          src="https://azuki-website.s3.us-west-1.amazonaws.com/beanz2.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}
