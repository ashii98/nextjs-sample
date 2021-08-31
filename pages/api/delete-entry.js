import { query } from "lib/query";

export default async function DeleteEntry(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      if (!id) return res.status(400).json({ message: "`id` required" });
      if (typeof parseInt(id.toString()) !== "number")
        res.status(400).json({ message: "id must be number!" });

      const results = await query(
        `
        DELETE FROM entries
        WHERE id = ?
    `,
        id
      );

      return res.status(200).json({ message: "entry deleted!", results: results });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  } else return res.status(405).json({ message: "Method not allowed" });
}
