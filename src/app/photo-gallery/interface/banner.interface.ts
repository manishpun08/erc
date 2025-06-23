export interface IBannerRoot {
  status: string;
  status_code: number;
  message: string;
  data: IBannerRootDaum[];
}

export interface IBannerRootDaum {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  image: string;
}
