import "./style/imageCardStyle.css"

type ImageCardType = {
  src: string,
  alt: string
}

export const ImageCard: React.FC<ImageCardType> = (props) => {
  return <img src={props.src} className="card-img-top" alt={props.alt}></img>
}
