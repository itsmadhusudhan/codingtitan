import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/container';

class Titan extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <Container>
      <h1>Hello World!!</h1>
      <h2>Super Reactjs!</h2>
      <div>
        <Link to="/404/">Not Found</Link>
      </div>
      <div>
        <Link to="/about/">About</Link>
        <Link to="/templates/blog-post/">template</Link>        
      </div>
      </Container>
    )
  }
}

export default Titan;
