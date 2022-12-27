export const getImage = (path, size = 'w500') => {
    if (!path) return null;
    return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const ratingColors = {
    UNRATED: 'var(--neutral-grey)',
    BAD: 'var(--red)',
    AVERAGE: 'var(--yellow)',
    GOOD: 'var(--green)',
};

export const getRatingColor = (score) => {
    let color = ratingColors.GOOD;
    if (!score || score === 0) color = ratingColors.UNRATED;
    else if (score <= 4) color = ratingColors.BAD;
    else if (score <= 6) color = ratingColors.AVERAGE;
    return color;
};

export const getMovieYear = (date) => new Date(date).getFullYear();

export const getMovieLength = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours === 0) return `${minutes}min`;
    else if (minutes === 0) return `${hours}h`;
    else return `${hours}h ${minutes}m`;
};
