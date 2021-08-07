import React from "react";

function Box({ title, children, footer}) {
  return (
    <div className="box-border">
      <h1 className="box-title neon">
        {title}
      </h1>
      <div className="box">
        <div className="box-content">
          <div>
            {children}
          </div>
        </div>
      </div>
      <div className="box-footer">
        <span className="box-footer-text">
          {footer || 'ngraton.dev'}
        </span>
      </div>
    </div>
  );
}

export default Box;