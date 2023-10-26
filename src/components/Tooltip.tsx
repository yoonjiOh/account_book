interface TooltipProps {
  message: string;
}

/**
 * 과제에서는 에러 툴팁만 나와있지만, 에러상황이 아닌 경우에도 툴팁이 같은 디자인로 나오는 경우를 대비하여
 * 재사용성을 위해 에러 툴팁이 아닌 경우에도 사용할 수 있도록 구현하였습니다.
 * 향후 디자인이 추가되면 해당 컴포넌트를 수정하여 사용하면 됩니다.
 * */
const Tooltip: React.FC<TooltipProps> = ({ message }) => (
  <div className="absolute left-15 p-2 -mt-5 w-full z-20">
    <div className="w-3 h-3 relative ml-12">
      <div className="absolute w-6 h-6 bg-coralRed transform rotate-45" />
    </div>
    <div className="bg-coralRed text-white px-9 py-4 rounded-lg text-12 text-left align-middle font-medium leading-18 absolute left-0 ml-4">
      {message}
    </div>
  </div>
);

export default Tooltip;
