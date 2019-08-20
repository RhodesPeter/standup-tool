import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Emotions from "../components/emotions"

const options = ['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉',
  '😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎',
  '🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😤','😭','😢','🥺','😩','😫',
  '😖','😣','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔',
  '🤭','🤫','😦','😯','🙄','😬','😑','😐','😶','🤥','😧','😮','😲','😴','🤤','😪',
  '😵','🤐','🤑','🤕','🤒','😷','🤧','🤮','🤢','🥴','🤠'];

const createEmotions = (emojis) => {
  const shuffled = emojis.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 7);
}

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Weather" />
    <Emotions emojis={createEmotions(options)} />
  </Layout>
)

export default IndexPage
