import { query } from "lib/query";

export default async function createEntry(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;
    try {
      if (!title || !content)
        return res.status(400).json({ message: "`title` and `content` are both required." });

      const results = await query(
        `
        INSERT INTO entries (title, content)
        VALUES (?, ?)
      `,
        [title, content]
      );

      return res.json(results);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  } else res.status(405).json({ message: "Method not allowed" });
}
