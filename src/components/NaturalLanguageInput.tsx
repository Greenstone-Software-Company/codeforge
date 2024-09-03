import React, { useState } from 'react';

interface NaturalLanguageInputProps {
  onGenerateCode: (code: string) => void;
}

const NaturalLanguageInput: React.FC<NaturalLanguageInputProps> = ({ onGenerateCode }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `// Code for: ${input}\nconsole.log("Executing: ${input}");`;
    onGenerateCode(generatedCode);
    setInput('');
  };

  return (
    <div className="natural-language-input">
      <h2>Natural Language Input</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your code..."
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default NaturalLanguageInput;
