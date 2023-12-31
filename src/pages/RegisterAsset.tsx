import { Fallback, Navigation, Title } from "@/features/ui/components";
import { RegisterAssetForm } from "@/features/asset";
import { useLocation, useSearchParams } from "react-router-dom";
import {
  useGetAsset,
  useCreateAsset,
  useUpdateAsset,
} from "@/features/asset/api/";
import { SubmitHandler } from "react-hook-form";
import { useEffect, useRef } from "react";
import { mapToAssetRequetDto } from "@/features/asset/model";
import { CreateAssetRequestDTO } from "@/features/asset/dto/request";
import { IFormInput } from "@/features/asset/component/RegisterAssetForm";
import { AssetType } from "@/features/asset/type";
import ErrorBoundary from "@/features/ui/components/ErrorBoundary";

const RegisterAsset: React.FC = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const submitButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visualViewport = window.visualViewport;
    const initialInnerHeight = window.innerHeight;

    // 키보드가 올라갈때 submit button 을 위로 올립니다.
    // initialInnerHeight 는 키보드가 올라가기 전의 높이입니다.
    // 처음 렌더링 될 때 화면의 높이 - 현재 화면 높이 - 키보드의 높이 만큼 submit button 을 위로 올립니다.
    const applyButtonTransform = () => {
      const visualViewport = window.visualViewport;
      if (!visualViewport || !submitButtonRef.current) return;

      const transformYheight =
        initialInnerHeight - visualViewport.height - visualViewport.offsetTop;
      submitButtonRef.current.style.transition = "transform 0.1s";
      submitButtonRef.current.style.transform = `translateY(-${transformYheight}px)`;
    };

    applyButtonTransform();

    const handleViewportChanges = () => {
      if (
        // 키보드가 숨겨질 때 입니다. (visualViewport.height 가 처음 높이와 같아질 때)
        visualViewport?.height === initialInnerHeight &&
        submitButtonRef.current
      ) {
        submitButtonRef.current.style.transition = "transform 0.1s";
        submitButtonRef.current.style.transform = "translateY(0)";
      } else {
        applyButtonTransform();
      }
    };

    visualViewport?.addEventListener("resize", handleViewportChanges);
    visualViewport?.addEventListener("scroll", handleViewportChanges);

    return () => {
      visualViewport?.removeEventListener("resize", handleViewportChanges);
      visualViewport?.removeEventListener("scroll", handleViewportChanges);
    };
  }, [submitButtonRef]);

  // type 을 url query 로부터 가져옵니다.
  const type = searchParams.get("type") as AssetType;

  const isEditMode = pathname.includes("edit");
  const assetId = pathname.split("/").pop();

  // isEditMode 일 경우에만 assetId 를 통해 asset 을 조회합니다.
  const assetQuery = isEditMode && assetId ? useGetAsset(assetId, type) : null;

  const createAsssetMutation = useCreateAsset(type);
  const updateAssetMutation = useUpdateAsset(
    assetId as string,
    type as AssetType,
  );

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // 호출 전에 request dto 로 변환
    const asset: CreateAssetRequestDTO = mapToAssetRequetDto(data);
    // 기존 데이터가 자산인지 부채인지 확인하고, 다른 api 를 호출합니다.
    // 수정하기 API 호출
    if (isEditMode) {
      // 기존 데이터
      const originalAssetType = assetQuery?.data?.type;
      if (originalAssetType !== asset.type) {
        alert("자산의 종류를 변경할 수 없습니다.");
      } else {
        await updateAssetMutation.mutateAsync({
          data: asset,
          id: assetId as string,
        });
      }
    } else {
      // 자산 (자산, 부채) 등록 API 호출
      await createAsssetMutation.mutateAsync({ data: asset });
    }
  };

  if (isEditMode && assetQuery?.isLoading) return <div>loading...</div>;

  const title = isEditMode ? "기타자산 수정" : "기타자산 등록";
  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
      <Navigation title={title} goBack={false} close={true} />
      <div className="w-325">
        <Title title={"현금부터 실물 자산까지\n 직접 등록해 보세요"} />

        <ErrorBoundary fallback={<Fallback />}>
          <RegisterAssetForm
            data={assetQuery?.data}
            onSubmit={onSubmit}
            isEditMode={isEditMode}
            ref={submitButtonRef}
          />
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default RegisterAsset;
