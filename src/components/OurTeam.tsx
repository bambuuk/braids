import Image from "next/image"

const OurTeam = () => {
  return (
    <section className="w-full mt-[160px]">
      <div className="max-w-[1240px] w-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="grid grid-cols-3 grid-rows-3">
          <h2 className="text-[#1F0B0B] font-outfit text-[96px] font-black leading-[96px]">
            Our Team
          </h2>

          <div className="flex gap-5 col-start-2 col-end-4">
            <Image
              src='/ourTeam/mariia.png'
              alt='Employee Mariia'
              width={400}
              height={353}
            />

            <div>
              <div>
                <span>Maria, </span>
                <span>7 years of experience</span>
              </div>

              <div>
                <span>dekosi</span>
                <span>afro braid</span>
                <span>zizi</span>
              </div>

              <div>
                Works:
              </div>

              <div>Slider</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
