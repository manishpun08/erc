export interface IFaq {
  status: string;
  statusCode: number;
  message: string;
  data: IFaqData[];
}

export interface IFaqData {
  id: string;
  question: string;
  answer: string;
}
