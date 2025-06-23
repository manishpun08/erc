export interface ISAORoot {
  links: ISAOLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: ISAOResult[];
}

export interface ISAOLinks {
  next: string;
  previous: string;
}

export interface ISAOResult {
  id: string;
  slug: string;
  title: string;
  description: string;
  details: ISAODetail[];
}

export interface ISAODetail {
  id: string;
  created_at: string;
  updated_at: string;
  company_name: string;
  address: string;
  conduct_of_application: string;
  date_of_application: string;
  date_of_commision_decision: string;
  status: string;
  remarks: string;
  application_status: string;
  application_status_title: string;
}
