export interface IGalleryRoot {
  data: IGalleryData;
}

export interface IGalleryData {
  records: IGalleryRecord[];
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

export interface IGalleryRecord {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface IGalleryBanner {
  id: string;
  created_at: string;
  updated_at: string;
  title_en: string;
  title_np: string;
  image: string;
}

export interface IPhotoDetail {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: IPhotoDetailImage[];
}

export interface IPhotoDetailImage {
  id: string;
  image: string;
  created_at?: string;
  updated_at?: string;
  gallery?: string;
}
