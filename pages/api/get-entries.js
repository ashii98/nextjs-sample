import { query } from "lib/query";

export default async function getEntries(req, res) {
  if (req.method === "GET") {
    try {
      const results = await query(`
        SELECT * FROM entries
        ORDER BY id DESC
      `);
      return res.json(results);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  } else res.status(405).json({ message: "Method not allowed" });
}
