export interface IPdfModalRoot {
  status: string;
  status_code: number;
  message: string;
  data: IPdfModalDaum[];
}

export interface IPdfModalDaum {
  id: string;
  created_at: string;
  updated_at: string;
  document: string;
  is_active: boolean;
}
