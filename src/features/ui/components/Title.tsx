import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="font-semibold align-text-top text-20 leading-28 whitespace-pre-line">
      {title}
    </h1>
  );
};

export default Title;