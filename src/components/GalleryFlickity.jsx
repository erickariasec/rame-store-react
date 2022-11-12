import "./GalleryFlickity.css"
import ITILogo from "../iti-logo-letters-red.png"
import Flickity from "react-flickity-component";
// import flickityImagesloaded from "flickity-imagesloaded";
// import Flickity from 'flickity';
// import { useEffect, useRef } from "react";

// export const Carousel = () => {
//     let elemRef = useRef();
//     let flkty = useRef();

//     useEffect(() => {
//         flkty.current = new Flickity(elemRef.current);
//     }, []);
//     return (
//         <>
//             <div ref={elemRef} style={{ width: '100%' }} data-flickity-options={{wrapAround: true, autoPlay: true, pauseAutoPlayOnHover: false }}>
//                 <img
//                     src={ITILogo}
//                     style={{
//                         width: '50%',
//                         height: '300px',
//                         marginRight: '10px',
//                         background: 'gray'
//                     }}
//                     alt="hola"
//                 />
//                     {/* <img src={ITILogo} alt="hola" />
//                 </img> */}
//                 <div
//                     style={{
//                         width: '100%',
//                         height: '300px',
//                         marginRight: '10px',
//                         background: 'gray'
//                     }}
//                 >
//                     asdasd
//                 </div>
//                 <div
//                     style={{
//                         width: '50%',
//                         height: '300px',
//                         marginRight: '10px',
//                         background: 'gray'
//                     }}
//                 >
//                     asdasd
//                 </div>
//             </div>
//         </>
//     )
// };

const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    flickityImagesloaded: true
}

export default function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src={ITILogo} width="400px" height="400px" alt="hola" />
      <img src={ITILogo} width="400px" height="400px" alt="hola"/>
      <img src={ITILogo} width="400px" height="400px" alt="hola"/>
    </Flickity>
  )
}