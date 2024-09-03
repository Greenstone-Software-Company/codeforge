import React, { useState } from 'react';

interface VisualProgrammingProps {
  onGenerateCode: (code: string) => void;
}

const VisualProgramming: React.FC<VisualProgrammingProps> = ({ onGenerateCode }) => {
  const [input, setInput] = useState('');

  const handleGenerateCode = () => {
    const generatedCode = `console.log("Generated: ${input}");`;
    onGenerateCode(generatedCode);
  };

  return (
    <div className="visual-programming">
      <h2>Visual Programming</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a value"
      />
      <button onClick={handleGenerateCode}>Generate Code</button>
    </div>
  );
};

export default VisualProgramming;
