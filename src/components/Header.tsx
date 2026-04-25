import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-8 py-4 bg-[#FAF7F2]">
      <Link
        href="/sobre"
        className="font-medium text-sm"
        style={{ color: "#FE6614" }}
      >
        Sobre
      </Link>
      <Link href="/">
        <Image
          src="/imagens/logo.png"
          alt="Bruna Inturn"
          width={120}
          height={50}
          className="object-contain"
        />
      </Link>
      <Link
        href="/servicos"
        className="font-medium text-sm"
        style={{ color: "#FE6614" }}
      >
        Serviços
      </Link>
    </header>
  );
}
