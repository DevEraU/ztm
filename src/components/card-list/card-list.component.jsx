import CardContainer from "../card-container/card-container.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  //we know props is first parameter and our props is monsters we do the dsitructuring directly
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>
);

export default CardList;
