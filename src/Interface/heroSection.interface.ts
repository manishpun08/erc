export interface IHeroSectionRoot {
  status: string;
  status_code: number;
  message: string;
  data: IHeroSectionDaum[];
}

export interface IHeroSectionDaum {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  image: string;
}
