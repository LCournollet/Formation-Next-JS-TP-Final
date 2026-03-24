import Image from "next/image";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Homepage() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");

  return (
    <>
      <div className="relative w-full h-64">
        <Image
          src="/hero.jpg"
          alt="Bannière"
          fill
          className="object-cover"
          priority
        />
      </div>
      <SliceZone slices={homepage.data.slices} components={components} />
    </>
  );
}