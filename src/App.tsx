import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import layouts
import { Header, Footer } from "./layouts";

// import pages
import { About, Home, Contact, Design, Location } from "./pages";

// global css

const GlobalStyles = createGlobalStyle`

    *{
      box-sizing: border-box;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
      font-family: 'Jost', sans-serif;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }


    /* global color variables */

    :root{
      --peach : #E7816B;
      --light-peach : #FFAD9B;
      --black : #1D1C1E;
      --white: #FFFFFF;
      --dark-grey : #333136;
      --light-grey :rgba(241, 243, 245, 0.857569)
    }

`;

function App() {
  return (
    <Main>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/design" element={<Design />}></Route>
          <Route path="/location" element={<Location />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Main>
  );
}

export default App;

const Main = styled.main`
  max-width: 1920px;
  width: 100%;
  margin: auto;
`;
