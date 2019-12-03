import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GithubUserData() {
  const [users, fetchUsers] = useState([]);

  useEffect(() => {
    console.log("GithubUserData component mounted");
    axios
      .get("https://api.github.com/users/Aliszl/followers")
      .then(response => {
        console.log(response);
        console.log(response.data);

        fetchUsers(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div>
      {users.map(user => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}

// export default class GithubUserData extends React.Component {
//   state = {
//     users: []
//   };

//   componentDidMount() {
//     axios
//       .get("https://api.github.com/users/Aliszl/followers")
//       .then(response => {
//         console.log(response);
//         console.log(response.data);
//         this.setState({ users: response.data });
//       });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.users.map(user => (
//           <li key={user.name}>{user.name}</li>
//         ))}
//       </div>
//     );
//   }
// }
// <ul>
//   {this.state.users.map(user => (
//     <li key={user.name}>{user.name}</li>
//   ))}
// </ul>;
