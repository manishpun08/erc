export interface IEmployeeDetail {
  name: string;
  designation: string;
  image: string;
  email: string;
  phone_no?: number;
}

export interface IAboutRoot {
  status: string;
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  id: string;
  title: string;
  description: string;
  mission_vision: IAboutMissionVision[];
  goals_objectives: IAboutGoalsObjec[];
  function_duties_authorities: IAboutFunctionDutiesAuthority[];
  organizational_structure: IAboutOrganizationalStructure[];
  employee_details: IAboutEmployeeDetail[];
}

export interface IAboutMissionVision {
  select: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  slug: string;
}

export interface IAboutGoalsObjec {
  ordering: number;
  title: string;
  description: string;
  slug: string;
}

export interface IAboutFunctionDutiesAuthority {
  title: string;
  description: string;
}

export interface IAboutOrganizationalStructure {
  title: string;
  description: string;
  image: string;
}

export interface IAboutEmployeeDetail {
  name: string;
  designation: string;
  image: string;
  phone_no?: number;
  email: string;
}
