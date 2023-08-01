import { ConvertToFormatResposne } from "../helper";
import { ResponseFormat, QuestionResponoseFormat } from "../interface";

export const getQuizThemeData = async (db: any) => {
  try {
    const collection = await db.collection("quiz_subjects");
    let data = (await collection.find({}).toArray()) || [];
    if (data?.length > 0) {
      data = data[0];
    }
    data = data?.subjects;
    const finalResponse: ResponseFormat = ConvertToFormatResposne(
      true,
      data,
      "",
      "200"
    );
    return finalResponse;
  } catch (error: any) {
    console.log("Error ", error);
    const finalResponse: ResponseFormat = ConvertToFormatResposne(
      false,
      {},
      "Error in fetching Data from DB",
      "400"
    );
    return finalResponse;
  }
};

export const getQuizBySubject = async (db: any, subject: string) => {
  try {
    const collection = await db.collection("quiz_dummy");
    let data = (await collection.find({ subject: subject }).toArray()) || [];
    if (data?.length > 0) {
      data = data[0];
    }
    let questionSetData: QuestionResponoseFormat = {
      subject: "",
      questionSet: [],
    };
    if (data?.subject && data?.questionSet?.length > 0) {
      questionSetData = {
        subject: data?.subject,
        questionSet: data?.questionSet,
      };
    }

    const finalResponse: ResponseFormat = ConvertToFormatResposne(
      true,
      questionSetData,
      "",
      "200"
    );
    return finalResponse;
  } catch (error: any) {
    console.log("Error ", error);
    const finalResponse: ResponseFormat = ConvertToFormatResposne(
      false,
      {},
      "Error in fetching Data from DB",
      "400"
    );
    return finalResponse;
  }
};
