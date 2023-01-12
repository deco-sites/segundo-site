export interface Props {
  title: string;
}

export default function LinkComponent({ title }: Props) {
  return <div>{title}</div>;
}
