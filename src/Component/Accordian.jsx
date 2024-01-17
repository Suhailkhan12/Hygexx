import { useState } from "react";
import "./accordian.css";

//At a Time One Open Accordian
const faqs = [
  {
    title: "Can education flashcards be use for all age group ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum neque, ac mollis mi. Morbi eget lacus eu augue sagittis molestie sit amet id mi. Vestibulum scelerisque dapibus condimentum. Quisque ullamcorper nisl mi, eu aliquet eros sodales in. Donec vel purus tempus, sagittis odio et, consequat massa. Nullam suscipit diam et arcu volutpat pellentesque. Duis tincidunt justo eu metus bibendum pulvinar. Sed et pharetra est. Nulla pellentesque molestie velit, vel ultrices quam rhoncus eu. Mauris semper egestas urna nec dictum.",
  },
  {
    title: "How do education flashcard work ?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum neque, ac mollis mi. Morbi eget lacus eu augue sagittis molestie sit amet id mi. Vestibulum scelerisque dapibus condimentum. Quisque ullamcorper nisl mi, eu aliquet eros sodales in. Donec vel purus tempus, sagittis odio et, consequat massa. Nullam suscipit diam et arcu volutpat pellentesque. Duis tincidunt justo eu metus bibendum pulvinar. Sed et pharetra est. Nulla pellentesque molestie velit, vel ultrices quam rhoncus eu. Mauris semper egestas urna nec dictum.",
  },
  {
    title: "Can education flashcards be use for test preperation?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel interdum neque, ac mollis mi. Morbi eget lacus eu augue sagittis molestie sit amet id mi. Vestibulum scelerisque dapibus condimentum. Quisque ullamcorper nisl mi, eu aliquet eros sodales in. Donec vel purus tempus, sagittis odio et, consequat massa. Nullam suscipit diam et arcu volutpat pellentesque. Duis tincidunt justo eu metus bibendum pulvinar. Sed et pharetra est. Nulla pellentesque molestie velit, vel ultrices quam rhoncus eu. Mauris semper egestas urna nec dictum.",
  },
];

const Accordian = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordian">
      {data.map((el, i) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordianItem>
      ))}
    </div>
  );
};

const AccordianItem = ({ num, title, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? "null" : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""} mx-5`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">
        {isOpen ? (
          <span className="display-6 ">-</span>
        ) : (
          <span className="display-6">+</span>
        )}
      </p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

const AccodianHygexx = () => {
  return (
    <>
      <h1 className="darkblue m-5 mt-5">FAQ</h1>
      <Accordian data={faqs} />
    </>
  );
};

export default AccodianHygexx;
