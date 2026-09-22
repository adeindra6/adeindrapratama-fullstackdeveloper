type ApplicationStatus =
  | "Applied"
  | "Reviewing"
  | "Shortlisted"
  | "Accepted"
  | "Rejected";

export interface Application {
  id: string;
  company: string;
  title: string;
  location: string;
  updatedAt: string;
  status: ApplicationStatus;
}