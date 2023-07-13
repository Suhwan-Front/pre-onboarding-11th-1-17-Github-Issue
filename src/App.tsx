import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GithubProvider } from './contexts/GitHubContext/GitHubContext';
import IssueListPage from './pages/IssueListPage';
import IssueDetail from './components/IssueDetail/IssueDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <GithubProvider>
          <Header />
          <Routes>
            <Route path="/" Component={IssueListPage} />
            <Route path="/issue/:issueNumber" Component={IssueDetail} />
          </Routes>
        </GithubProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
