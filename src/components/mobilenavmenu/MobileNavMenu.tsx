import { Modal } from "@mui/material";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";
import mobileNavStyle from "../../styles/mobile.nav.module.css";

type MobileNavMenuProps = {
  openNavMenu: boolean;
  handleCloseNavMenu: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
};

const style = {
  width: "100%",
  height: "100%",
  bgcolor: "white",
  p: 4,
};

const mobileMenuItems = [
  { data: "Overview", url: "https://platform.openai.com/" },
  { data: "Documentation", url: "https://platform.openai.com/docs" },
  { data: "Examples", url: "https://platform.openai.com/examples" },
  { data: "Playground", url: "/" },
  { data: "Guides", url: "#" },
  { data: "API Reference", url: "#" },
  { data: "Pricing", url: "#" },
  { data: "Account", url: "#" },
  { data: "Community Forumn", url: "#" },
  { data: "Terms & Policies", url: "#" },
  { data: "Logout", url: "/api/auth/logout" },
];

export default function MobileNavMenu({ openNavMenu, handleCloseNavMenu }: MobileNavMenuProps) {
  return (
    <Modal open={openNavMenu} onClose={handleCloseNavMenu} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div>
        <div className={mobileNavStyle.mobileMenu}>
          <div className={mobileNavStyle.mobileMenuHeader}>
            <div>
              <Diversity2Icon />
            </div>
            <button
              className={mobileNavStyle.cancelBtn}
              tabIndex={0}
              onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => handleCloseNavMenu(e as any, "escapeKeyDown")}
            >
              <span className="btn-label-wrap">
                <span className="btn-label-inner">
                  <ClearIcon />
                </span>
              </span>
            </button>
          </div>
          <div className={mobileNavStyle.mobileMenuItems}>
            {mobileMenuItems.map((item) => (
              <Link href={item.url} key={item.data} className={mobileNavStyle.navItem}>
                {item.data}
              </Link>
            ))}
          </div>
          <div className={mobileNavStyle.userSection}>
            <div className={mobileNavStyle.avatar}>
              <AccountCircleOutlinedIcon sx={{ fontSize: "2em" }} />
            </div>
            <div className={mobileNavStyle.userDetails}>
              <div className="user-details-text">Personal</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
