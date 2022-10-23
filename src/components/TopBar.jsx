import "./topbar.css";
import {
  Envlope,
  Fb,
  Youtube,
  Vk,
  Instagram,
  Whatsup,
  Telegram,
} from "../svg/svgs";

export const TopBar = () => {
  return (
    <div className="topbar__wrapper wide">
      <div className="topbar__container">
        <div className="topbar__block">
          <a href="mailto:annaregent8@gmail.com">
            <Envlope color="white" />
            annaregent8@gmail.com
          </a>
        </div>
        <div className="topbar__block socials">
          <a href="http://www.youtube.com/c/annaregent">
            <Youtube color="white" />
          </a>
          <a href="https://t.me/annaregent">
            <Telegram color="white" />
          </a>
          <a href="https://chat.whatsapp.com/KGTQC1xynWMBm2ylWNgIf2">
            <Whatsup color="white" />
          </a>
          <a href="https://www.facebook.com/annaregent1.8">
            <Fb color="white" />
          </a>
          <a href="https://www.instagram.com/annaregent8/">
            <Instagram color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};
