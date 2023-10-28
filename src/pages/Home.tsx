import { redirect } from "react-router-dom";
import { Fallback, Navigation } from "@/features/ui/components";

import ErrorBoundary from "@/features/ui/components/ErrorBoundary";
import {
  RegisterCTAButton,
  AssetListContainer,
  LiabilityListContainer,
  TotalAssetSummaryContainer,
  getAssets,
  AssetType,
} from "@/features/asset";

/**
 * 홈 화면을 위한 데이터를 가져옵니다.
 * @returns
 * Home 컴포넌트가 렌더링되기 전에 실행됩니다.
 */
export const homeLoader = async () => {
  // 자산 가져오기
  const assets = await getAssets(AssetType.ASSETS);
  // 부채 가져오기
  const liabilities = await getAssets(AssetType.LIABILITIES);

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
  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
      <Navigation title={window.document.title} goBack={true} close={false} />
      {/* 자산 합계 영역 */}
      <ErrorBoundary fallback={<Fallback />}>
        <TotalAssetSummaryContainer />
      </ErrorBoundary>

      <ThickDivider />

      {/* 자산 요약 영역 */}
      <ErrorBoundary fallback={<Fallback />}>
        <AssetListContainer />
      </ErrorBoundary>

      <Divider />

      {/* 부채 요약 영역 */}
      <ErrorBoundary fallback={<Fallback />}>
        <LiabilityListContainer />
      </ErrorBoundary>

      <Divider />

      <div className="py-36">
        {/* 자산 등록 버튼 */}
        <RegisterCTAButton label="기타 자산 등록" />
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

const ThickDivider = () => (
  <div className="h-full w-full bg-lightGray">
    <div className="h-15"></div>
  </div>
);
