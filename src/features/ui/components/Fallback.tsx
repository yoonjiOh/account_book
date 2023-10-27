import { Title } from "@/features/ui/components";

const Fallback: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Title title={"에러가 발생했습니다.\n 잠시 뒤에 재요청 해주세요"} />
    </div>
  );
};

export default Fallback;
