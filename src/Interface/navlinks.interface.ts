export interface INavLinksRoot {
  status: string;
  status_code: number;
  message: string;
  data: INavLinksCategory[];
}

export interface INavLinksCategory {
  id: string;
  name: string;
  main_ctg_slug: string;
  ordering: number;
  subcategories: INavLinksSubcategory[];
}

export interface INavLinksSubcategory {
  id: string;
  name: string;
  sub_ctg_slug: string;
  ordering: number;
  url: string;
  noTranslate?: boolean; // optional flag to skip translation
}
