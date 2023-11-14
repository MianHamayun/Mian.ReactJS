import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mianhamayun")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  //

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-2xl">
      Github Followers: {data.followers}
      <img className="text-center rounded-full w-11 h-11 float-right" src={data.avatar_url} alt="Git Picture" />
    </div>
  );
}

export default Github;

export const githubloader = async () => {
  const response = await fetch("https://api.github.com/users/mianhamayun");
  return response.json();
};
