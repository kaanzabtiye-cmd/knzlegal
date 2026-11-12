import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { I18nProvider, LANGS, detectLang } from "./i18n.jsx";
import Layout from "./components/Layout.jsx";
import { About, Blog, Career, Contact, Home, NotFound, News, Post, Practice } from "./pages/index.jsx";

function ToAbout() {
  const { lang } = useParams();
  return <Navigate to={`/${lang}/about#kaan`} replace />;
}

function LangRoot() {
  const { lang } = useParams();
  // İlk parça bir dil değilse (ör. /hakkimizda) adres bizde yoktur: tarayıcı dilinde 404 göster.
  if (!LANGS.includes(lang)) return <Missing />;
  return (
    <I18nProvider>
      <Layout />
    </I18nProvider>
  );
}

/** Dil öneki olmayan, bilinmeyen adresler için 404 (dil tarayıcıdan ya da son tercihten). */
function Missing() {
  return (
    <I18nProvider lang={detectLang()}>
      <Layout><NotFound /></Layout>
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
        <Route path="people" element={<ToAbout />} />
        <Route path="people/:id" element={<ToAbout />} />
        <Route path="practice" element={<Practice />} />
        <Route path="practice/:id" element={<Practice />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Post />} />
        <Route path="news" element={<News />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}
