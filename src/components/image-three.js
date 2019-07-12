import React from 'react';
import { StaticQuery,graphql,Link } from 'gatsby';
import Img from 'gatsby-image';
const ImageThree=()=>{
    return (
        <StaticQuery
          query={graphql`
            {
              file(relativePath: { eq: "wallpaper-249755.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <div>
              <h1>image random client side three</h1>
              <Img fluid={data.file.childImageSharp.fluid} />
              <Link to="/app/randomclientpages/">Client Routes home</Link>
            </div>
          )}
        />
      )
}

export default ImageThree