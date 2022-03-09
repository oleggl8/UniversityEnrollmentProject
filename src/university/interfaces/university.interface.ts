export interface University {
  id?: string;
  name: string;
  maxNumberOfStudents: number;
  minGpa: number;
  students?: Array<string>;
}
