import bg1 from "../assets/imgs/sec1/bg_1.jpg";
import bg2 from "../assets/imgs/sec1/bg_2.jpg";
import bg3 from "../assets/imgs/sec1/bg_3.jpg";
import logo from "../assets/imgs/sec1/logo.png";
import titleBg1 from "../assets/imgs/sec1/title_bg_1.png";
import titleBg2 from "../assets/imgs/sec1/title_bg_2.png";
import cardIcon from "../assets/imgs/sec1/card_icon.png";
import checkIcon from "../assets/imgs/sec1/check_icon.png";
import model1 from "../assets/imgs/sec1/model_1.png";
import model2 from "../assets/imgs/sec1/model_2.png";
import pic1 from "../assets/imgs/sec1/pic_1.jpg";
import pic2 from "../assets/imgs/sec1/pic_2.jpg";
import pic3 from "../assets/imgs/sec1/pic_3.jpg";
import pic4 from "../assets/imgs/sec1/pic_4.jpg";
import product1 from "../assets/imgs/sec1/product1.png";
import product2 from "../assets/imgs/sec1/product2.png";
import product3 from "../assets/imgs/sec1/product3.png";
import product4 from "../assets/imgs/sec1/product4.png";

import styles from "./Section1.module.scss";
import classnames from "classnames";

export default function Sec1() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img className={styles["logo"]} src={logo} alt="" />
        <h1>
          日本旅行<strong>必買!!</strong>
        </h1>
        <h2>用DHC，好好照顧現在的自己， 也為未來的自己提前準備。</h2>
        <div className={styles["intro"]}>
          <img src={product1} alt="" />
          <p style={{ marginBottom: "1em" }}>
            最近開始注意到一些日常的小變化，
            <br />
            但又總覺得「應該還好吧」。
          </p>

          <p>
            DHC陪著你留意那些容易被忽略的小訊號，
            <br />
            從日常保養開始，慢慢調整現在與未來的自己。
          </p>
        </div>
      </section>
      <section className={styles["content"]}>
        <div className={styles["parts"]}>
          <div className={styles["box"]}>
            <div className={styles["title"]}>
              <h1>
                投稿Image
                <img className={styles["title-bg"]} src={titleBg1} alt="" />
              </h1>
            </div>
            <div className={styles["instagram-list"]}>
              <a
                href="https://www.instagram.com/reel/DaC4LxiSUcE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                className={styles["instagram-card"]}
              >
                <div className={styles["cover"]}>
                  <img src={cardIcon} alt="" className={styles["icon"]} />
                  <img src={pic2} alt="" className={styles["main-pic"]} />
                </div>
                <div className={styles["desc"]}>
                  <h4 className={styles["name"]}>@dashxu</h4>
                  <p>明明睡滿8小時，為什麼隔天還是超級沒精神？🫠</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/reel/DaIS8Poyomf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                className={styles["instagram-card"]}
              >
                <div className={styles["cover"]}>
                  <img src={cardIcon} alt="" className={styles["icon"]} />
                  <img src={pic3} alt="" className={styles["main-pic"]} />
                </div>
                <div className={styles["desc"]}>
                  <h4 className={styles["name"]}>@hitomiii61</h4>
                  <p>今天到藥妝店補貨我的愛用常備好物</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/reel/DaDBi2iNrd4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                className={styles["instagram-card"]}
              >
                <div className={styles["cover"]}>
                  <img src={cardIcon} alt="" className={styles["icon"]} />
                  <img src={pic1} alt="" className={styles["main-pic"]} />
                </div>
                <div className={styles["desc"]}>
                  <h4 className={styles["name"]}>@poooooooii__</h4>
                  <p>自己已經吃DHC的保健食品很多年了 除了維他命C還有再搭配鋅</p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/reels/DaK7VxQOb_2/"
                className={styles["instagram-card"]}
              >
                <div className={styles["cover"]}>
                  <img src={cardIcon} alt="" className={styles["icon"]} />
                  <img src={pic4} alt="" className={styles["main-pic"]} />
                </div>
                <div className={styles["desc"]}>
                  <h4 className={styles["name"]}>@min_chienn</h4>
                  <p>日本紓解壓力產品推薦 如果跟我一樣有因為壓力而導致失眠</p>
                </div>
              </a>
            </div>
          </div>
          <div className={styles["box"]}>
            <div className={styles["title"]}>
              <h1>
                產品介紹
                <img className={styles["title-bg"]} src={titleBg1} alt="" />
              </h1>
            </div>
            <div
              className={styles["product-intro"]}
              style={{ height: "172em" }}
            >
              <img src={bg2} alt="" className={styles["bg"]} />
              <div className={styles["desc"]}>
                <img
                  src={product2}
                  alt=""
                  style={{ width: "50%", marginTop: "4em" }}
                />
                <h2 className={styles["main-title"]}>GABA</h2>
                <img
                  src={model1}
                  alt=""
                  style={{
                    width: "80%",
                    marginTop: "0.5em",
                    marginBottom: "2em",
                  }}
                />
                <p>
                  明明有睡飽，
                  <br />
                  卻還是提不起精神，
                  <br />
                  那或許是身體在提醒你,
                  <br />
                  你還沒有真的好好休息。
                </p>
                <p>
                  忙碌的生活裡，
                  <br />
                  我們常常長時間處在緊繃狀態。
                  <br />
                  DHC GABA著眼於現代人的「休息力」，
                  <br />
                  陪著你慢慢調整每天的生活節奏與狀態。
                </p>
                <p>DHC GABA 每日建議攝取量中含有</p>
                <h2 className={styles["sub-title"]}>適合推薦給這類人群！</h2>
                <ul className={styles["target-list"]}>
                  <li>
                    <img src={checkIcon} alt="" />
                    在忙碌與壓力中努力生活的人
                  </li>
                  <li>
                    <img src={checkIcon} alt="" />
                    希望每天都能充滿活力地度過的人
                  </li>
                  <li>
                    <img src={checkIcon} alt="" />
                    長時間處於緊繃節奏的人
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={styles["product-intro"]}
              style={{ height: "204em" }}
            >
              <img src={bg3} alt="" className={styles["bg"]} />
              <div className={styles["desc"]}>
                <img
                  src={product3}
                  alt=""
                  style={{ width: "50%", marginTop: "4em" }}
                />
                <h2
                  className={styles["main-title"]}
                  style={{
                    width: "6.6em",
                    fontSize: "5em",
                    padding: "0.2em 0",
                  }}
                >
                  持續型生物素
                </h2>
                <img
                  src={model2}
                  alt=""
                  style={{
                    width: "80%",
                    marginTop: "0.5em",
                    marginBottom: "4em",
                  }}
                />
                <p>
                  總覺得「現在應該還好」，
                  <br />
                  或許正是現在開始保養的時候。
                </p>
                <p>
                  日常狀態、美麗習慣與每天的生活節奏，
                  <br />
                  都是一點一滴慢慢累積而成。
                  <br />
                  持續型生物素,由內而外，
                  <br />
                  陪伴妳打造美麗的基礎狀態。
                </p>
                <p>
                  生物素被稱為「美的維他命」，
                  <br />
                  與皮膚及黏膜的健康維持息息相關。
                </p>
                <p>
                  DHC「持續型生物素」 <br />
                  採用緩慢釋放的 Time Release 配方， <br />
                  每日建議攝取量可補充生物素500μg※， <br />
                  有效率地陪伴妳打造美麗基礎。
                </p>
                <p>※以上為每日建議攝取量</p>
                <div className={styles["title"]} style={{ marginTop: "6em" }}>
                  <h1
                    style={{
                      fontSize: "4em",
                      fontFamily: "serif",
                      color: "white",
                    }}
                  >
                    超紅的DHC持續型系列產品
                    <img
                      className={classnames(
                        styles["title-bg"],
                        styles["title-bg2"],
                      )}
                      src={titleBg2}
                      alt=""
                    />
                  </h1>
                </div>
                <img src={product4} style={{ width: "90%" }} alt="" />
                <p>持續型維他命C，還有持續型維他命B群！</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
