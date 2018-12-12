import App, { Container, DefaultAppIProps } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import ApolloClient from 'apollo-client/ApolloClient';

interface AppIProps extends DefaultAppIProps {
  apollo?: ApolloClient<any>
}

class MyApp extends App<AppIProps> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes query to user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp);