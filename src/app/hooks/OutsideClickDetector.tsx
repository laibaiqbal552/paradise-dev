"use client";

import React from "react";

const OutsideClickDetector = (
  handler: () => void,
  enabled: boolean = false
) => {
  let domNode = React.useRef(null);

  React.useEffect(() => {
    if (!enabled) return;

    const func = (e: any) => {
      if (!(domNode.current as any)?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", func);

    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  return domNode;
};

export default OutsideClickDetector;
