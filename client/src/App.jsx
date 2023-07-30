import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const NewPost = lazy(() => import('./NewPost'));
const PostPage = lazy(() => import('./PostPage'));
import SpinnerFullPage from './SpinnerFullPage';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
