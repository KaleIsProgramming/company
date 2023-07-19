import { useEffect } from 'react';
import { useAppDispatch } from './store';
import { fetchCourses, fetchCompanies, fetchUsers, fetchArticles, fetchExperts, fetchServices } from './store/slices';
import { Route, Routes } from 'react-router-dom'
import { AboutUsPage, ConsultingPage, ContactPage, CoursesPage, NewsPage, CoursePage, FormPage, OpenedArcticlePage } from './pages/UserPage';
import { NavContainer } from './components/NavBar';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchCompanies());
    dispatch(fetchUsers());
    dispatch(fetchArticles());
    dispatch(fetchExperts());
    dispatch(fetchServices());
  },[]);

  return (
    <NavContainer>
        <Routes>
          <Route path='/' element={<AboutUsPage />}/>                   
          <Route path='/doradztwo' element={<ConsultingPage />}/>                   
          <Route path='/kontakt' element={<ContactPage />}/>                   
          <Route path='/szkolenia' element={<CoursesPage />}/>                   
          <Route path='/szkolenie/:courseID' element={<CoursePage />}/>                   
          <Route path='/aktualnosci' element={<NewsPage />}/>                   
          <Route path='/aktualnosc/:articleID' element={<OpenedArcticlePage />}/>                   
          <Route path='/formularz-zgloszeniowy' element={<FormPage />}/>                   
        </Routes>
    </NavContainer>
  );
};

export default App;
