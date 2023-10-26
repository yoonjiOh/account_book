import { useNavigate } from "react-router-dom";
import { TextButton } from "@/features/ui/components";
import {
  AssetSummaryArcodion,
  SummaryHeaderSection,
} from "@/features/asset/components";

/**
 * 기타자산 서비스 홈화면입니다.
 * 등록된 자산 및 부채가 있는 경우에만 진입이 가능합니다.
 * @returns
 */
const Home: React.FC = () => {
  const navigate = useNavigate();

  const assetTotalValue = 25000000;
  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
      {/* SummaryHeaderSection 컴포넌트를 사용해 자산 합계 (자산 + 부채)를 보여줍니다. */}
      <SummaryHeaderSection assetTotalValue={assetTotalValue} />

      <div className="w-full h-15 bg-regentGray/10" />

      {/* 자산 요약 영역 */}
      <AssetSummaryArcodion type="ASSETS" totalValue={29000000} />

      <Divider />

      {/* 부채 요약 영역 */}
      <AssetSummaryArcodion type="LIABILITIES" totalValue={29000000} />

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
