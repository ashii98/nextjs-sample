import { query } from "lib/query";

export default async function editEntry(req, res) {
  if (req.method === "POST") {
    const { id, title, content } = req.body;
    try {
      if (!id || !title || !content)
        return res.status(400).json({ message: "`id`,`title`, and `content` are all required" });

      console.log(id, title, content);

      const results = await query(`UPDATE entries SET title = ?, content = ? WHERE id = ?`, [
        title,
        content,
        id,
      ]);

      return res.status(200).json({ message: "Entry edited successfully", results: results });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  } else res.status(405).json({ message: "Method not allowed" });
}
