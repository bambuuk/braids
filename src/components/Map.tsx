import Image from 'next/image'

const Map = () => {
  return (
    <div className='w-full h-[447px] mt-[150px]'>
      <Image
        src="/map.png"
        width={1440}
        height={447}
        alt="Map"
        className='w-full h-full object-fill'
      />
    </div>
  )
}

export default Map
