import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "시스템 기획자",
          "개발 PM",
          "툴 개발자"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "typewriter-wrapper",
        cursorClassName: "typewriter-cursor",
      }}
    />
  );
}

export default Type;
