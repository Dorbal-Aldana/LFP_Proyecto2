import { Router } from "express";
import { analyze, error, home } from "../controllers/analyze.controller";

const analyzeRouter = Router();

analyzeRouter.get('/', home);
analyzeRouter.post('/analyze', analyze);
analyzeRouter.get('/syntacticError', error)

export default analyzeRouter;