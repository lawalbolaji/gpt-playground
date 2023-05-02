import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import HandshakeIcon from "@mui/icons-material/Handshake";

type linkMeta = {
  to: string;
  icon: React.ReactNode;
  text: string;
};
export const links: Array<linkMeta> = [
  { to: "https://help.openai.com/en/", icon: <HelpOutlineOutlinedIcon sx={{ fontSize: "1rem" }} />, text: "Help" },
  { to: "https://openai.com/pricing", icon: <CurrencyBitcoinIcon sx={{ fontSize: "1rem" }} />, text: "Pricing" },
  { to: "https://openai.com/policies", icon: <HandshakeIcon sx={{ fontSize: "1rem" }} />, text: "Terms & Policies" },
  { to: "/api/auth/logout", icon: <LogoutOutlinedIcon sx={{ fontSize: "1rem" }} />, text: "Logout" },
];
