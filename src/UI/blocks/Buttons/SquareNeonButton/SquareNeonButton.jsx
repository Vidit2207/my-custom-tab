import React from "react";

// const SquareNeonButton = (props) => {
//   const handleHover = (isHover) => {
//     const btn = document.getElementById(`${props.text}-btn`);
//     const icon = document.getElementById(`${props.text}-icon`);
//     if (isHover) {
//       btn.style.boxShadow = `0px 0px 1rem ${props.color}, inset 0px 0px 1rem ${props.color}`;
//       icon.style.filter = `drop-shadow(0px 0px 1.5rem ${props.color})`;
//     } else {
//       btn.style.boxShadow = `0px 0px 0rem ${props.color}`;
//       icon.style.filter = `drop-shadow(0px 0px 0rem ${props.color})`;
//     }
//   };

//   const handleButtonClick = () => {
//     window.location.href = props.link;
//   };
//   return (
//     <button
//       className="square-icon-button"
//       id={`${props.text}-btn`}
//       style={{ outline: `2px solid ${props.color}` }}
//       onMouseEnter={() => {
//         handleHover(true);
//       }}
//       onMouseLeave={() => {
//         handleHover(false);
//       }}
//       onClick={handleButtonClick}
//     >
//       <img
//         src={props.icon}
//         alt={props.text}
//         id={`${props.text}-icon`}
//         className={`square-icon-button__icon ${props.class}`}
//       />

//       <p
//         className="square-icon-button__name"
//         style={{ color: `${props.color}` }}
//       >
//         {props.text}
//       </p>
//     </button>
//   );
// };

const SquareNeonButton = (props) => {
  return (
    <button
      className="sn-btn"
      style={{ "--color": props.color }}
      onClick={props.onClick}
    >
      <div className="sn-btn__icon">
        <img src={props.icon} alt="" className="sn-btn__icon__image" />
      </div>

      <p className="sn-btn__text">{props.text}</p>
    </button>
  );
};
export default SquareNeonButton;
