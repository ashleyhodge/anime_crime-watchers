import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
// import SearchCrimes from "./pages/SearchCrimes";
// import SavedSamurais from "./pages/SavedSamurais";
import Navbar from "./components/Navbar";
import About from './pages/aboutus';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';


import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import LoginForm from "./components/LoginForm";

// Link to the GraphQL server on the backend
const httpLink = createHttpLink({
  uri: "/graphql",
});
// "Middleware" function to retrieve token and combine it with the existing httpLink
// We do not need the first parameter offered by setContext. Because of that, "_" is used as a placeholder to get to the second.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    /* ensures the return headers of every request includes the token */
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
// Instantiate the Apollo Client instance to connect to the API endpoint
const client = new ApolloClient({
  // Combining authLink with httpLink
  link: authLink.concat(httpLink),
  // Instantiate a new cache object
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Enable entire app to interact with the Apollo Client instance
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Router>
        <>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="aboutus" element={<About-Us />} />
            <Route path="blog" element={<Blog />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contactus" element={<Contact-Us />} /> */}
            {/* <Route exact path="/" component={SearchCrimes} />
            <Route exact path="/saved" component={SavedSamurais} /> */}
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </>
        <>
        {/* <main />
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <ContactForm></ContactForm>
          </> */}
     
     </>
      </Router>
    </ApolloProvider>
  );
}

export default App;