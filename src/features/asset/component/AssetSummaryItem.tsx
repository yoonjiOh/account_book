import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { AssetIcon, LiabilityIcon } from "@/features/ui/components/icons";
import { AssetType, AssetModel } from "@/features/asset";

interface AssetSummaryItemProps {
  type: AssetType;
  asset: AssetModel;
}

const AssetSummaryItem: React.FC<AssetSummaryItemProps> = ({
  type = AssetType.ASSETS,
  asset,
}) => {
  const navigate = useNavigate();
  const { id, name, value } = asset;
  return (
    <div
      className="flex items-center px-24 py-19 gap-16 cursor-pointer bg-white"
      role="button"
      aria-label="자산 상세 보기"
      tabIndex={0}
      onClick={() => navigate(`/detail/${type}/${id}`)}>
      {type === AssetType.ASSETS ? <AssetIcon /> : <LiabilityIcon />}

      <div className="flex flex-col">
        <span className="text-14 text-lightGray/56">{name}</span>
        <span>
          <NumericFormat
            data-testid="readonly-input-for-asset-summary"
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
