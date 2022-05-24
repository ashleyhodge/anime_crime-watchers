import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Analytics from './components/Analytics';
import Group from './components/Group';
import Footer from './components/Footer/index';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Blog from './components/BlogPosts';
import Signup  from "./pages/Signup";
import Login from './pages/Login';
import Home from './pages/Home';
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
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              
              {/* <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/login"
                element={<Login />}
              /> */}
              
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;