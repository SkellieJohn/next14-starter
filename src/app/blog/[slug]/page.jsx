import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="/about.png" alt="" width={50} height={50}  className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>12.12.2022</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, saepe sint fuga, enim laborum aspernatur, eum alias quo ducimus labore eligendi reiciendis incidunt minus a ex placeat? Accusantium, quae quod.
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
