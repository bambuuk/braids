import {
  HeaderFacebookIcon,
  HeaderInstagramIcon,
  HeaderTiktokIcon,
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterTiktokIcon
} from '@/assets/uiComponents'

interface SocialNetworkPlace {
  place: 'header' | 'footer';
}

const SocialNetwork = ({ place }: SocialNetworkPlace) => {
  return (
    <div className="flex gap-5 px-2">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className={`${place === 'header' ? 'social__header-link' : 'social__footer-link'} w-[32px] h-[32px] flex items-center`}
      >
        {place === 'header' ? <HeaderFacebookIcon /> : <FooterFacebookIcon />}
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className={`${place === 'header' ? 'social__header-link' : 'social__footer-link'} w-[32px] h-[32px] flex items-center`}
      >
        {place === 'header' ? <HeaderInstagramIcon /> : <FooterInstagramIcon />}
      </a>
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        className={`${place === 'header' ? 'social__header-link' : 'social__footer-link'} w-[32px] h-[32px] flex items-center`}
      >
        {place === 'header' ? <HeaderTiktokIcon /> : <FooterTiktokIcon />}
      </a>
    </div>
  )
}

export default SocialNetwork
