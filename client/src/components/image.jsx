import React from "react";
import styles from './imageStyles.css';
import styled from 'styled-components'
class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const RightChild = styled.div`
    background-image: url('${this.props.imageurl}');

    height:100%;
    width:100%;
    border: white solid 1px;
    background-size: 100% 100%;
    background-position: center;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.2);
    }

    `
    return (
      <div  style={{'height': '100%' , 'width':'50%', 'overflow': 'hidden'}}>
       <RightChild></RightChild>
      </div>

    );
  }
}

export default Image;
