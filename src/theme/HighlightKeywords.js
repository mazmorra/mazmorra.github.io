import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import { keywordsES, keywordsEN } from "@site/src/theme/keywords";

const HighlightKeywords = () => {
  const location = useLocation();
  useEffect(() => {
    const highlightText = () => {
      const article = document.querySelector("article");
      if (!article) return;
    
      const targetDiv = article.querySelector("div");
      if (!targetDiv) return;
    
      const elements = targetDiv.querySelectorAll("p, li");
    
      const allKeywords = [...keywordsES, ...keywordsEN];
      allKeywords.sort((a, b) => b.length - a.length);
    
      elements.forEach((el) => {
        let text = el.innerHTML;
        allKeywords.forEach((word) => {
          const regex = new RegExp(`\\b(${word}s?)\\b`, "gi");
          text = text.replace(regex, '<span class="highlighted-keyword">$1</span>');
          const regexAccented = new RegExp(`(${word}s?)`, "gi");
          text = text.replace(regexAccented, '<span class="highlighted-keyword">$1</span>');
        });
        el.innerHTML = text;
      });
    };
    
    highlightText();
  }, [location.pathname]);

  return null;
};

export default HighlightKeywords;
