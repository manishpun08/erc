export interface IOrganizationSettingRoot {
  status: string;
  status_code: number;
  message: string;
  data: IOrganizationSettingDaum[];
}

export interface IOrganizationSettingDaum {
  id: string;
  favicon: string;
  gov_logo: string;
  erc_logo: string;
  org_name_eng: string;
  org_name_nepali: string;
  office_address: string;
  email: string;
  phone: string;
  fax: string;
  google_map: string;
  disclimer: string;
  domain: string;
  office_hours: IOrganizationSettingOfficeHour[];
  social_media: IOrganizationSettingSocialMedia;
  terms_condition: TermsCondition;
  privacy_policy: PrivacyPolicy;
  office_address_icon: string;
  email_icon: string;
  fax_icon: string;
  phone_icon: string;
}

export interface IOrganizationSettingOfficeHour {
  season: string;
  start_date: string;
  end_date: string;
  days: string;
  opening_time: string;
  closing_time: string;
}

export interface IOrganizationSettingSocialMedia {
  facebook: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  instagram: string;
  tiktok: string;
}

export interface TermsCondition {
  id: string;
  title: string;
  description: string;
}
export interface PrivacyPolicy {
  id: string;
  title: string;
  description: string;
}
