import Image from "next/image";
import banner from '@/assets/river-forest-sunset-landscape-art.jpg'

export default function Home() {
  return (
    <main >
      <div className="relative" style={{height:900}}>

        <Image src={banner.src} alt=""
          fill
        // width={1080} height={720}
        />
      </div>
    </main>
  );
}
