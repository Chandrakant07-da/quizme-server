import express, { Router, Request, Response } from "express";
import { getQuizBySubject, getQuizThemeData } from "../services";
import connectToDB from "../db";
import { ResponseFormat } from "../interface";
const router: Router = Router();
(async () => {
  const db = await connectToDB();
  router.get("/subject-list", async (req: Request, res: Response) => {
    const response: ResponseFormat = await getQuizThemeData(db);
    res.send(response);
  });

  router.post("/subject", async (req, res: Response) => {
    const { subject = "" } = req.body;
    const response = await getQuizBySubject(db, subject);
    res.send(response);
  });
  // router.get("*", (req: Request, res: Response) => {
  //   const response: ResponseFormat = createErrorResponse();
  //   res.send(response);
  // });
})();
export default router;
