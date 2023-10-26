import { Title } from "@/features/ui/components";
import { RegisterAssetForm } from "@/features/asset/components";

const RegisterAsset: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
      <div className="w-325">
        <Title title={"현금부터 실물 자산까지\n 직접 등록해 보세요"} />
        <RegisterAssetForm />
      </div>
    </section>
  );
};

export default RegisterAsset;
