import Header from "@/components/Header";
import Main from "@/components/Main";
import OurTeam from "@/components/OurTeam";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mt-[88px]">
        <Main />
        <OurTeam />
      </main>
    </>
  );
}
