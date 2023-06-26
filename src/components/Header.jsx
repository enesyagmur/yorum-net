import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <div className="headerLogo">
          <div>logo</div>
          <p>yorumNet</p>
        </div>

        <p>Yorumlar</p>
        <p>Trend 100</p>
      </div>

      <div className="headerRight">
        <div className="acountButton">
          <p>Giriş Yap</p> / <p>Üye Ol</p>
        </div>
        <p className="writeCommentButton">+ Yorum Yaz</p>
      </div>
    </div>
  );
};

export default Header;
