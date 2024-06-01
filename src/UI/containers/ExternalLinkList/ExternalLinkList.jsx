import React from "react";
import { ExternalLink } from "../../components";
import { externalLinksArray } from "../../../data/externalLinks";
import fileSystem from "../../../functions/FileSystem.class";

const ExternalLinkList = () => {
  return (
    <div className="external-link-list">
      {externalLinksArray.map((element) => {
        return (
          <ExternalLink
            text={element.text}
            // icon={`https://logo.clearbit.com/${element.link}`}
            icon={element.icon}
            link={element.link}
            color={element.color}
          ></ExternalLink>
        );
      })}
    </div>
  );
};

export default ExternalLinkList;
