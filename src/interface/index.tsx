export interface ResponseFormat {
  success: boolean | null | undefined;
  code: string | number | null | undefined;
  error: string | null | undefined;
  response: any | undefined;
}
interface Question {
  question: string;
  correct_answer_index: number;
  options: string[];
}
export interface QuestionResponoseFormat {
  subject: string;
  questionSet: Question[] | [];
}
