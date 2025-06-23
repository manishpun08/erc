export interface ISoaRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ISoaData;
}

export interface ISoaData {
  records: ISoaRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  prev: string;
  next: string;
  recordShown: number;
}

export interface ISoaRecord {
  id: string;
  title: string;
  company_name: string;
  address: string;
  conduct_of_application: string;
  date_of_application: string;
  date_of_commision_decision: string;
  status: string;
  remarks: string;
}
