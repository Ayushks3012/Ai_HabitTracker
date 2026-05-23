import express from "express";
import { markComplete, unmarkComplete, getToday, getRange, getHeatmap, getHabitStats, getAllStats } from "../controllers/logController.js";
import { protect } from "../middleware/auth.js";


