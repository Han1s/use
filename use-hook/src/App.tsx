"use server";

import { createContext, Suspense } from "react";
import Messages from "./components/Messages";
import LoggedInInfo from "./components/LoggedInInfo";
import LoadingSpinner from "./components/LoadingSpinner";

export const fetchMessage = new Promise<{ title: string; body: string }[]>(
  (resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "Mollit excepteur esse magna culpa",
          body: "Incididunt sit laborum ut quis duis labore voluptate cillum cillum nulla commodo quis laborum minim.",
        },
        {
          title: "Cillum in proident do dolor qui",
          body: "Incididunt sit laborum ut quis duis labore voluptate cillum cillum nulla commodo quis laborum minim.",
        },
      ]);
      // reject("message could not be loaded");
    }, 2000);
  }
);

export const LoggedInContext = createContext<null | boolean>(null);

const App = () => {
  return (
    <LoggedInContext.Provider value={true}>
      <div className="h-screen bg-gray-300">
        <div className="text-center pt-4 flex flex-col gap-3">
          <LoggedInInfo show={false} />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            My messages:{" "}
          </h1>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Messages fetchMessage={fetchMessage} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </LoggedInContext.Provider>
  );
};

export default App;
