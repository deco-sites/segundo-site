export interface Props {
  title: string;
  title2: string;
}

export default function LinkComponent({ title, title2 }: Props) {
  return (
    <>
      <div class="w-72 m-auto">
        <div class=" rounded-xl h-12 mt-16 bg-blue-500 text-md w-72">
          <span class="flex justify-center mt-14 items-center text-white font-bold">
            {title}
          </span>
        </div>
        <div class="rounded-xl h-12 mt-12 bg-blue-500 text-md w-72">
          <span class="flex justify-center mt-14 items-center text-white font-bold">
            {title2}
          </span>
        </div>
      </div>
    </>
  );
}
