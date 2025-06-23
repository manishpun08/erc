export interface IMissionVisionRoot {
  status: string;
  status_code: number;
  message: string;
  data: IMissionVisionDaum[];
}

export interface IMissionVisionDaum {
  id: string;
  title: string;
  description: string;
  image: string;
  mission_vision: IMissionVisionMissionVision[];
  goals_objectives: IMissionVisionGoalsObjec[];
  seo: IMissionVisionSeo;
}

export interface IMissionVisionMissionVision {
  id: string;
  about: string;
  select: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface IMissionVisionGoalsObjec {
  id: string;
  about: string;
  ordering: number;
  title: string;
  description: string;
}

export interface IMissionVisionSeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
}
