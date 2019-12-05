import React from "react";
import styled from "styled-components";

// styling
const StyledDiv = styled.div`
  display:flex;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  margin: 20px auto;
  width: 63%;
  border:  2px solid;
  color: palevioletred;
  background-color: white;

  height: auto;
  border-radius: 8px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.8), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

// const Card = props => {
//   const { login, id, url, avatar_url } = props.user;
//   return (
//     <StyledDiv>
//       <h1>{login}</h1>
//       <h3>id: {id}</h3>
//       <h3>url: {url}</h3>
//       <img classname="avatar" src={avatar_url} alt="avatar pic" />
//     </StyledDiv>
//   );
// };
// export default Card;

export default class Card extends React.Component {
  render() {
    return (
      <StyledDiv>
        <h1>{this.props.login}</h1>
        <h3>id: {this.props.id}</h3>
        <h3>url: {this.props.url}</h3>
        <img classname="avatar" src={this.props.avatar_url} alt="avatar pic" />
      </StyledDiv>
    );
  }
}
