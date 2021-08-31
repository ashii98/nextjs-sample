import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
// components
import Container from "components/container";
import Navbar from "components/navbar";
import Input from "components/input";
import Button from "components/button";

export default function New() {
  const router = useRouter();
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const createEntry = useCallback((data) => {
    axios
      .post("/api/create-entry", data)
      .then((res) => {
        toast.success("Submitted successfully!");
        router.push("/");
      })
      .catch((error) => toast.error(error.response.data.message));
  }, []);

  return (
    <div>
      <Navbar title="New" />
      <Container>
        <div className="w-full flex flex-col items-center">
          <div className="w-6/12 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">New Entry</h2>
              <Input
                className="mt-4"
                placeholder="Please Enter Title..."
                name="title"
                type="text"
                onChange={(v) => setData({ ...data, title: v })}
              />
              <Input
                className="mt-4"
                placeholder="Please Enter Content..."
                name="content"
                type="textarea"
                onChange={(v) => setData({ ...data, content: v })}
              />
              <div className="w-full text-right mt-6">
                <Button
                  onClick={() => createEntry(data)}
                  title="Submit"
                  color="green"
                  icon="add_circle_outline"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
