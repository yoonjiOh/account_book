import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  AlertPopup,
  Navigation,
  RoundButton,
  TextButton,
  Title,
} from "@/features/ui/components";
import { useGetAsset } from "@/features/asset/api/getAsset";
import { ASSET_TYPE_NAME } from "@/features/asset/const";
import { NumericFormat } from "react-number-format";
import { MemoCTAButton } from "@/features/asset";
import { useDeleteAsset } from "@/features/asset/api";
import { AssetModel } from "@/features/asset/model";
import { AssetType } from "@/features/asset/type";

const AssetDetail: React.FC = () => {
  const params = useParams();

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const navigate = useNavigate();
  const { data, isLoading } = useGetAsset(
    params.id as string,
    params.type as AssetType,
  );

  const useDeleteAssetMutation = useDeleteAsset(
    params.id as string,
    params.type as AssetType,
  );

  const onDelete = () => {
    useDeleteAssetMutation.mutateAsync({
      id: params.id as string,
      type: params.type as AssetType,
    });
  };

  if (isLoading) return <div>loading...</div>;
  const { name, type, value, memo } = data as AssetModel;

  return (
    <>
      <section className="flex flex-col items-center w-screen h-screen pt-88">
        <Navigation title="상세" goBack={true} close={false} />
        <div className="w-325">
          <Title title={name} />
          {/**
           * 자산 상세 정보 영역
           * 웹 접근성을 고려하여 테이블로 마크업하였습니다.
           */}
          <table className="w-full text-ebony text-16 leading-24 mt-40">
            <caption className="hidden">자산에 대한 상세 정보</caption>
            <thead className="hidden">
              <tr>
                <th scope="col">항목</th>
                <th scope="col">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="text-left font-normal py-8">
                  분류
                </th>
                <td className="text-end font-semibold">
                  {ASSET_TYPE_NAME[type]}
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left font-normal py-8">
                  자산가치
                </th>
                <td className="text-end font-semibold">
                  <NumericFormat
                    className="w-full outline-none text-18 font-bold text-end"
                    thousandSeparator=","
                    suffix="원"
                    value={value}
                    readOnly={true}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left font-normal py-8s">
                  메모
                </th>
                <td className="w-220 text-end font-semibold whitespace-pre-line">
                  <div role="memo-value">
                    {memo ||
                      (params.id && (
                        <MemoCTAButton id={params.id} type={type} />
                      ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* 삭제, 수정 버튼 영역*/}
          <div className="fixed bottom-35 left-0 w-full">
            <div className="flex justify-center gap-30">
              <TextButton
                label="삭제하기"
                onClick={() => setIsOpenPopup(true)}
              />
              <TextButton
                label="수정하기"
                onClick={() =>
                  navigate(`/register/edit/${params.id}?type=${type}`)
                }
              />
            </div>
          </div>
        </div>
      </section>
      <AlertPopup
        title="자산을 삭제할까요?"
        subtitle="삭제한 자산은 복구할 수 없어요"
        isOpen={isOpenPopup}
        onClose={() => setIsOpenPopup(false)}
        buttons={[
          <RoundButton
            label="취소"
            colorType="secondary"
            onClick={() => setIsOpenPopup(false)}
          />,
          <RoundButton label="삭제" colorType="primary" onClick={onDelete} />,
        ]}
      />
    </>
  );
};

export default AssetDetail;
