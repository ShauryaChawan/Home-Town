import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [prediction, setPrediction] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          images: images,
          address: inputs.address,
          city: inputs.city,
          bhk_or_rk: inputs.bhk_or_rk,
          under_construction: inputs.uc === "yes" ? true : false,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          rera: inputs.rera === "yes" ? true : false,
          size: parseInt(inputs.size),
          type: inputs.type,
          property: inputs.property,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  const handleAIPrediction = async () => {
    setIsLoading(true);
    const formData = new FormData(document.getElementById("postForm"));
    const inputs = Object.fromEntries(formData);

    const uc = inputs.uc == "yes" ? 1 : 0;
    const rera = inputs.rera == "yes" ? 1 : 0;
    const bhk_no = parseInt(inputs.bedroom);
    const bhk_or_rk = inputs.rera == "bhk" ? 0 : 1;
    const size = parseFloat(inputs.size);
    const longitude = parseFloat(inputs.longitude);
    const latitude = parseFloat(inputs.latitude);

    try {
      const res = await axios.post("http://localhost:5000/predict", {
        POSTED_BY: 0,
        UNDER_CONSTRUCTION: uc,
        RERA: rera,
        BHK_NO: bhk_no,
        BHK_OR_RK: bhk_or_rk,
        SQUARE_FT: size,
        READY_TO_MOVE: 1,
        RESALE: 1,
        LONGITUDE: longitude,
        LATITUDE: latitude,
      });
      console.log(res.data.prediction);
      setPrediction(res.data.prediction.toFixed(5));
    } catch (err) {
      console.log(err);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form id="postForm" onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title *</label>
              <input id="title" required name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="address">Address *</label>
              <input id="address" required name="address" type="text" />
            </div>
            <div className="item">
              <label htmlFor="city">City *</label>
              <input id="city" name="city" required type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description *</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="bhk_or_rk">BHK or RK</label>
              <select id="bhk_or_rk" name="bhk_or_rk">
                <option value="bhk">BHK</option>
                <option value="rk">RK</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number *</label>
              <input
                min={1}
                id="bedroom"
                required
                name="bedroom"
                type="number"
              />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number *</label>
              <input
                min={1}
                id="bathroom"
                required
                name="bathroom"
                type="number"
              />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude *</label>
              <input id="latitude" required name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude *</label>
              <input id="longitude" required name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select id="property" name="property">
                <option value="apartment">Apartment</option>
                <option value="bungalow">Bungalow</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="price">Price *</label>
              <input id="price" required name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select id="utilities" name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select id="pet" name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="uc">Under-Construction</label>
              <select id="uc" name="uc">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="rera">RERA Approved</label>
              <select id="rera" name="rera">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="school">
                School <small>(optional)</small>
              </label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus <small>(optional)</small></label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant <small>(optional)</small></label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <div className="item">
              <label htmlFor="hospital">Hospital <small>(optional)</small></label>
              <input min={0} id="hospital" name="hospital" type="number" />
            </div>
            <button type="submit" className="btn">
              Add
            </button>
            {error && <span>error</span>}
          </form>
          <div className="ai-div" >
            <div className="ai-header">
              <img src="/google_bard_logo.png" className="ai-img" alt="" />
              <p className="ai-heading">
                Discover Your Home&apos;s True Worth with AI Precision
              </p>
            </div>
            <div className="ai-wrapper">
              <button onClick={handleAIPrediction} className="ai-btn">Predict Price</button>
              {isLoading ? (
                <div className="predicted-price">Calculating ...</div>
              ) : (
                <div className="predicted-price">&#8377;{prediction} L</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "chewytreant",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
