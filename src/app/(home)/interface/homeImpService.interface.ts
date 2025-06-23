export interface IServiceRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IServiceData;
}

export interface IServiceData {
  records: IServiceRecord[];
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

export interface IServiceRecord {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  ordering: number;
  images: IServiceImage[];
  files: IServiceFile[];
}

export interface IServiceImage {
  id: string;
  service_name: string;
  image: string;
}

export interface IServiceFile {
  id: string;
  service_name: string;
  file: string;
}
