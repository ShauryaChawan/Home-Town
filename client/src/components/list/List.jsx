import "./list.scss";
import Card from "../card/Card";

function List({ posts, modify=false }) {
  // console.log("List modify: " + modify)
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} modify={modify}/>
      ))}
    </div>
  );
}

export default List;
