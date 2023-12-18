import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'
import { csrfFetch, restoreCSRF } from './store/csrf';
import SignupForm from './features/session/sessionComponents/SignUp';
import LoginForm from './features/session/sessionComponents/Login';
//import HomePage from './components/HomePage';
import BlogList from './components/blog/BlogList';
import App from './App';
import FullBlog from './components/blog/FullBlog';
import CreateBlogForm from './components/blog/AddPost';
import EditBlogForm  from './components/blog/EditPost';



if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();
  window.csrfFetch = csrfFetch;
  window.store = store;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >

        <Route path="signup" element={<SignupForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="blogs/:id" element={<FullBlog />}/>
        <Route path="blogs/new/" element={<CreateBlogForm />}/>
        <Route path="blogs/:blogId/edit" element={<EditBlogForm />}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
