import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput";
import { List } from "@/components/List/List";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="grid grid-cols-[auto_1fr] gap-50 overflow-hidden">
        <div className="flex flex-col gap-[32px] items-center sm:items-start overflow-hidden">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Button label="click"/>
        <TextInput />
        </div>
        <List items={["Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner","Francesco Saccone", "Pia wagner" ,"Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner","Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner","Francesco Saccone", "Pia wagner" ,"Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner","Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner","Francesco Saccone", "Pia wagner" ,"Francesco Saccone", "Pia wagner", "Francesco Saccone", "Pia wagner","Francesco Saccone", "Pia wagner"]}/>
      </main>
    </div>
  );
}
