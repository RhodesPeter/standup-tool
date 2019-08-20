import { graphql } from 'gatsby'

const SendEmotionsToDB = ({ data }) => {
  console.log('send it to DB!');
  console.log(data);
};

export const query = graphql`
  query SendEmotionsToDBQuery {
    standupTool {
      emotionses {
        savedEmojis
      }
    }
  }
`

export default SendEmotionsToDB;
