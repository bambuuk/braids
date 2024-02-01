'use client';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./CustomMap'), {
  loading: () => <p className='text-black flex justify-center items-center h-full'>Loading...</p>,
  ssr: false
})

const Map = () => {
  return (
    <div id="map" className='w-full h-[447px] mt-[80px] md:mt-[100px] lg:mt-[150px] relative'>
      <DynamicMap />
    </div>
  )
}

export default Map
