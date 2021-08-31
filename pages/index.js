import moment from "moment";
// hooks
import useEntries from "hooks/entries";
// components
import Container from "components/container";
import SkeletonLoading from "components/loading";
import Navbar from "components/navbar";
import CustomLink from "components/link";

export default function IndexPage() {
  const { entries, isLoading } = useEntries();

  if (isLoading)
    return (
      <div>
        <Navbar title={"Home"} />
        <Container>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mb-10">
            {createLoading()}
          </div>
        </Container>
      </div>
    );

  return (
    <div>
      <Navbar title={"Home"} />
      <Container>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 mb-10">
          {entries.map((item, key) => {
            return (
              <div key={key} className="bg-white overflow-hidden border border-gray-200 p-3">
                <div className="m-2 text-justify text-sm">
                  <p className="text-right text-xs">
                    {moment(item.updated_at).format("YYYY/MM/DD")}
                  </p>
                  <h2 className="font-bold text-lg h-2 mb-8">{item.title}</h2>
                  <p className="text-xs">{item.content}</p>
                  <div className="w-full text-right mt-3">
                    <CustomLink title="Read More" href={`/entry/${item.id}`} color="indigo" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function createLoading() {
  let temp = [];
  for (let i = 0; i < 6; i++) temp.push(<SkeletonLoading key={i} />);
  return temp;
}
