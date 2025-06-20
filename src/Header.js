import "./Header.css";
import ImageHeader from "./images/stickman_laying.webp";

function Header() {
    return (
        <div class="imgDiv">
            <img class="imgClass" src={ImageHeader} alt="was supposed to have" />
        </div>
    );
}

export default Header;