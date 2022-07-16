import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css';

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Páblisson Araújo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe sint! Est fuga labore, architecto perferendis dicta adipisci expedita nobis aliquid enim exercitationem, quas, inventore molestiae vel quia reprehenderit possimus" 
      />
      <Post
        author="Páblisson Araújo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe sint! Est fuga labore, architecto perferendis dicta adipisci expedita nobis aliquid enim exercitationem, quas, inventore molestiae vel quia reprehenderit possimus" 
      />
    </>
  )
}

