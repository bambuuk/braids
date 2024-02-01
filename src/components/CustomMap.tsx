'use client';

import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

const CustomMap = () => {
  return (
    <MapContainer center={[50.51179, 30.58977]} zoom={14} scrollWheelZoom={false} className='w-full h-full'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[50.51179, 30.58977]}
        icon={
          new L.Icon({
            iconUrl: MarkerIcon.src,
            iconRetinaUrl: MarkerIcon.src,
            iconSize: [25, 41],
            iconAnchor: [12.5, 41],
            popupAnchor: [0, -41],
            shadowUrl: MarkerShadow.src,
            shadowSize: [41, 41],
          })
        }
      >
        <Popup className='p-[20px] sm:p-[30px] rounded-[10px] bg-[#1F0B0B] opacity-80
        shadow-little flex flex-col'>
          <div className="flex items-center gap-[10px] font-outfit text-[16px] font-semibold leading-[100%] w-full">
            <Image
              src='/icons/location.png'
              width={24}
              height={24}
              alt=""
              className='w-6 h-6 object-cover'
            />
            <span className='text-[#EEEEEE] text-[16px] font-semibold leading-[100%]'>Kyiv, Myru Street, 25-a</span>
          </div>
          <div className="flex items-center gap-[10px] font-outfit">
            <Image
              src='/icons/phone.png'
              width={24}
              height={24}
              alt=""
              className='w-6 h-6 object-cover second'
            />
            <a href="tel:+380631231212" className='text-[#EEEEEE] text-[16px] font-semibold leading-[100%]'>+38(063)-123-12-12</a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default CustomMap
