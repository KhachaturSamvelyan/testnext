import MainProvider from "../app/providers/MainProvider";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <MainProvider Component={Component}>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default MyApp;
