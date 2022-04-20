import { renderPageWrapper } from "components/PageWrapper";
import styles from "./styles.module.scss";

const task1 = () => {
  renderPageWrapper();
  const ad = document.querySelector("#adBlock");
  const closeAd = document.querySelector("#closeAd");

  ad?.classList.add(styles.adBlock);
  closeAd?.classList.add(styles.closeAdBtn);

  const newsShowAdTimeout = () => {
    const expireTime = window.localStorage.getItem("expireTime");

    setTimeout(
      () => {
        ad?.classList.add(styles.showAd);
        window.localStorage.removeItem("expireTime");
      },
      expireTime ? +expireTime - Date.now() : 0
    );
  };

  newsShowAdTimeout();

  closeAd?.addEventListener("click", () => {
    const now = new Date();
    const expireTime = now.setDate(now.getDate() + 1);

    ad?.classList.remove(styles.showAd);
    window.localStorage.setItem("expireTime", expireTime.toString());

    newsShowAdTimeout();
  });
};

task1();
