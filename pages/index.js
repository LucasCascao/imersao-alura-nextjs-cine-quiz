import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import Footer from '../src/components/Footer'
import QuizLogo from '../src/components/QuizLogo'

// function Title(props) {
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>${db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Muito loko</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>${db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Muito loko</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto"/>
    </QuizBackground>
  );
}