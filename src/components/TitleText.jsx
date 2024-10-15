import React from 'react';

const TitleText = ({ styleName, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, children,color }) => {
  const styles = {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    textAlign: textAlign,
    color:color
    // Add any additional styles here
  };

  return (
    <h1 className={styleName} style={styles}>
      {children}
    </h1>
  );
};

export default TitleText;

