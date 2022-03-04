import ImageStyle from "./Image.module.scss";

function Image (props) {
    const ImagePath = "https://image.tmdb.org/t/p/w500" + props.mainMovieImage;
    return (
        <img src={ImagePath} className={ImageStyle.image}/>
    )
}

export default Image;