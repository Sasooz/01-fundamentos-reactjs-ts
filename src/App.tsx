
import { Header } from "./components/Header";
import {Sidebar} from './components/Sidebar';
import { Post, PostType } from "./components/Post";
import './global.css';
import styles from './App.module.css';

const posts : PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/Sasooz.png',
      name: 'Sávio Cardoso',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph' , content: 'Fala galeraa 👋' },
      { type: 'paragraph' , content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link' , content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-09-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/GuiAlcantaraa.png',
      name: 'Guilherme Alcantara',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph' , content: 'Fala galeraa 👋' },
      { type: 'paragraph' , content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link' , content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-09-08 20:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />

    <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              post={post}
            />)
          })} 
        </main>
    </div>
    </div>
  )
}


