import "../styles/home.scss";

export default function Home() {
  return (
    <video
      className="home-video"
      loop={true}
      autoPlay={true}
      src="https://azuki-website.s3.us-west-1.amazonaws.com/beanz2.mp4"
    ></video>
  );
}
