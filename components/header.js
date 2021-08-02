import headerStyles from "../styles/header.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderLink from "./headerLink";
import HeaderLinkSelected from "./headerLinkSelected";

export default function Header({ children, home }) {
  return (
    <nav className={headerStyles.navBar}>
      <div className={headerStyles.container}>
        <div className={headerStyles.logoView}>
          <div className={headerStyles.logoContainer}>
            <Image
              priority
              src="/images/logo.png"
              className={headerStyles.logo}
              layout="fill"
            />
          </div>
        </div>
        <div className={headerStyles.iconView}>
          <Image
            priority
            src="/icons/1.svg"
            className={headerStyles.icon}
            height={16}
            width={16}
          />
        </div>
        <div className={headerStyles.selection}>
          <HeaderLink svg="/icons/DashboardIcon.svg" title="Dashboard" />
          <HeaderLink svg="/icons/MyPetsIcon.svg" title="My Pets" />
          <HeaderLink
            svg="/icons/MySubscriptionsIcon.svg"
            title="My Subscriptions"
          />
          <HeaderLink svg="/icons/OrdersIcon.svg" title="Orders" />
          <HeaderLink svg="/icons/MyAccountIcon.svg" title="My Account" />
          <HeaderLinkSelected
            svg="/icons/ExtraAddOnsIcon.svg"
            title="Extra Add-Ons"
            color="red"
          />
          <HeaderLink svg="/icons/SignOutIcon.svg" title="Sign Out" />
        </div>
      </div>
    </nav>
  );
}
