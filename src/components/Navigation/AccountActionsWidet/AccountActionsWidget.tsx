import React from "react";
import { Divider, Popover } from "@mui/material";
import styles from "@/styles/navigation.module.css";
import { links } from "../../../constants/accounts";

type AccountActionsWidgetProps = {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  userMeta: { name: string; email: string };
};

export default function AccountActionsWidget({ anchorEl, handleClose, userMeta }: AccountActionsWidgetProps) {
  const open = Boolean(anchorEl);
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{ marginTop: "10px" }}
    >
      <div className={styles.popoverInner}>
        <div className={styles.widgetContainer}>
          <div className={styles.menuItem}>
            <div className={styles.userName}>{userMeta.name}</div>
            <div className={styles.userEmail}>{userMeta.email}</div>
          </div>

          <Divider sx={{ margin: ".4em 0" }} />

          {links.map((data, idx) => (
            <>
              <a
                key={idx}
                className={`${styles.menuItem} ${data.text === "Logout" ? styles.flexContainer : undefined}`}
                href={data.to}
                role="button"
              >
                <span className={styles.menuItemWrapper}>
                  <span className={styles.btnNode}>{data.icon}</span>
                  <span className={styles.navSupportBtnText}>{data.text} &zwj;</span>
                </span>
              </a>
              {idx === 2 && <Divider sx={{ margin: ".4em 0" }} />}
            </>
          ))}
        </div>
      </div>
    </Popover>
  );
}
