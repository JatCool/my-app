import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export const ImageSlider = ({ images }: { images: string[] }) => {
  return (
    <Swiper modules={[Navigation]} navigation spaceBetween={10} slidesPerView={1}>
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <img src={url} alt={`slide-${index}`} className="moment-image-slider" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
