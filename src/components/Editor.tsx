import React from 'react';
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
