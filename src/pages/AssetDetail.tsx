import { useNavigate, useParams } from "react-router-dom";
import { TextButton, Title } from "@/features/ui/components";
import { getAssetQuery } from "@/features/asset/api/getAsset";
import { useQuery } from "@tanstack/react-query";
import { ASSET_TYPE_NAME } from "@/features/asset/const";
import { NumericFormat } from "react-number-format";
import { MemoCTAButton } from "@/features/asset";
import { QueryClient } from "@tanstack/react-query";

export const AssetDetailLoader = async (
  queryClient: QueryClient,
  id: string,
) => {
  const query = getAssetQuery(id);

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const AssetDetail: React.FC = () => {
  const params = useParams();

  const navigate = useNavigate();
  if (!params.id) {
    return <div>잘못된 페이지입니다. </div>;
  }
  const { data: asset } = useQuery(getAssetQuery(params?.id));
  if (!asset) {
    return <div>잘못된 페이지입니다. </div>;
  }

  const { name, type, value, memo } = asset;
  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
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
              <td className="text-end font-semibold">
                {memo || (params.id && <MemoCTAButton id={params.id} />)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* 삭제, 수정 버튼 영역*/}
        <div className="fixed bottom-35 left-0 w-full">
          <div className="flex justify-center gap-30">
            <TextButton label="삭제하기" onClick={() => console.log("dd")} />
            <TextButton
              label="수정하기"
              onClick={() => navigate(`/register/edit/${params.id}`)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDetail;
