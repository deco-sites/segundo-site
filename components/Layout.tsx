import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export default function Layout(props: Props) {
  return (
    <div class="min-h-screen bg-primary-blue text-primary-dark">
      {props.children}
    </div>
  );
}
