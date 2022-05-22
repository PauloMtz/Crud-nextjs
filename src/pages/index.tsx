export default function Home() {
  {/*
    criar projeto com tailwind conforme orientações no site do tailwind
    https://tailwindcss.com/docs/guides/nextjs
    criar pasta src, e mover /pages e /styles para /src
    criar /components dentro de /src
    renomear index.js para index.tsx
    o sistema irá solicitar instalação do typescript indicando o
    comando para instalação
    o VsCode tem plugin para o tailwind, basta procurar em extensões
  */}

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-gray-200 to-blue-600
    `}>
      <span className="text-4xl">Projeto Next-Js com Tailwind Css</span>
    </div>
  )
}
