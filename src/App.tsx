import React, { useState, useEffect } from 'react';
import CodeEditor from './components/Editor';
import VisualProgramming from './components/VisualProgramming';
import NaturalLanguageInput from './components/NaturalLanguageInput';
import { aiService } from './services/AIService';
import { projectAnalyzer } from './utils/ProjectAnalyzer';

const App: React.FC = () => {
  const [code, setCode] = useState("// Start coding here");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [theme, setTheme] = useState('light');

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
      const aiSuggestion = aiService.getCodeSuggestion(value);
      const analysisSuggestions = projectAnalyzer.analyzeCode(value);
      setSuggestions([aiSuggestion, ...analysisSuggestions]);
    }
  };

  const handleGenerateCode = (generatedCode: string) => {
    setCode(prevCode => prevCode + '\n' + generatedCode);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <h1>CodeForge AI PoC</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <main>
        <div className="code-area">
          <CodeEditor code={code} onChange={handleCodeChange} />
        </div>
        <div className="sidebar">
          <VisualProgramming onGenerateCode={handleGenerateCode} />
          <NaturalLanguageInput onGenerateCode={handleGenerateCode} />
          <div className="suggestions">
            <h2>Suggestions</h2>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
