export interface Props {
  title: string;
}

export default function titleComponent({ title }: Props) {
  return (
    <div class="mt-2">
      <p class="text-center font-xl text-black font-bold">The All-Business</p>
    </div>
  );
}
