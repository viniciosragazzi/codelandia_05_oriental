import "./style/App.css";
import { useState } from "react";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import youtube from "./assets/youtube.svg";
import play from "./assets/play.svg";
import image from "./assets/image.png";
import Video from "./components/video";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBtn = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <div className="redes">
            <ul>
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section className="content">
          <div className="container">
            <div className="textContent">
              <h3 className="name-autor">HAYAO MIYAZAKI</h3>
              <h1>A VIAGEM DE CHIHIRO</h1>
              <p>
                Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles
                que a desobedecem são transformados em animais.
              </p>
              <div className="buttonArea">
                <a href="#" className="button firtBtn" onClick={(e)=> handleBtn()}>
                  <img src={play} alt="play" />
                  <span>Assistir agora</span>
                </a>
                <a href="#" className="button secondBtn" onClick={(e)=> handleBtn()}>
                  <span>assista o trailer</span>
                </a>
              </div>
            </div>
            <div className="imgContent">
              <img src={image} alt="image" />
            </div>
          </div>
        </section>
      </main>
      {
        isOpen ? <Video setIsOpen={setIsOpen} isOpen={isOpen} /> : null
      }
    </div>
  );
}

export default App;
