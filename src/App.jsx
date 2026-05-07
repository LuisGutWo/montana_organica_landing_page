import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppTestimonials from "./components/testimonials";
import AppBlog from "./components/blog";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";

import AppProducts from "./components/products";
import AppStores from "./components/stores";
import CookieNotice from "./components/CookieNotice";

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppProducts />
        <AppStores />
        <AppTestimonials />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
      <CookieNotice />
    </div>
  );
}

export default App;
