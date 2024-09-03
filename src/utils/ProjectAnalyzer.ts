export class ProjectAnalyzer {
  analyzeCode(code: string): string[] {
    const suggestions = [];
    if (code.length > 100) {
      suggestions.push("Consider breaking this code into smaller functions.");
    }
    if (!code.includes('try') && !code.includes('catch')) {
      suggestions.push("Add error handling with try-catch blocks.");
    }
    return suggestions;
  }
}

export const projectAnalyzer = new ProjectAnalyzer();
