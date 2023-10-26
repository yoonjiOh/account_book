import { NumericFormat } from "react-number-format";
import { AssetIcon, LiabilityIcon } from "@/components/icons";

interface AssetSummaryItemProps {
  type: "ASSETS" | "LIABILITIES";
  assetName: string;
  assetValue: number;
}

const AssetSummaryItem: React.FC<AssetSummaryItemProps> = ({
  type = "ASSETS",
  assetName,
  assetValue,
}) => {
  return (
    <div className="flex items-center px-24 py-19 gap-16">
      {type === "ASSETS" ? <AssetIcon /> : <LiabilityIcon />}

      <div className="flex flex-col">
        <span className="text-14 leading-20 text-lightGray/56">
          {assetName}
        </span>
        <span>
          <NumericFormat
            className="w-full outline-none text-18 leading-26 font-bold text-start"
            thousandSeparator=","
            suffix="원"
            value={assetValue}
            readOnly={true}
          />
        </span>
      </div>
    </div>
  );
};

export default AssetSummaryItem;
