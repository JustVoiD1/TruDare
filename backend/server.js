
import express from "express";
import axios from "axios";
import cors from "cors"


const app = express();
app.use(cors({
  origin: `https://tru-dare-truthordare-git-master-mainaks-projects-ed66132a.vercel.app/`
}));

const PORT = process.env.PORT || 3000;

const geturl = (type, rating) =>`https://api.truthordarebot.xyz/v1/${type}?rating=${rating}`;

app.get("/api/:type", async (req, res) => {
    const { type } = req.params; // 'truth' or 'dare'
    const { rating } = req.query; // 'pg', 'pg13', etc.
  
    try {
      const url = geturl(type, rating || "pg");
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch from external API" });
    }
  });
  
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));