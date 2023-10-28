import React from "react";

interface ArcodionDetailProps {
  children?: React.ReactNode;
  isExpanded?: boolean;
}

const ArcodionDetail: React.FC<ArcodionDetailProps> = ({
  children,
  isExpanded,
}) => {
  if (!isExpanded) return null;
  return <div data-testid="arcodion-detail">{children}</div>;
};

export default ArcodionDetail;
