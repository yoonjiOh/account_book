import { ArrowUpIcon, ArrowDownIcon } from "@/features/ui/components/icons";

interface ArrowToggleIconProps {
  direction: "up" | "down";
}

const ArrowToggleIcon: React.FC<ArrowToggleIconProps> = ({ direction }) => {
  return <>{direction === "up" ? <ArrowUpIcon /> : <ArrowDownIcon />}</>;
};

export default ArrowToggleIcon;
