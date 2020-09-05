import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'site-settings/site-theme/default';
import { AppProvider } from 'contexts/app/app.provider';
import { LanguageProvider } from 'contexts/language/language.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { useApollo } from 'utils/apollo';
import { useMedia } from 'utils/use-media';
import AppLayout from 'layouts/app-layout';
import { messages } from 'site-settings/site-translation/messages';

export default function ExtendedApp({ Component, pageProps }) {
  const mobile = useMedia('(max-width: 580px)');
  const tablet = useMedia('(max-width: 990px)');
  const desktop = useMedia('(min-width: 991px)');
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
      <LanguageProvider messages={messages}>
        <AppProvider>
          <AuthProvider>
            <AppLayout>
              <Component
                {...pageProps}
                deviceType={{ mobile, tablet, desktop }}
              />
            </AppLayout>
          </AuthProvider>
        </AppProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
