import Accordion from "./Accordion"

const FAQ = () => {
  return (
    <section id="faq" className="w-full mt-[80px] md:mt-[100px] lg:mt-[150px] h-full">
      <div className="max-w-[1240px] w-full h-full m-auto px-[16px] sm:[25px] md:px-[50px] xl:px-0">
        <div className="h-full flex flex-col xl:flex-row lg:justify-between gap-[40px] md:gap-[70px] xl:gap-0">
          <h2 className="text-[#1F0B0B] text-outfit text-[36px] sm:text-[76px] md:text-[96px] font-black 
          leading-[100%] w-full max-w-[273px]">
            FAQ
          </h2>

          <div className='h-full max-w-[400px] sm:max-w-none md:max-w-[820px] w-full flex flex-col 
          gap-[24px] sm:gap-[30px]'>
            <Accordion
              title='What types of braiding styles do you offer?'
              answer="In our studio, we braid the following types of braids: Afro braids, Zizi braids, Dekosi, and Senegalese twists"
            />
            <Accordion
              title='How long does braiding typically take?'
              answer="The time it takes to braid hair can vary widely depending on factors such as the type of braids, the complexity of the style, the length and thickness of the hair. It can be from 2 until 12 hours"
            />
            <Accordion
              title='What materials are used for braiding?'
              answer="We get used to Hair Extensions or Braiding Hair, Wide-Tooth Comb, Rat-Tail Comb, Clips or Hair Ties, Styling Gel or Edge Control, Hair Oil or Moisturizer, Hair Accessories, Hair Dryer"
            />
            <Accordion
              title='How often is it recommended to wash your hair with braids?'
              answer="Wash your braids every two to three weeks. Waiting longer can cause a stressed scalp, which can lead to build-up of products, sweat, dirt, dandruff, dead skin cells, and bacteria that clogs your pores causing pimples on your scalp"
            />
            <Accordion
              title='What length is suitable for braiding?'
              answer="If you have fine, straight hair, you may need to have hair that is at least four inches long for braids. This length allows for more grip and helps the braids stay in place. However, if you have thick, curly hair, you may be able to get away with hair that is as short as two inches for some braid styles"
            />
            <Accordion
              title='How to unravel braids?'
              answer="When taking down braids, be patient and gentle. Apply a moisturizing oil to the braided hair and scalp, then carefully unravel each braid from tip to root using your fingers. Use scissors to snip off any knots and tangles. After removing braids, deep condition hair to restore moisture and reduce breakage"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
