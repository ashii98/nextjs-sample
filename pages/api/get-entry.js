import { query } from "lib/query";

export default async function getEntry(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      if (!id) return res.status(400).json({ message: "`id` required!" });
      if (typeof parseInt(id.toString()) !== "number")
        res.status(400).json({ message: "`id` must be a number!" });

      const results = await query(
        `
            SELECT id, title, content FROM entries
            WHERE id = ?
        `,
        id
      );

      if (results.length) return res.json(results[0]);
      else return res.status(404).json({ message: "Not found!" });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  } else res.status(405).json({ message: "Method not allowed" });
}
