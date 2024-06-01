import React from "react";
import { SquareNeonButton } from "../../blocks";
import icon from "../../../assets/icons/chatgpt.png";


const ExternalLink = (props) => {
  return (
    <div className="external-link">
      <SquareNeonButton
        onClick={() => {
          window.location.href = props.link;
        }}
        text={props.text}
        color={props.color}
        icon={props.icon}
      ></SquareNeonButton>
    </div>
  );
};

export default ExternalLink;
