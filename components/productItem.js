import mainStyles from "../styles/main.module.css";
import Image from "next/image";
import cn from "classnames";

export default function ProductItem({
  title,
  category,
  oldPrice,
  newPrice,
  percentageOff,
  image,
  benefit1,
  benefit2,
  benefit3,
  onPress,
  onShop,
}) {
  return (
    <div className={mainStyles.card}>
      <div className={mainStyles.topView}>
        <div className={mainStyles.categoryView}>
          <div
            className={cn({
              [mainStyles.dental]: category === "Dental",
              [mainStyles.probiotics]: category === "Probiotics",
              [mainStyles.mobility]: category === "Mobility",
              [mainStyles.skin]: category === "Skin & Coat",
              [mainStyles.health]: category === "Health & Wellness",
              [mainStyles.food]: category === "Food",
            })}
            onClick={onPress}
          >
            <p className={mainStyles.categoryText}>{category}</p>
          </div>
        </div>
        <div className={mainStyles.imageView}>
          <Image
            src={image}
            height={171.41}
            width={171.41}
            className={mainStyles.image}
          />
        </div>
      </div>

      <div className={mainStyles.infoView}>
        <div className={mainStyles.titleView}>
          <p className={mainStyles.titleText}>{title}</p>
        </div>
        <div className={mainStyles.subView}>
          <p className={mainStyles.subText}>Add to your subscription</p>
        </div>
        <div className={mainStyles.benefitsView}>
          <div className={mainStyles.benefitsBullet}>
            <div className={mainStyles.bulletView}>
              <Image src="/icons/Frame.svg" width={16} height={16} />
            </div>
            <p className={mainStyles.benefitsText}>{benefit1}</p>
          </div>
          <div className={mainStyles.benefitsBullet}>
          <div className={mainStyles.bulletView}>
              <Image src="/icons/Frame.svg" width={16} height={16} />
            </div>
            <p className={mainStyles.benefitsText}>{benefit2}</p>
          </div>
          <div className={mainStyles.benefitsBullet}>
          <div className={mainStyles.bulletView}>
              <Image src="/icons/Frame.svg" width={16} height={16} />
            </div>
            <p className={mainStyles.benefitsText}>{benefit3}</p>
          </div>
        </div>
        <div className={mainStyles.priceView}>
          <p className={mainStyles.priceText}>${newPrice}</p>
          <p className={mainStyles.priceOld}>${oldPrice}</p>
          <p className={mainStyles.priceOff}>({percentageOff})</p>
        </div>
        <div className={mainStyles.shopButtonView} onClick={onShop}>
          <p className={mainStyles.shopButtonText}>SHOP NOW</p>
        </div>
      </div>
    </div>
  );
}
