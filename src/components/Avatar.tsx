export default function Avatar({ imgSrc }: { imgSrc: string }) {
  return (
    <img
      className="border-white border-2 rounded-full w-4/12 md:min-w-[100px] max-w-[150px]"
      src={imgSrc}
    />
  );
}
