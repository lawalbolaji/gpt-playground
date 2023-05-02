import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type BodyProps = {
  formatedCode: string;
};

export default function Body({ formatedCode }: BodyProps): JSX.Element {
  return (
    <div className="code-sample-body">
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers={true}
        lineNumberStyle={{ color: "#6e6e80", width: "2em", textAlign: "left" }}
        customStyle={{ margin: "0", marginTop: "-0.3px" }}
      >
        {formatedCode}
      </SyntaxHighlighter>
    </div>
  );
}
