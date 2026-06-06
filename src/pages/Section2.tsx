import bg1 from "../assets/imgs/sec2/bg_1.png";
import styles from "./Section2.module.scss";

export default function Sec2() {
  return (
    <div className={styles["section"]}>
      <section className={styles["content"]}>
        <img src={bg1} alt="" className={styles["bg"]} />
        <div className={styles["desc"]}>
          <h4>DHC帶來的安心與品質</h4>
          <h2>
            值得信賴的
            <br />
            保健補給
          </h2>
          <p>
            如果能讓人生更健康、更自在地前進就好了。
            <br />
            如果那些微小卻珍貴的幸福，
            <br />
            都能自然融入每天的生活中······
            <br />
            支持健康生活的保健食品，
            <br />
            正是陪伴這份心意的重要存在。
            <br />
            因此，DHC長年以來，
            <br />
            始終將「安全性」放在首位，
            <br />
            持續打造讓人安心選擇的產品。
          </p>
          <p style={{ fontSize: "1.8em", marginBottom: "1.4em" }}>
            「讓幸福，成為日常。」
          </p>
          <p>
            無論現在，還是未來，
            <br />
            DHC 都希望陪伴妳
            <br />
            度過每一個健康而美好的日子。
          </p>
        </div>
      </section>
    </div>
  );
}
