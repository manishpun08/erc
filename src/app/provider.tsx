"use client";
import { Provider } from "react-redux";
import { ProgressProvider } from "@bprogress/next/app";
import { Toaster } from "sonner";
import store from "@/store/store";

const Providers: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <>
      <ProgressProvider
        height="4px"
        color="#001f51"
        options={{ showSpinner: false }}
        shallowRouting
      >
        <Toaster />

        <Provider store={store}>{children}</Provider>
      </ProgressProvider>
    </>
  );
};
export default Providers;
