export interface IChatAnswerQuestion {
  category: string;
  sub_category: string;
  child_category: string;
  question: string;
  answers: IChatAnswer[];
}

export interface IChatAnswer {
  answer: string;
  suggestions: IChatAnswerSuggestion[];
}

export interface IChatAnswerSuggestion {
  id: string;
  suggestion: string;
}
