import './App.css';
import data from './data.json';
import { Section } from './componants/Section';
import { Title } from './componants/Title';
import { CardList } from './componants/CardList';

const text = "Заголовок"

function App() {
  return (
    <>
      <Section>
        <Title text={text}/>
        <CardList data={data}/>
      </Section>
    </>
  )
}

export default App
