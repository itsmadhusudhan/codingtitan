import React from 'react';
import Container from '../components/container';

const NotFoundPage=()=>{
  return(
    <Container>
      <h1>404 NOT FOUND</h1>
      <p>Ooops!! seems the page doesn't exist.<a href="/">Go Back Home</a></p>
    </Container>
  )
}

export default NotFoundPage;