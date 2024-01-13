import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const WaitSkeleton = () => {
  return (
    <div className="flex h-[800px] flex-col gap-4 rounded-xl">
      <Skeleton className="h-12 w-full rounded-full" />

      <Skeleton className=" h-4 w-full rounded-full" />

      <Skeleton className="h-12 w-44 rounded-full" />
      <Skeleton className="h-12 w-full rounded-full" />

      <Skeleton className="mt-4 h-4 w-full rounded-full" />

      <Skeleton className="h-12 w-44 rounded-full" />
      <Skeleton className="h-12 w-full rounded-full" />
      <Skeleton className="h-12 w-44 rounded-full" />
      <Skeleton className="h-12 w-full rounded-full" />

      <Skeleton className="mt-4 h-4 w-full rounded-full" />

      <Skeleton className="h-12 w-44 rounded-full" />
      <Skeleton className="h-12 w-full rounded-full" />

      <Skeleton className="mt-4 h-4 w-full rounded-full" />

      <Skeleton className="h-12 w-44 rounded-full" />
    </div>
  );
};

export default WaitSkeleton;
