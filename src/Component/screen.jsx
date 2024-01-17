import { ReactComponent as Mask } from "../asset/Mask Group.svg";
import { ReactComponent as Vectortwo } from "../asset/Vector(2).svg";
import { ReactComponent as Vectorthree } from "../asset/Vector(3).svg";
import { ReactComponent as Vectorfour } from "../asset/Vector(4).svg";

function Screen() {
  return (
    <div className="screen">
      <ul class="nav justify-content-center mt-5">
        <li class="nav-item">
          <a class="nav-link active darkblue underline" href="#">
            Study
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link darkblue underline" href="#">
            Quiz
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link darkblue underline" href="#">
            Test
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link darkblue underline" href="#">
            Game
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link darkblue underline" href="#">
            Others
          </a>
        </li>
      </ul>
      <div class="nav justify-content-center mt-2">
        <Mask />
      </div>
      <div class="d-flex align-items-center justify-content-center  mt-2">
        <Vectortwo />
        <div class="nav justify-content-center mt-2 mx-5">
          <Vectorthree />
          <span className="darkblue justify-content-center mx-5 align-middle">
            <h1>01/10</h1>
          </span>
          <Vectorfour />
        </div>
        <Vectortwo />
      </div>
    </div>
  );
}

export default Screen;
