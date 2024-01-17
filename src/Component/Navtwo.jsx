import { ReactComponent as Vectorfive } from "../asset/Vector(5).svg";
import { ReactComponent as Frame } from "../asset/Frame 41.svg";

function Navtwo() {
  return (
    <>
      <div class="d-flex justify-content-between align-items-center m-5">
        <Frame />
        <div className="d-flex">
          <Vectorfive />
          <h1 className="mx-3 darkblue">Create Flashcard</h1>
        </div>
      </div>
    </>
  );
}

export default Navtwo;
