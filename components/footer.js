import footerStyles from "../styles/footer.module.css";
import Image from "next/image";

export default function Footer({ children, home }) {
  return (
    <div className={footerStyles.view}>
      <div className={footerStyles.contentView}>
        <div className={footerStyles.imageView}>
          <Image
            src="/images/secondaryLogo.png"
            height={171.41}
            width={171.41}
          />
        </div>
        <div className={footerStyles.bottomView}>
          <div className={footerStyles.line}></div>
          <div className={footerStyles.textView}>
            <p className={footerStyles.text}>© 2021 Petlab Co.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
