import { useState, useEffect } from "react";
import Button from "./Button";

const Container = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && (
          <div>
            <img src={userData.picture.large} alt="User" />
            <h2>
              {userData.name.first} {userData.name.last}
            </h2>
            <p>Email: {userData.email}</p>
            <p>
              Location: {userData.location.city}, {userData.location.country}
            </p>
          </div>
        )
      )}
      <Button onClick={fetchData}>Get New User</Button>
    </div>
  );
};

export default Container;