import "./card.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Card({ item, modify }) {
  // const [shouldDelete, setShouldDelete] = useState();

  const deletePopUp = () => {
    let value;
    if (confirm("Are you sure you want to delete your post ?")) {
      // setShouldDelete(true);
      value = true;
      console.log(value);
    } else {
      // setShouldDelete(false);
      value = false;
      console.log(value);
    }
    return value;
  };

  const handleDelete = async () => {
    const shouldDelete = deletePopUp();
    if (shouldDelete) {
      try {
        await apiRequest.delete(`/posts/${item.id}`);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">&#8377; {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
            <div className="feature">
              {item.type === "rent" ? (
                <img className="rent-sell" src="/rent.png" alt="" />
              ) : (
                <img className="rent-sell" src="/sell.png" alt="" />
              )}
            </div>
          </div>
          {modify && (
            <>
              <div className="icons">
                <Link to={`/edit/${item.id}`}>
                  <div className="icon edit">
                    <img  src="/edit.png" alt="" />
                  </div>
                </Link>
                <div onClick={handleDelete} className="icon delete">
                  <img src="/trash.png" alt="" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
