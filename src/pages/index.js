import React from "react"
import { Link } from "gatsby"
export default () => (
  <div>
    Hello world!
    <div>
      <Link to={"/app/randomclientpages/"}>go to client side routing</Link>
    </div>
  </div>
)
