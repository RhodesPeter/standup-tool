import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Emotions from "../components/emotions"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Emotions />
  </Layout>
)

// <Link to="/page-2/">Go to page 2</Link>

export default IndexPage
