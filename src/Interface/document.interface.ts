export interface IActRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IActData;
}

export interface IActData {
  subcategory: IActSubcategory;
  documents: IActDocuments;
  related_subcategories: IActRelatedSubcategory[];
}

export interface IActSubcategory {
  id: string;
  name: string;
  ordering: number;
  sub_ctg_slug: string;
  main_category: string;
  is_annual_report: boolean;
}

export interface IActDocuments {
  records: IActRecord[];
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

export interface IActRecord {
  id: string;
  title: string;
  description: string;
  slug: string;
  file: string;
  image: string;
  main_category: string;
  sub_category: string;
  sub_ctg_slug: string;
  created_at: string;
  updated_at: string;
}

export interface IActRelatedSubcategory {
  id: string;
  name: string;
  ordering: number;
  sub_ctg_slug: string;
  main_category: string;
}
