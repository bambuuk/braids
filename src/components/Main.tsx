import Image from "next/image";

const Main = () => {
  return (
    <section className="w-full">
      <div className="pt-[40px] max-w-[1240px] w-full m-auto px-[16px] sm:px-[50px] xl:px-0">
        <h1 className="w-full text-[#1F0B0B] font-outfit text-[280px] xl:text-[350px] font-black leading-[80%] text-center">
          Braids
          <div className="grid grid-cols-3 justify-between text-[190px] xl:text-[238px] leading-[100%]">
            <span>for</span>
            <Image
              src='/main-girl.png'
              alt="Girl"
              width={500}
              height={500}
            />
            <span>you</span>
          </div>
        </h1>
      </div>
    </section>
  )
}

export default Main;