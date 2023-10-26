import { ArrowUpIcon, ArrowDownIcon } from "@/components/icons";

interface ArrowToggleIconProps {
  direction: "up" | "down";
}

const ArrowToggleIcon: React.FC<ArrowToggleIconProps> = ({ direction }) => {
  return <>{direction === "up" ? <ArrowUpIcon /> : <ArrowDownIcon />}</>;
};

export default ArrowToggleIcon;
