// Write your Character component here

import React from 'react';
// import './App.css';
//import Details from './Detail'
import styled from 'styled-components';



const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid red;
`


const Characters = (info, action ) => {
    return (
        
         <StyledFriend>
            {/* {info.name} */}
            Luke Skywalker
            <button onClick={() => {}}>
                See details  
                {/* 19BBY8 */}
            </button>
            {/* <Details /> */}
        </StyledFriend>
        

    )
  }

  export default Characters;