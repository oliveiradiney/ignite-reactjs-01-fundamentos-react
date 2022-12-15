
import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';


function App() {
  
  return (
    <div>
      <Header/>


      <div className={styles.wrapper}>
        
        <Sidebar />
      
        <main>
          <Post
            author="Diney"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."          
          />
          <Post
              author="Apolo"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit."          
          />
        </main>
      </div>
    </div>
    
  )
}

export default App
