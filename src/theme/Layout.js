import React from "react";
import OriginalLayout from "@theme-original/Layout";
import HighlightKeywords from "@site/src/theme/HighlightKeywords";
import WrapTables from "@site/src/theme/WrapTables";

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <HighlightKeywords />
      <WrapTables />
    </>
  );
}
