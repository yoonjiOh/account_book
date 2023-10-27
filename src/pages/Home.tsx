import { useNavigate, useLoaderData, redirect } from "react-router-dom";
import { TextButton } from "@/features/ui/components";
import { AssetSummaryArcodion, SummaryHeaderSection } from "@/features/asset";
import { AssetModel } from "@/features/asset/model";
import { AssetType } from "@/features/asset/type";
import { LiabilityModel } from "@/features/liability/model";

import { getAssets } from "@/features/asset/api/getAssets";
import { getLiabilities } from "@/features/liability/api/getLiabilities";

/**
 * 홈 화면을 위한 데이터를 가져옵니다.
 * @returns
 * Home 컴포넌트가 렌더링되기 전에 실행됩니다.
 * cache 는 되지 않습니다.
 * cache 를 하려면 return useQuery 를 사용해야 합니다.
 *  즉 로더는 쿼리클라이언트에 캐싱해 두는 역할을 수행합니다.
 */
export const homeLoader = async () => {
  // 자산 가져오기
  const assets = await getAssets();

  // 부채 가져오기
  const liabilities = await getLiabilities();

  // 자산도 없고, 부채도 없으면 등록 페이지로 이동합니다.
  if (assets.length === 0 && liabilities.length === 0) {
    return redirect("/register");
  }
  return { assets, liabilities };
};

/**
 * 기타자산 서비스 홈화면입니다.
 * 등록된 자산 및 부채가 있는 경우에만 진입이 가능합니다.
 * @returns
 */
const Home: React.FC = () => {
  const navigate = useNavigate();
  const { assets, liabilities } = useLoaderData() as {
    assets: AssetModel[];
    liabilities: LiabilityModel[];
  };

  const sumAssetValue = assets.reduce(
    (acc, cur) => acc + cur.value,
    0,
  ) as number;
  const sumLiabilityValue = liabilities.reduce(
    (acc, cur) => acc + cur.value,
    0,
  ) as number;
  const assetTotalValue = (sumAssetValue + sumLiabilityValue) as number;

  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
      {/* SummaryHeaderSection 컴포넌트를 사용해 자산 합계 (자산 + 부채)를 보여줍니다. */}
      <SummaryHeaderSection assetTotalValue={assetTotalValue} />

      <div className="w-full h-15 bg-regentGray/10" />

      {/* 자산 요약 영역 */}
      <AssetSummaryArcodion
        type={AssetType.ASSETS}
        totalValue={sumAssetValue}
        data={assets}
      />

      <Divider />

      {/* 부채 요약 영역 */}
      <AssetSummaryArcodion
        type={AssetType.LIABILITIES}
        totalValue={sumLiabilityValue}
        data={liabilities}
      />

      <Divider />

      <div className="py-36">
        {/* 자산 등록 버튼 */}
        <TextButton
          label="기타 자산 등록"
          onClick={() => navigate("/register")}
        />
      </div>
    </section>
  );
};

export default Home;

const Divider = () => (
  <div className="w-full px-19">
    <div className="border-b border-lightGray h-47" />
  </div>
);
