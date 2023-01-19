import style from "../styles/navigation.module.css";
import Image from "next/image";

export default function NavigationMenu() {
  return (
    <>
      <div className={style.leftMenu}>
        <div className={style.branding}>
          <a role="button" href="#">
            <Image
              src="https://super.so/icon/dark/layers.svg"
              alt=""
              height="24"
              width="24"
            />
          </a>
        </div>
        <div className={style.menuContainer}>
          <a href="#" className={style.navItem}>
            Overview
          </a>
          <a href="#" className={style.navItem}>
            Documentation
          </a>
          <a href="#" className={style.navItem}>
            Examples
          </a>
          <a href="#" className={style.navItem}>
            Playground
          </a>
        </div>
      </div>

      <div className={style.rightMenu}>
        <div className={style.navUpgradeContainer}>
          <a role="button" href="" className={style.navUpgradeBtn}>
            <span className="material-symbols-outlined">bolt</span>
            Upgrade
          </a>
        </div>
        <div className={style.navSupportContainer}>
          <button tabIndex={0}>
            <span className={style.btnLabelWrap}>
              <span className={style.btnNode}>
                <a role="button" href="">
                  <span className="material-symbols-outlined">help</span>
                </a>
              </span>
              <span className={style.navSupportBtnText}>Help &zwj;</span>
            </span>
          </button>
        </div>
        <div className={style.navUserContainer}>
          <div className={style.avatar}>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div className={style.userDetails}>
            <div className={style.userDetailsText}>Personal</div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-toggl"></div>
    </>
  );
}
