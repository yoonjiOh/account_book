import ArcodionSummary from "./ArcodionSummary";
import ArcodionSummaryDetail from "./ArcodionDetail";

interface ArcodioMainProps {
  children: React.ReactNode;
}
/**
 * 아코디언 컴포넌트입니다.
 * 기타 자산 조회 페이지에서 사용됩니다.
 * children 으로 들어가는 컴포넌트가 다양해질 가능성이 높아보여 composition 방식으로 구현했습니다.
 * */
const ArcodionMain: React.FC<ArcodioMainProps> = ({ children }) => {
  return <section className="w-full bg-white">{children}</section>;
};

export const Arcodion = Object.assign(ArcodionMain, {
  ArcodionSummary: ArcodionSummary,
  ArcodionDetail: ArcodionSummaryDetail,
});
