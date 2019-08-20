import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Emotions from "../components/emotions"

const options = ['😡', '😩', '😒', '🤷🏼‍', '😶', '😊', '😎', '🥨'];

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Explorify Special" />
    <Emotions emojis={options} />
  </Layout>
)

export default IndexPage
