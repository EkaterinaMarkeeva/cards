import "./style/cardStyle.css"

type CardType = {
  img?: React.ReactNode,
  children: React.ReactNode
};

export const Card: React.FC<CardType> = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.img}
      {props.children}
    </div>
  )
};
