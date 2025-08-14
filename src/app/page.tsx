import Image from "next/image";
// import banner from '@/assets/river-forest-sunset-landscape-art.jpg'

export default function Home() {
  return (
    <main >
      <div className="relative h-56 md:h-[900px]" >

        <Image src={'/river-forest-sunset-landscape-art.jpg'} alt=""
          fill
        // width={1080} height={720}
        />
      </div>
    </main>
  );
}
