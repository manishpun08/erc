export interface IHomeHeroRoot {
  status: string;
  status_code: number;
  message: string;
  data: IHomeHeroDaum[];
}

export interface IHomeHeroDaum {
  id: string;
  slogan: string;
  title: string;
  image: string;
  description: string;
  seo: IHomeHeroSeo;
}

export interface IHomeHeroSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
