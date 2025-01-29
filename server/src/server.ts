import dotenv from "dotenv";
import express from "express";
import heroRoutes from "./routes/hero.route.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", heroRoutes);

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app;
