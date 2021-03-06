import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Páblisson Araújo" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe sint! Est fuga labore, architecto perferendis dicta adipisci expedita nobis aliquid enim exercitationem, quas, inventore molestiae vel quia reprehenderit possimus" 
          />
          <Post
            author="Páblisson Araújo" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe sint! Est fuga labore, architecto perferendis dicta adipisci expedita nobis aliquid enim exercitationem, quas, inventore molestiae vel quia reprehenderit possimus" 
          />
        </main>
      </div>
    </>
  )
}

