import React from 'react';
import { StaticQuery,graphql, Link} from 'gatsby';
import Img from 'gatsby-image'

const ImageTwo=()=>{
    return (
        <StaticQuery
          query={graphql`
            {
              file(relativePath: { eq: "49534_1251087275_large.jpg" }) {
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
              <h1>image random client side two</h1>
              <Img fluid={data.file.childImageSharp.fluid} />
              <Link to="/app/randomclientpages/">Client Routes home</Link>
            </div>
          )}
        />
      )
}

export default ImageTwo