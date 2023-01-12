export interface Props {
  title: string;
}

export default function InformacoesComponent({ title }: Props) {
  return (
    <div class="w-full bg-red-900 text-center">
      <span class="font-bold text-black bg-red-500">{title}</span>
    </div>
  );
}
