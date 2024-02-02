import "./style/cardBodyStyle.css"

type CardBodyType = {
  title: string,
  text: string,
  href: string
  contentLink: string
}

export const CardBody: React.FC<CardBodyType> = (props) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <a href={props.href} className="btn btn-primary">{props.contentLink}</a>
    </div>
  )
}
