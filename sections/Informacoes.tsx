export interface Props {
  title: string;
}

export default function titleComponent() {
  return (
    <>
      <div class="mt-2">
        <p class="text-center font-xl text-black font-bold">Meu deus do ceu</p>
      </div>
      <div>
        <img
          class="object-cover rounded-full
          w-16 h-16 m-auto mt-16"
          src="/imagem_perfil.png"
          alt=""
        />
      </div>
      <div>
        <h1>Como colocar funcoes aqui?</h1>
      </div>
    </>
  );
}
