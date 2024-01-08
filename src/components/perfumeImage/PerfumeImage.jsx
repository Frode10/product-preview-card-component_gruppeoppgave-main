import BGDESKTOP from "/image-product-desktop.jpg"
import BGMOBILE from "/image-product-mobile.jpg"
import './PerfumeImage.css'

export const PerfumeImage = () => {
    return (
        <picture className="img_wrapper">
        {/* //TODO: Bruk media queries for å vise riktig bilde (1440px for desktop, 375px for mobile) */}
        <img src={BGDESKTOP} alt="" className="desktop_image" />
        <img src={BGMOBILE} alt="" className="mobile_image" />
      </picture>
    )
}