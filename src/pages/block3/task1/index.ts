import styles from "./styles.module.scss";

const task1 = () => {
  const ad = document.querySelector("#adBlock") as HTMLDivElement;
  const closeAd = document.querySelector("#closeAd") as HTMLButtonElement;
  const hideAdExpiry = window.localStorage.getItem("hideAdExpiry");

  ad.classList.add(styles.adBlock);
  closeAd.classList.add(styles.closeAdBtn);

  closeAd?.addEventListener("click", () => {
    ad.remove();

    setTimeout(() => {
      document.body.append(ad);
    }, 1000);
  });
};

task1();
