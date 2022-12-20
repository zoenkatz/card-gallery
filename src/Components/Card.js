import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Card = ({ fullName, title, imageUrl, id, family }) => {
  return (
    <>
      <div className="board-card">
        <div className="board-card-info-wrapper">
          <div id={`card-info-${id}`} className="board-card-info">
            i
          </div>
        </div>
        <div className="card-image">
          <img
            src={imageUrl}
            alt="card-character-image"
            height={100}
            width={100}
          />
        </div>
        <div className="card-full-name">{fullName}</div>
      </div>
      <ReactTooltip
        anchorId={`card-info-${id}`}
        place="bottom"
        content={() => {
            return <div>
                <div>Name: {fullName}</div>
                <div>Title: {title}</div>
                <div>House: {family}</div>
            </div>
        }}
      />
    </>
  );
};

export default Card;
