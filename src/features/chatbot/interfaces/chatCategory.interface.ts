export interface IChatCategory {
  links: IChatCategoryLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: IChatCategoryResult[];
}

export interface IChatCategoryLinks {
  next: string;
  previous: string;
}

export interface IChatCategoryResult {
  id: string;
  name: string;
  description: string;
  image: string;
}
