import React from "react";
import { Link } from "react-router-dom";

const NeonTextLink = (props) => {
  const type = props.type;
  if (type === "internal") {
    return (
      <Link to={props.link} className="neon-text-link">
        {props.icon && (
          <div className="neon-text-link__icon">
            <img
              src={props.icon}
              alt=""
              className="neon-text-link__icon__image"
            />
          </div>
        )}
        <p className="neon-text-link__text">{props.text}</p>
      </Link>
    );
  } else if (type === "external") {
    return (
      <a href={props.link} className="neon-text-link">
        {props.icon && (
          <div className="neon-text-link__icon">
            <img
              src={props.icon}
              alt=""
              className="neon-text-link__icon__image"
            />
          </div>
        )}
        <p className="neon-text-link__text">{props.text}</p>
      </a>
    );
  }
};

export default NeonTextLink;
