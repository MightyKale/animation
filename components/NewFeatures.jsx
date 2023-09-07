import styles from "../styles";

const NewFeatures = ({imgUrl, title, subtitle}) => (
<div className={`${styles.flexStart} flex-col flex-1 sm:max-w-[250px] min-w-[210px]`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} alt={title} className="w-1/3 h-1/3 object-contain"/>
    </div>
    <h1 className="mt-[26px] font-bold text-white text-[24px] leading-[30px]">{title}</h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32px] text-[#B0B0B0]">{subtitle}</p>
    {/* <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">{text}</p> */}
  </div>
);

export default NewFeatures;
