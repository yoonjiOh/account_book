import { useNavigate } from "react-router-dom";
import { TextButton, Title } from "@/components";

const AssetDetail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
      <div className="w-325">
        <Title title={"골드바"} />
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
              <td className="text-end font-semibold">자산</td>
            </tr>
            <tr>
              <th scope="row" className="text-left font-normal py-8">
                자산가치
              </th>
              <td className="text-end font-semibold">1,555원</td>
            </tr>
            <tr>
              <th scope="row" className="text-left font-normal py-8s">
                메모
              </th>
              <td className="text-end font-semibold">메모</td>
            </tr>
          </tbody>
        </table>

        {/* 삭제, 수정 버튼 영역*/}
        <div className="fixed bottom-35 left-0 w-full">
          <div className="flex justify-center gap-30">
            <TextButton label="삭제하기" onClick={() => console.log("dd")} />
            <TextButton
              label="수정하기"
              onClick={() => navigate("/register?editMode=true")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDetail;
