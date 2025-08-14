import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="relative" style={{height:900}}>

        <Image src='http://localhost:3000/river-forest-sunset-landscape-art.jpg' alt=""
          fill
        // width={1080} height={720}
        />
      </div>
    </main>
  );
}
