import Skeleton from "react-loading-skeleton";

export default function SkeletonLoading() {
  return (
    <div className="bg-white overflow-hidden border border-gray-200 p-3">
      <div className="m-2 text-justify text-sm">
        <p className="text-right text-xs">
          <Skeleton width={80} height={24} />
        </p>
        <h2 className="font-bold text-lg h-2 mb-8">
          <Skeleton width={180} height={24} />
        </h2>
        <p className="text-xs">
          <Skeleton width={"100%"} height={80} />
        </p>
        <div className="w-full text-right mt-3">
          <Skeleton width={60} height={24} />
        </div>
      </div>
    </div>
  );
}
