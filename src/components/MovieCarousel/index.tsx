import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

import classNames from 'classnames';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MovieCard } from '../MovieCard';
import { IMovieDetails } from '../../types';

import styles from './style.module.css';

export const MovieCarousel = ({
    className = '',
    movies = [],
}: {
    className?: string;
    movies: IMovieDetails[];
}) => {
    const movieList =
        movies &&
        movies.map((movie) => (
            <SwiperSlide key={movie.id}>
                <MovieCard
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            </SwiperSlide>
        ));

    return (
        <div className={classNames(className, styles.carousel)}>
            <Swiper
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
                {movieList}
            </Swiper>
        </div>
    );
};
