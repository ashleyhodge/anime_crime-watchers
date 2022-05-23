import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Analytics from './components/Analytics';
import Group from './components/Group';
import Footer from './components/Footer/index';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/Blog';

import Post from "./pages/Post";
import SinglePost from './pages/singlePost';
import Signup  from "./pages/Signup";
import Login from './pages/Login';
import Error from './pages/error';
import Profile from './pages/profile';

import "./App.css";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});



const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <main>
            <Navbar />
            <Hero />
            <Routes>
              <Route path="/Post" element={<Post />} />
              <Route path="/Post/:id" element={<SinglePost />} />
              <Route path="/signup" element={<Signup />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/profile/:username" element={<Profile />}/>
              <Route path="*" element={<Error />}/>
            </Routes>
          </main>
        </Router>
        <Analytics />
        <Blog />
         <Group />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;