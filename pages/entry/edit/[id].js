import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";
// hooks
import useEntry from "hooks/entry";
// components
import Navbar from "components/navbar";
import Container from "components/container";
import Input from "components/input";
import Button from "components/button";

export default function EditEntry() {
  const router = useRouter();
  const entryId = router.query.id?.toString();
  const { entry } = useEntry(entryId);
  const [data, setData] = useState({
    id: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    setData({
      id: entry ? entry.id : "",
      title: entry ? entry.title : "",
      content: entry ? entry.content : "",
    });
  }, [entry])

  function editEntry(editData) {
    axios
      .post("/api/edit-entry", editData)
      .then(() => {
        toast.success("edited successfully!");
        router.push("/");
      })
      .catch((error) => toast.error(error.response.data.message));
  }

  return (
    <div>
      <Navbar title="New" />
      <Container>
        <div className="w-full flex flex-col items-center">
          <div className="w-6/12 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">
                Edit Entry
              </h2>
              <Input
                className="mt-4"
                placeholder="Please Enter Title..."
                name="title"
                type="text"
                value={data.title}
                onChange={(v) => setData({ ...data, title: v })}
              />
              <Input
                className="mt-4"
                placeholder="Please Enter Content..."
                name="content"
                type="textarea"
                value={data.content}
                onChange={(v) => setData({ ...data, content: v })}
              />
              <div className="w-full text-right mt-6">
                <Button onClick={() => editEntry(data)} title="Edit" color="green" icon="edit" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
