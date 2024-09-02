import Image from "next/image";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections/>
      <ProductList/>
      <Footer/>
    </>
  );
}

export const dynamic = "force-dynamic";
