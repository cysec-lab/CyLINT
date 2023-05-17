import { Timestamp, WithId } from "./firebase";

export type UserDocumentData = {
  createdAt: Timestamp;
  name: string | null;
};
export type User = WithId<UserDocumentData>;