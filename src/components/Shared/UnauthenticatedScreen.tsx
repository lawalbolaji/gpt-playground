import buttonStyles from "@/styles/shared/buttons.module.css";
import Diversity2Icon from "@mui/icons-material/Diversity2";

export default function UnauthenticatedScreen() {
  return (
    <div className={"description"}>
      <div className={"bodyText"}>
        <div className="logo">
          <a role="button" href="#">
            <Diversity2Icon />
          </a>
        </div>
        <div className="auth-required-message">
          <h4 className="message-header">Authentication Required</h4>
          <div className="message-body">Please log in to access this page</div>
        </div>
        <div className="auth-buttons">
          <a href={"/api/auth/login"} className={`${buttonStyles.btn} ${buttonStyles.btnSmall} loginBtn`}>
            <span className="btn-label-wrapper">
              <span className="btn-label-inner">Log in</span>
            </span>
          </a>
          <a href={"/api/auth/login"} className={`${buttonStyles.btn} ${buttonStyles.btnSmall}`}>
            <span className="btn-label-wrapper">
              <span className="btn-label-inner">Sign up</span>
            </span>
          </a>
        </div>
      </div>

      <style jsx>
        {`
          a .material-symbols-outlined {
            font-size: 36px;
            color: var(--gray-600);
          }

          h4 {
            padding: 8px;
          }

          .auth-required-message {
            margin-bottom: 1em;
            margin-top: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 18px;
          }

          .auth-buttons {
            display: flex;
            align-items: center;
            gap: 1em;
          }

          .auth-buttons a {
            background-color: #ececf1;
            color: #353740;
          }

          .loginBtn {
            background-color: #10a37f !important;
            color: #fff !important;
          }

          .description {
            flex: 1 0 auto;
            font-size: 16px;
            line-height: 24px;
            margin: 0 auto;
            max-width: 100%;
            padding: var(--content-v-padding) var(--content-h-padding);
            width: calc(var(--content-width) + var(--content-h-padding) * 2);
          }

          .bodyText {
            max-width: 100%;
            margin: 15vh auto 0px;
            display: flex;
            flex-direction: column;
            -webkit-box-align: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
