export interface Job {
  id: number;
  companyId: number;
  title: string;
  description: string;
  location: string;
  employment: string;
  salaryMin?: number;
  salaryMax?: number;
  isActive: boolean;
  hasApplied: boolean;
  createdAt: string;
  updatedAt: string;
  company: {
    companyName: string;
  }
}