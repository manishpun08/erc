export interface ISeoRoot {
  status: string;
  statusCode: number;
  message: string;
  data: ISeoData;
}

export interface ISeoData {
  id: string;
  og_image: string;
  created_at: string;
  updated_at: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  og_title: string;
  og_description: string;
  og_url: string;
  canonical_url: string;
  robots: string;
  structured_data: string;
  custom_header: string;
  seo_for: string;
}
