import headerStyles from "../styles/header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HeaderLink({ svg, title }) {
  return (
    <Link href="" className={headerStyles.link}>
      <div className={headerStyles.linkDiv}>
        <Image src={svg} height={15} width={15} />
        <a className={headerStyles.linkText}>{title}</a>
      </div>
    </Link>
  );
}
