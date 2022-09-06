import { Header } from './componetes/Header';
import { Post } from './componetes/Post';
import { Sidebar } from './componetes/Sidebar';

import './global.css'

import  styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
      <main>
        <Post 
          author="Aparecido"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris, nec"
        />
          <Post 
          author="Aparecido"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris, nec"
        />
      </main>
      </div>
    </div>
  )
}



