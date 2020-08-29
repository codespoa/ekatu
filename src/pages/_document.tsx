import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            rel="stylesheet"
          />

          <link rel="icon" href="http://www.ekatu.com.br/fav.ico" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="content-language" content="pt-br" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

          <meta
            name="description"
            content="Conheça a ekatu uma ótima solução para o gerenciamento de energia"
          />
          <link rel="canonical" href="http://www.ekatu.com.br/" />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Ekatu Soluções exclusivas em energia"
          />
          <meta
            property="og:description"
            content="Conheça a ekatu uma ótima solução para o gerenciamento de energia"
          />
          <meta property="og:url" content="http://www.ekatu.com.br/" />
          <meta property="og:site_name" content="Egali Intercâmbio" />
          <meta
            property="og:image"
            content="http://www.ekatu.com.br/og-image.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="http://www.ekatu.com.br/og-image.jpg"
          />
          <meta property="og:image:width" content="700" />
          <meta property="og:image:height" content="400" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Conheça a ekatu uma ótima solução para o gerenciamento de energia"
          />
          <meta
            name="twitter:title"
            content="Ekatu Soluções exclusivas em energia"
          />
          <meta name="twitter:site" content="@ekatu" />
          <meta
            name="twitter:image"
            content="http://www.ekatu.com.br/og-image.jpg"
          />
          <meta name="twitter:creator" content="@ekatu" />

          <link rel="stylesheet" href="https://use.typekit.net/xcm1srh.css" />

          <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

          <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

          <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"

          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
