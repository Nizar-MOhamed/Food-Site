import { assets } from "../../assets/assets";
import "./appDownload.css";

const AppDownload = () => {
  const { play_store, app_store } = assets;

  return (
    <div className="app-download" id="app-download">
      <p>
        For better experience download our app mobile <br />
        Tomato app
      </p>
      <div className="app-download-platforms">
        <img src={play_store} alt="" />
        <img src={app_store} alt="" />
      </div>
    </div>
  );
};
export default AppDownload;
