import { useEffect } from "react";

import "../css/Home.css";

function Home() {
  useEffect(() => {
    let body = document.querySelector("body");
    body.style.background =
      "url('https://c4.wallpaperflare.com/wallpaper/447/404/940/dragon-ball-dragon-ball-z-anime-wallpaper-preview.jpg')";
  }, []);

  return (
    <div className="home">
      <div className="img-container">
        <img src="https://officialpsds.com/imageview/rw/yq/rwyqk4_large.png?1568918282" />
      </div>
    </div>
  );
}

export default Home;
