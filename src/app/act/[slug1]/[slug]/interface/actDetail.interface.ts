export interface IActDetailRoot {
  status: string;
  status_code: number;
  message: string;
  data: IActDetailData;
}

export interface IActDetailData {
  id: string;
  created_at: string;
  main_category: string;
  sub_category: string;
  title: string;
  description: string;
  slug: string;
  file: string;
  image: string;
  is_active: boolean;
}
