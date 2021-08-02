import Image from "next/image";
import welcomeStyles from "../styles/welcome.module.css";

export default function Welcome() {
  return (
    <div className={welcomeStyles.view}>
      <div className={welcomeStyles.welcomeView}>
        <div className={welcomeStyles.imageView}>
          <Image
            src="/images/Foryou-dog.png"
            layout="fill"
            className={welcomeStyles.image}
          />
        </div>
        <div className={welcomeStyles.welcomeMessage}>
          <p className={welcomeStyles.title}>Welome to Extra Add-Ons!</p>
          <p className={welcomeStyles.message}>
            Here you will find great deals to boost your pet’s health. Same
            products at a very attractive price exclusively to subscribers!
          </p>
        </div>
      </div>
    </div>
  );
}
