import { IPagninationRespose } from "./api.interface";

export interface ICommissionRecord {
  id: string;
  slug: string;
  ordering: number;
  name: string;
  designation: string;
  email: string;
  profile: string;
  image: any;
  is_chairperson: boolean;
  is_former_chairperson: boolean;
  is_former_member: boolean;
  chairperson_message: ICommissionChairpersonMessage;
}

export interface ICommissionChairpersonMessage {
  id: string;
  title: string;
  description: string;
}

export type ICommissionRoots = IPagninationRespose<ICommissionRecord>;
