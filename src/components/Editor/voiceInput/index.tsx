import MicIcon from "@mui/icons-material/Mic";

export default function VoiceInputComponent(props: {}) {
  return (
    <button
      className="voiceInput"
      onClick={(e: any) => {
        console.log("Hello, we are working hard to bring this feature to you soon!");
      }}
    >
      <span className="labelWrap">
        <span className="labelInner">
          <MicIcon />
        </span>
      </span>
      <style jsx>
        {`
          .voiceInput {
            position: absolute;
            right: 11px;
            top: 1.2em;
            z-index: 2;
            color: #10a37f;
            background-color: transparent;
            text-decoration: none;
            border: none;
            border-radius: 3px;
            box-sizing: border-box;
            cursor: pointer;
            display: inline-flex;
            font-weight: 400;
            justify-content: center;
            transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
            user-select: none;
          }

          .labelWrap {
            align-items: center;
            justify-content: center;
            opacity: 1;
            display: flex;
            width: 100%;
          }

          .labelInner {
            display: flex;
            line-height: 1;
          }
        `}
      </style>
    </button>
  );
}
