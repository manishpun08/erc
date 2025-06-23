export interface IVideoRoot {
  status: string;
  statusCode: number;
  message: string;
  data: IVideoDaum[];
}

export interface IVideoDaum {
  id: string;
  created_at: string;
  updated_at: string;
  title_en: string;
  title_np: string;
  description_en: string;
  description_np: string;
  video_url: string;
  thumbnail: string;
}
