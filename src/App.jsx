import { Navigate, Route, Routes } from "react-router-dom";
import { I18nProvider, detectLang } from "./i18n.jsx";
import Layout from "./components/Layout.jsx";
import { About, Blog, Career, Contact, Home, News, Post, Practice } from "./pages/index.jsx";

function LangRoot() {
  return (
    <I18nProvider>
      <Layout />
    </I18nProvider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${detectLang()}`} replace />} />
      <Route path="/:lang" element={<LangRoot />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="practice" element={<Practice />} />
        <Route path="practice/:id" element={<Practice />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Post />} />
        <Route path="news" element={<News />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to={`/${detectLang()}`} replace />} />
    </Routes>
  );
}
