export interface IFileUploadResponse {
  data: Data;
  message: string;
}

export interface Data {
  file_url: string;
  sender: string;
  room: null | string;
  message: string;
}

export type FileTypes = "image" | "video" | "document" | "audio";
