type CodeEditorProps = {
  children: JSX.Element[];
};
export default function CodeEditor({ children }: CodeEditorProps) {
  return <div className="code-sample">{children}</div>;
}
