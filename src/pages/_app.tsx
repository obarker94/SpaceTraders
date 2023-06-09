import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "SpaceTraders/utils/api";

import "SpaceTraders/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "SpaceTraders/app/store";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default api.withTRPC(MyApp);
