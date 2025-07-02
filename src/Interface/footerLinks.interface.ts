import { IPagninationRespose } from "./api.interface";

export interface IImportantRecord {
  id: string;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
}
export type IImportantLinks = IPagninationRespose<IImportantRecord>;

export interface IAffiliatedOrg {
  id: string;
  name: string;
  url: string;
  created_at: string;
  updated_at: string;
}
