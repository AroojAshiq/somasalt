import Section from "@/components/Misc/Section/Section";
import Navbar from "../Navbar/Navbar";
import Button from "@/components/Misc/Button/Button";
import Text from "@/components/Misc/Text/Text";
import CheckBox from "@/components/Misc/Checkbox/CheckBox";
import Image from "next/image";
import { Switch, HalfCircle, Arrow } from "@/Icons/icons";
import styles from "./heroSection.module.scss";

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.container_main}>
          <div className={styles.container_main_textSection}>
            <div className={styles.container_main_textSection_headingDiv}>
              <div
                className={styles.container_main_textSection_headingDiv_heading}
              >
                <h1>
                  Be United In <br /> Purpose And The
                  <span>Pursuit Of Christ</span>
                </h1>
              </div>
              <div
                className={
                  styles.container_main_textSection_headingDiv_headingIcon
                }
              >
                <div className={styles.pin1}>
                  <Switch />
                </div>
                <div className={styles.pin2}>
                  <Image src="/assets/pin2.svg" width={50} height={50} />
                </div>
              </div>
            </div>
            <div className={styles.heading2}>
              <div className={styles.heading2_heading}>
                <h1>
                  Be United In Purpose <br /> And The
                  <span>&nbsp; Pursuit Of</span> <br /> <span> Christ</span>
                </h1>
              </div>
              <div className={styles.heading2_headingIcon}>
                <Image src="/assets/pin2.svg" width={40} height={40} />
              </div>
            </div>
            <div className={styles.btn}>
              <Button variant="style-1">Join Us Today</Button>
            </div>
          </div>
          <div className={styles.container_main_image}>
            <div className={styles.container_main_image_frame}>
              <div className={styles.image1}>
                <Image src="/assets/heroimage.svg" width={1000} height={500} />
              </div>
              <div className={styles.image2}>
                <Image src="/assets/hero2.svg" width={1000} height={500} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_upperDiv}>
          <div className={styles.container_upperDiv_halfCircle}>
            <HalfCircle />
          </div>
          <div className={styles.container_upperDiv_arrow}>
            <Arrow width={250} height={135} />
          </div>
          {/* <div className={styles.container_upperDiv_connect}>
              <Text variant="title-2"> Connect To Experience</Text>
              <CheckBox content="Faith" />
              <CheckBox content="Friendship" />
              <CheckBox content="Fellowship" />
            </div> */}
        </div>
      </div>
    </div>
  );
}
