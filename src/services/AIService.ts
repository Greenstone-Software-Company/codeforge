export class AIService {
  getCodeSuggestion(currentCode: string): string {
    if (currentCode.includes('console.log')) {
      return 'console.error("This is an error message");';
    }
    if (currentCode.includes('function')) {
      return 'return result;';
    }
    return '// AI suggestion: Consider adding error handling';
  }
}

export const aiService = new AIService();
