export interface User {
  id: string;
  avatar: string;
  name: string;
}
export interface Message {
  id: string;
  userId: string;
  createdAt: Date;
  text: string;
}
export type AsyncState = null | "loading" | "error" | "complete";
export interface ApiResponse {
  location: string;
  noun: string;
  verb: string;
}