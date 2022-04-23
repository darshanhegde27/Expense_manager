import React from "react";
import { useSelector } from "react-redux";

export default function Home(props) {
  const value = useSelector((state) => state.Homedata.value);
  return <div>Home</div>;
}
