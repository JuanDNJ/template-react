import { useDispatch, useSelector } from "../store";
import { discount, increase } from "../store/slices/counter";
import reackIcon from "../assets/react.svg";
export default function App() {
  const helloWord = "Hello Word!";

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <article className="flex flex-col items-center justify-center h-[768px] gap-8">
      <h2 className="text-7xl text-pink-500 font-bold">{helloWord}</h2>
      <img src={reackIcon} width={96} height={96} alt="Icon" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <strong className="text-xl ring-2 ring-red-700 size-11 flex items-center justify-center  rounded-full">
            {count}
          </strong>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button onClick={() => dispatch(increase())}>Add</button>
          <button onClick={() => (count <= 0 ? null : dispatch(discount()))}>
            Discount
          </button>
        </div>
      </div>
    </article>
  );
}
