import Divider from "./components/Divider/Divider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className={styles.container}>
          <Divider/>
          
          <img className={styles.profile} src="https://picsum.photos/200" width="200" />
          
          <Divider/>

          <h1 className={styles.home_title}>About me</h1>
          
          <p>
            Hi I'm Nando. A developer who loves solving problems through clean, efficient code. Most of my work centers on building robust backends and APIs, 
            but I'm always exploring new ways to improve performance and developer experience. What excites me most is designing solutions that 
            make a real difference for the people who use them
          </p>
        </div>
      </main>
    </div>
  );
}
