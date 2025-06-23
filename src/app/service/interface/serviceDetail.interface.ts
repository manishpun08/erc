export interface IServiceFile {
  id: string;
  service_name: string;
  file: string;
  title: string | null;
  created_at: string | null;
}

export interface IServiceRecord {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  ordering: number;
  is_important: boolean;
  images: string[]; // Assuming string URLs
  files: IServiceFile[];
}

export interface IServiceApiResponse {
  status: string;
  statusCode: number;
  message: string;
  data: {
    records: IServiceRecord[];
    totalRecords: number;
    perPage: number;
    totalPages: number;
    currentPage: number;
    pagingCounter: number;
    hasPrevious: boolean;
    hasNext: boolean;
    prev: string | null;
    next: string | null;
    recordShown: number;
  };
}
