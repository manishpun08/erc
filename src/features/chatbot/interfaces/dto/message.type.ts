import { FileTypes } from "../file.types";

export interface IChatMessage {
  type: "chat_message" | string;
  sender_id: "user" | "VirtualAssistant";
  message: string;
  status?: "sending" | "sent" | "failed" | "typing";
  file?: string;
  file_type?: FileTypes | null;
  call_type?: string;
  created_at?: string;
  is_bot?: boolean;
  suggestions?: string[];
  category?: string;
  sub_category?: string;
  child_category?: string;
  question?: string;
  answers?: IChatAnswer[];
}

export interface IChatMessageHistoryResponse {
  links: Links;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: Results;
}

export interface Links {
  next: string;
  previous: string;
}

export interface Results {
  data: Data;
}

export interface Data {
  id: string;
  messages: Message[];
}

export interface Message {
  id: string;
  created_at: string;
  updated_at: string;
  message: string;
  file: string;
  file_type: FileTypes;
  call_type?: string;
  is_bot: boolean;
  room: string;
  sender: string;
}

export interface IChatAnswer {
  answer: string;
  suggestions: IChatAnswerSuggestion[];
}

export interface IChatAnswerSuggestion {
  id: string;
  suggestion: string;
}
