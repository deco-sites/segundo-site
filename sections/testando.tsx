export interface Props {
  title: string;
}

export default function ({ title }: Props) {
  return <div class="text-center bg-black font-bold">{title}</div>;
}
