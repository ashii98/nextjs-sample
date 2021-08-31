import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-hot-toast";
import axios from "axios";
// hooks
import useEntry from "hooks/entry";
// components
import Container from "components/container";
import Navbar from "components/navbar";
import Button from "components/button";

export default function Entry() {
  const router = useRouter();
  const entryId = router.query.id?.toString();
  const { entry, isLoading } = useEntry(entryId);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Navbar title="Entry" />
      <Container>
        <div className="bg-white overflow-hidden border border-gray-200 p-3">
          <div className="inline-block float-right mr-2">
            <Button
              title=""
              icon="edit"
              color="yellow"
              className=" mr-2"
              onClick={() => {
                router.push(`/entry/edit/${entryId}`);
              }}
            />
            <Button
              title=""
              icon="delete"
              color="red"
              onClick={() => {
                if (entryId)
                  axios
                    .delete("/api/delete-entry", { data: { id: entryId } })
                    .then(() => {
                      toast.success("Entry deleted successfully");
                      router.push("/");
                    })
                    .catch((error) => toast.error(error.response.data.message));
              }}
            />
          </div>
          <div className="m-2 text-justify text-sm">
            <h1 className="font-bold text-3xl">{entry.title}</h1>
            <hr className="mb-3 mt-2" />
            <p>{entry.content}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Loading() {
  return (
    <div>
      <Navbar title="Entry" />
      <Container>
        <div className="bg-white overflow-hidden border border-gray-200 p-3">
          <div className="m-2 text-justify text-sm">
            <Skeleton className="mb-2" width={400} height={24} />
            <Skeleton width={"100%"} height={150} />
          </div>
        </div>
      </Container>
    </div>
  );
}
