export interface ISubCategoryChat {
  links: ISubCategoryChatLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: ISubCategoryChatResult[];
}

export interface ISubCategoryChatLinks {
  next: string;
  previous: string;
}

export interface ISubCategoryChatResult {
  id: string;
  icon: string;
  category: string;
  name: string;
  description: string;
  child_categorys: string[];
}
