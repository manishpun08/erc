export interface INewsRoot {
  records: INewsRecord[];
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

export interface INewsRecord {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  description: string;
  main_category: string;
  sub_category: string;
  file: string;
  image: string;
}
