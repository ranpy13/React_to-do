import { useEffect, useState } from "react";
import "./counter.css";
import Loader from "../Loader/Loader.jsx";

const Counter = () => {
  const [count, setCount] = useState(0);

  const fetchData = () => {
    fetch(import.meta.env.VITE_GET_API)
      .then((response) => response.text()) // Read response as plain text
      .then((value) => {
        setCount(parseInt(value, 10)); // Convert string to number
      })
      .catch((err) => {
        setCount(1);
        console.error(err);
        console.error("Could not fetch data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Run only once when the component mounts

  const handleIncrement = () => {
    if (count >= import.meta.env.VITE_MAX_VALUE) {
      alert("Maximum Value Reached");
      setCount(import.meta.env.VITE_MAX_VALUE);
    } else setCount(count + 1);
  };

  const handleChange = (e) => {
    // alert("changed");
    const val = parseInt(e.target.value);
    if (
      val >= import.meta.env.VITE_MAX_VALUE ||
      val <= import.meta.env.VITE_MIN_VALUE
    ) {
      alert("Out of Bounds Value Reached");
      setCount(import.meta.env.VITE_MAX_VALUE);
    } else setCount(val);
  };

  const handleDecrement = () => {
    // alert("clicked");
    if (count < import.meta.env.VITE_MIN_VALUE) {
      alert("Minimum Value Reached");
      setCount(import.meta.env.VITE_MIN_VALUE);
    } else setCount(count - 1);
  };

  return (
    <div className="wrapper__container">
      <Loader />
      <div className="container__counter">
        <button className="button_left" onClick={handleDecrement}>
          -
        </button>
        <input value={count} onChange={handleChange} />
        <button className="button_right" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
