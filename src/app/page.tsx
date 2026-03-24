import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Homepage() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");

  return <SliceZone slices={homepage.data.slices} components={components} />;
}