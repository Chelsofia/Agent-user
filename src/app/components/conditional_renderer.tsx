import React, { ComponentProps, FC, JSX, ReactNode } from "react";
import ContentLoader from "react-content-loader";
import { EmptyState } from "./empty_state";

type ConditionalRenderProps = JSX.IntrinsicElements["div"] & {
  children: ReactNode;
  isFetching?: boolean;
  isError?: boolean;
  emptyState?: ComponentProps<typeof EmptyState>;
};

export const ConditionalRender: FC<ConditionalRenderProps> = ({
  children,
  isFetching,
  isError,
  emptyState,
}) => {
  if (isFetching) {
    return (
      <div className="py-6">
        <ContentLoader viewBox="0 0 380 70">
          <rect x="0" y="0" rx="5" ry="5" width="380" height="70" />
        </ContentLoader>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-5 text-center">
        <h3 className="text-sm font-semibold text-gray-900">Error</h3>
        <p className="mt-1 text-sm text-gray-500">
          An error occurred while fetching the data.
        </p>
      </div>
    );
  }

  if (emptyState) {
    return <EmptyState {...emptyState} />;
  }

  return <>{children}</>;
};
