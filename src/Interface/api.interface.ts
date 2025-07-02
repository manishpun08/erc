export interface IPagninationRespose<T> {
  status: string;
  statusCode: number;
  message: string;
  data: Data<T>;
}

export interface Data<T> {
  records: T[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;

  recordShown: number;
}
