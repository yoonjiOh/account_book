import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { AssetIcon, LiabilityIcon } from "@/features/ui/components/icons";
import { AssetType } from "@/features/asset/type";
import { AssetModel } from "@/features/asset/model";
import { LiabilityModel } from "@/features/liability/model";

interface AssetSummaryItemProps {
  type: AssetType;
  asset: AssetModel | LiabilityModel;
}

const AssetSummaryItem: React.FC<AssetSummaryItemProps> = ({
  type = AssetType.ASSETS,
  asset,
}) => {
  const navigate = useNavigate();
  const { id, name, value } = asset;
  return (
    <div
      className="flex items-center px-24 py-19 gap-16"
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/detail/${id}`)}>
      {type === AssetType.ASSETS ? <AssetIcon /> : <LiabilityIcon />}

      <div className="flex flex-col">
        <span className="text-14 text-lightGray/56">{name}</span>
        <span>
          <NumericFormat
            className="w-full outline-none text-18 font-bold text-start"
            thousandSeparator=","
            suffix="원"
            value={value}
            readOnly={true}
          />
        </span>
      </div>
    </div>
  );
};

export default AssetSummaryItem;
