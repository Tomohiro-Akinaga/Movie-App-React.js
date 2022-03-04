// import ImagePath from "https://image.tmdb.org/t/p/w500";

function Image (props) {
    const ImagePath = "https://image.tmdb.org/t/p/w500" + props.mainMovieImage;
    return (
        <img src={ImagePath} alt="" />
    )
}

export default Image;