import React from "react";
import "./Content.css";

const Content = ({ title = "", text = "", hyfLogo = {}, theme = {} }) => {
  return (
    <div style={{ backgroundColor: theme.colors.primary }}>
      <h2
        style={{
          fontFamily: theme.fontFamily.title,
          fontSize: theme.fontFamily.sizeTitle,
          textAlign: theme.textAlign
        }}
        className="contentTitle"
      >
        {title}
      </h2>
      <span className="contentText">{text}</span>
      <h2
        style={{
          fontFamily: theme.fontFamily.title,
          fontSize: theme.fontFamily.sizeTitle,
          textAlign: theme.textAlign
        }}
      >
        Powered by:
      </h2>
      <div
        style={{ background: theme.colors.primary }}
        className="contentFooter"
      >
        <img
          src={hyfLogo.src}
          alt={hyfLogo.alt}
          style={{
            width: theme.images.width,
            height: theme.images.height
          }}
        />
      </div>
    </div>
  );
};

export default Content;
