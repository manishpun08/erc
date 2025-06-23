export interface IEfiling {
  status: string;
  statusCode: number;
  message: string;
  data: IEfilingData;
}

export interface IEfilingData {
  id: string;
  title: string;
  description: string;
  document: string;
  image: string;
  filing_type: string;
  submission_date: string;
  is_approved: boolean;
  remarks: string;
}
