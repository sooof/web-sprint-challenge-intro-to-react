// Write your Character component here

import React from 'react';
// import './App.css';
import styled from 'styled-components';



const StyledFriend = styled.div`
//   width: 60%;
//   display: flex;
//   justify-content: space-between;
//   padding: 8px;
//   border-bottom: 2px solid red;
`


const Details = () => {
    return (
      <StyledFriend>
      
    
      {
              <div className='container'>
            
              {
                
                <>
                  {/* <p>details.name is details.age</p>
                  <p>email is details.email</p> */}
                   likes:
                  <ul>
                    {
                    //   details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
                    }
                  </ul>
                </>
              }
              <button >Close</button>
            </div>
      }
      
      </StyledFriend>
    )
  }

  export default Details;