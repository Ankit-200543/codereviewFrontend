import Editor from "@monaco-editor/react";

function CodeEditor({ value, onChange }) {
  return (
    <div className="h-full min-h-[400px] w-full overflow-hidden rounded-lg border border-slate-700">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 18,
          lineNumbers: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding:5
        }}
      />
    </div>
  );
}

export default CodeEditor;
