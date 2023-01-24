import style from "../styles/navigation.module.css";
import buttonStyle from "../styles/buttons.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";

type navMenuProp = {
  isAuthenticated: boolean;
};

export default function NavigationMenu({ isAuthenticated }: navMenuProp) {
  const { user, error, isLoading } = useUser();

  return (
    <div className="navMenu">
      <div className={style.leftMenu}>
        <div className={style.branding}>
          <a role="button" href="#">
            <span className="material-symbols-outlined">diversity_2</span>
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
          {!!user?.sub && (
            <a href="#" className={style.navItem}>
              Playground
            </a>
          )}
        </div>
      </div>

      <div className={style.rightMenu}>
        {isAuthenticated ? (
          <>
            <div className={style.navUpgradeContainer}>
              <a role="button" href="" className={style.navUpgradeBtn}>
                <span className="material-symbols-outlined">bolt</span>
                Upgrade
              </a>
            </div>
            <div className={style.navSupportContainer}>
              <a href="#">
                <span className={style.btnLabelWrap}>
                  <span className={style.btnNode}>
                    <a role="button" href="">
                      <span className="material-symbols-outlined">help</span>
                    </a>
                  </span>
                  <span className={style.navSupportBtnText}>Help &zwj;</span>
                </span>
              </a>
            </div>
            <div className={style.navUserContainer}>
              <div className={style.avatar}>
                <span className="material-symbols-outlined">account_circle</span>
              </div>
              <div className={style.userDetails}>
                <div className={style.userDetailsText}>Personal</div>
              </div>
            </div>
            <div className={style.navSupportContainer}>
              <a href={"/api/auth/logout"} role="button">
                <span className={style.btnLabelWrap}>
                  <span className={style.btnNode}>
                    <span className="material-symbols-outlined">logout</span>{" "}
                  </span>
                  <span className={style.navSupportBtnText}>logout &zwj;</span>
                </span>
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="auth-header-menu-wrapper">
              <div className="auth-header-menu">
                <div className="auth-login-header">
                  <a href={"/api/auth/login"}>Log in</a>
                </div>
                <a className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.bgPrimary} auth-signup-btn`}>
                  <span className="btn-label-wrapper">
                    <span className="btn-label-inner">Sign up &zwj;</span>
                  </span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mobile-menu-toggl"></div>
      <style jsx>
        {`
          .navMenu {
            display: flex;
            height: var(--app-nav-height);
            padding: 0 24px;
            font-size: 14px;
            color: var(--gray-600);
            border-bottom: 1px solid #ececf1;
          }

          .auth-header-menu-wrapper {
            align-items: center;
            display: flex;
          }

          .auth-header-menu {
            align-items: center;
            display: flex;
            flex-wrap: nowrap;
            margin-left: 64px;
          }

          .auth-signup-btn {
            margin-left: 24px;
            background-color: #10a37f;
            color: #fff;
          }

          .auth-login-header {
            cursor: pointer;
            font-size: 14px;
            align-items: center;
            display: flex;
            color: var(--gray-600);
            padding: 10px 0;
            text-decoration: none;
          }

          .btn-label-wrapper {
            align-items: center;
            justify-content: center;
            opacity: 1;
            display: flex;
            width: 100%;
          }

          .btn-label-inner {
            align-items: center;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
