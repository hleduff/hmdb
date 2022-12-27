import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

import PropTypes from 'prop-types';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardMovie } from '../CardMovie';

export const MovieCarousel = ({ className, movies }) => (
    <Swiper
        className={className}
        modules={[Navigation, A11y]}
        navigation
        slidesPerView={4}
        spaceBetween={16}
        breakpoints={{
            320: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 4,
            },
            980: {
                slidesPerView: 8,
            },
        }}
    >
        {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
                <CardMovie movie={movie} />
            </SwiperSlide>
        ))}
    </Swiper>
);

MovieCarousel.propTypes = {
    className: PropTypes.string,
    movies: PropTypes.array,
};
