import React from 'react';
import { Router } from '@reach/router';
import { Link } from 'gatsby';

import ImageOne from '../../components/image-one';
import ImageTwo from '../../components/image-two';
import ImageThree from '../../components/image-three';
import ImageFour from '../../components/image-four';
const Home = () => <p>Home</p>;

const RandomClientPages = () => (
    <div>
      <h1>Dummy client side routing</h1>
      <nav>
        <Link to="/app/randomclientpages/one">Page One</Link>
        <Link to="/app/randomclientpages/two">Page two</Link>
        <Link to="/app/randomclientpages/three">Page three</Link>
        <Link to="/app/randomclientpages/four">Page four</Link>
      </nav>
      <Router>
        <Home path="/app/randomclientpages/" />
        <ImageOne path="/app/randomclientpages/one" />
        <ImageTwo path="/app/randomclientpages/two" />
        <ImageThree path="/app/randomclientpages/three" />
        <ImageFour path="/app/randomclientpages/four" />
      </Router>
    </div>
  );
  
  export default RandomClientPages;