import { ReactComponent as HomeLogo } from "../asset/Vector.svg";
import { ReactComponent as Arrowone } from "../asset/Vector1.svg";

function Path() {
  return (
    <>
      <div className="d-flex flex-row m-4">
        <span className="p-2">
          <HomeLogo />
        </span>
        <span className="p-2">
          <Arrowone />
        </span>
        <span className="p-2">FlashCard</span>
        <span className="p-2">
          <Arrowone />
        </span>
        <span className="p-2">Mathmatics</span>
        <span className="p-2">
          <Arrowone />
        </span>
        <span className="p-2 darkblue">Relation and function</span>
      </div>
      <h2 className="m-4 darkblue">Relation and Function(Mathmatics)</h2>
    </>
  );
}

export default Path;
