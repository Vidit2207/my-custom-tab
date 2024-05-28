import React, { Fragment, useEffect, useState } from "react";
import { EmailLink } from "../../components";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch("/emails.txt")
      .then((res) => res.text())
      .then((data) => {
        setEmails(data.split("\n"));
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Fragment>
      <h2 className="emails__heading">Gmail Links</h2>
      <ul className="emails">
        {emails.map((email, index) => (
          <EmailLink key={index} email={email}></EmailLink>
        ))}
      </ul>
    </Fragment>
  );
};

export default EmailList;
