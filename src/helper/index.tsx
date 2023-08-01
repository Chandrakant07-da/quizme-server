import { ResponseFormat } from "../interface";
export const ConvertToFormatResposne = (
  success = false,
  response = {},
  error = "",
  code = "400"
) => {
  return {
    success,
    response,
    error,
    code,
  };
};
