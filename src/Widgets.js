import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading }</h4>
                <p>{subtitle }</p>
            </div>
        </div>
    }

  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
          </div>
          {newsArticle("PAPA React is back", "Top news - 999 readers")}
          {newsArticle("Web3 the future of the web?", "Top news - 1039 readers")}
          {newsArticle("Tesla heits new highs", "Cars and Auto - 373 readers")}
          {newsArticle("Crypto and Blockchain development", "Crypto - 1223 readers")}
          {newsArticle("PAPA React launches new course!", "Top news - 435 readers")}
    </div>
  );
}

export default Widgets;
