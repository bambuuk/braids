import CallAction from "@/components/CallAction";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Main from "@/components/Main";
import OurTeam from "@/components/OurTeam";
import Price from "@/components/Price";
import Reviews from "@/components/Reviews";
import RunningRow from "@/components/RunningRow";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mt-[88px]">
        <Main />
        <OurTeam />
        <RunningRow />
        <Price />
        <CallAction />
        <Reviews />
        <FAQ />
      </main>
    </>
  );
}
