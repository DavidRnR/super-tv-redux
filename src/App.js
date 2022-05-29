import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import TvShowDetailsPage from './pages/TvShows/TvShowDetailsPage';
import TvShowsPage from './pages/TvShows/TvShowsPage';
import ContactPage from './pages/Contact/ContactPage';

function App () {
    return (
        <Provider store={store}>
            <BrowserRouter >
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/tvshows" element={<TvShowsPage />} />
                        <Route path="/tvshows/:tvshowId" element={<TvShowDetailsPage />} />
                    </Route>
                    <Route path="/" element={<Navigate to="/tvshows" replace />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
