import type { AppProps } from "next/app";
import "styles/globals.scss";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default App;
