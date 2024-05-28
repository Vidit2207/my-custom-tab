import React from "react";
import { NeonTextLink } from "../../blocks";
import gmailIcon from "../../../assets/icons/gmail.png";

const EmailLink = (props) => {
  return (
    <NeonTextLink
      type={"external"}
      text={props.email.split("@")[0]}
      icon={gmailIcon}
      link={`https://mail.google.com/mail/u/0/?authuser=${props.email}`}
    />
  );
};

export default EmailLink;
