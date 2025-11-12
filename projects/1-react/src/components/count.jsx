export default function Count({ countIncomp }) {
  return (
    <p className="h-11 px-3 flex items-center text-ellipsis">
        남은 할일 개수 : {countIncomp} 개
    </p>
  );
}