import { useEffect, useState } from "react";

const Profile = () => {

const [data, setData] = useState([])

const fetchGithub = async() => {
          const thunk = await fetch('https://api.github.com/users/devendra1999');
          const res = await thunk.json();
          setData(res);
}
  
useEffect(() => {
          // API Call
          fetchGithub();
      
          //unmounting phase in fucntional components
          return () => {
          };
}, []);

const { avatar_url, 
          name,
          location,
          hireable
      } = data;

// console.log("render");

  return (
    <div>
      <h2>Name: {name}</h2>
      <img src={avatar_url}></img>
      <h3>Location: {location}</h3>
      <h3>Hireable: {hireable? 'Yes' : 'No'}</h3>
      <h3>Email: devendrasamant8505@gmail.com</h3>
    </div>
  );
};

export default Profile;
