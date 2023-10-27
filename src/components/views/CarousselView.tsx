// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper modules
import { FreeMode, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../swiper.css";

// Types
import { CharacterResponseFromApi } from "../../types";
import { Link } from "react-router-dom";

// Props
interface CarousselViewProps {
  data: CharacterResponseFromApi[];
}

const CarousselView = ({ data }: CarousselViewProps) => {
  return (
    <>
      <Swiper
        className="mt-5 mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 5
          }
        }}
        modules={[FreeMode, Navigation]}
      >
        {data.map((character) => {
          return (
            <SwiperSlide className="rounded-md">
              <div className="flex flex-col gap-2">
                <Link to={`/id/${character.id}`} >
                  <img src={character.image} alt="" className="rounded-t-md" />
                </Link>
                <p>{character.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CarousselView;
