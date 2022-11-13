export default function Avatar({ imgSrc }: { imgSrc: string }) {
  return (
    <img
      className="border-white border-2 rounded-full w-4/12 min-w-[100px]"
      src={imgSrc}
    />
  );
}
