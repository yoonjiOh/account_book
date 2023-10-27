import { AssetResponseDto } from "../dto/response";
import { AssetType } from "../type";

export const assetValidFilter = (asset: AssetResponseDto, type: AssetType) => {
  // 자산 리스트 중에 잘못 입력된 값은 제외합니다.
  // 잘못 입력된 값은 value 가 0 이나 음수이거나, type 이 ASSETS 가 아닙니다.
  if (type === AssetType.ASSETS) {
    return asset.amount > 0 && asset.type === AssetType.ASSETS;
  }
  // 부채 리스트 중에 잘못 입력된 값은 제외합니다.
  // 잘못 입력된 값은 value 가 양수이거나, type 이 LIABILITIES 가 아닙니다.
  if (type === AssetType.LIABILITIES) {
    return asset.amount < 0 && asset.type === AssetType.LIABILITIES;
  }

  return false;
};
