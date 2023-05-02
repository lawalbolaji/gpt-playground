import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import style from "@/styles/navigation.module.css";
import buttonStyle from "@/styles/shared/buttons.module.css";
import BoltIcon from "@mui/icons-material/Bolt";
import MenuIcon from "@mui/icons-material/Menu";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountActionsWidget from "./AccountActionsWidet/AccountActionsWidget";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

type navMenuProp = {
  isAuthenticated: boolean;
  isOnMobileScreen: boolean;
  setOpenNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
  userMeta?: UserProfile;
};

type linkMeta = {
  to: string;
  text: string;
};
const links: Array<linkMeta> = [
  { to: "https://platform.openai.com/", text: "Overview" },
  { to: "https://platform.openai.com/docs", text: "Documentation" },
  { to: "https://platform.openai.com/docs/api-reference", text: "API Reference" },
  { to: "https://platform.openai.com/examples", text: "Examples" },
];

export const FullscreenNavMenu = ({ isAuthenticated, isOnMobileScreen, setOpenNavMenu, userMeta }: navMenuProp) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  return (
    <div className={style.navMenu}>
      <div className={style.leftMenu}>
        <div className={style.branding}>
          <a role="button" href="#">
            <Diversity2Icon />
          </a>
        </div>

        {isOnMobileScreen ? (
          <></>
        ) : (
          <div className={style.menuContainer}>
            {links.map((data, idx) => (
              <a key={idx} href={data.to} className={style.navItem}>
                {data.text}
              </a>
            ))}

            {!!isAuthenticated && (
              <Link href="/" className={style.navItem} style={{ color: "var(--green-600)" }}>
                Playground
              </Link>
            )}
          </div>
        )}
      </div>

      {isOnMobileScreen ? (
        <div className={style.rightMenu}>
          <div className={style.navSupportContainer} style={{ marginRight: "20px" }}>
            <a href="#">
              <span className={style.btnLabelWrap}>
                <span className={style.btnNode}>
                  <HelpOutlineOutlinedIcon sx={{ fontSize: "1.3rem" }} />
                </span>
                <span className={style.navSupportBtnText}>Help &zwj;</span>
              </span>
            </a>
          </div>

          <div>
            <a href="#" role="button">
              <span className={style.btnNode}>
                <MenuIcon
                  sx={{ fontSize: "2em" }}
                  onClick={() => {
                    setOpenNavMenu(true);
                  }}
                />
              </span>
            </a>
          </div>
        </div>
      ) : (
        <div className={style.rightMenu}>
          {isAuthenticated ? (
            <>
              <div className={style.navUpgradeContainer}>
                <a role="button" href="https://platform.openai.com/account/billing/overview" className={style.navUpgradeBtn}>
                  <BoltIcon />
                  Upgrade
                </a>
              </div>
              <div className={style.navSupportContainer}>
                <a href="#">
                  <span className={style.btnLabelWrap}>
                    <span className={style.btnNode}>
                      <HelpOutlineOutlinedIcon sx={{ fontSize: "1.3rem" }} />
                    </span>
                    <span className={style.navSupportBtnText}>Help &zwj;</span>
                  </span>
                </a>
              </div>
              <div
                className={style.navUserContainer}
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <div className={style.avatar}>
                  {!!userMeta?.picture ? (
                    <Image src={userMeta.picture} alt="profile" width={32} height={32} />
                  ) : (
                    <AccountCircleOutlinedIcon />
                  )}
                </div>
                <div className={style.userDetails}>
                  <div className={style.userDetailsText}>Personal</div>
                </div>
              </div>
              {!!userMeta?.name && !!userMeta?.email && (
                <AccountActionsWidget
                  anchorEl={anchorEl}
                  handleClose={() => {
                    setAnchorEl(null);
                  }}
                  userMeta={{ name: userMeta?.name, email: userMeta?.email }}
                />
              )}
            </>
          ) : (
            <>
              <div className={style.authHeaderMenuWrapper}>
                <div className={style.authHeaderMenu}>
                  <div className={style.authLoginHeader}>
                    <a href={"/api/auth/login"}>Log in</a>
                  </div>
                  <a className={`${buttonStyle.btn} ${buttonStyle.btnSmall} ${buttonStyle.bgPrimary} ${style.authSignupBtn}`}>
                    <span className={style.btnLabelWrap}>
                      <span className={style.btnLabelInner}>Sign up &zwj;</span>
                    </span>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
