import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GithubProvider } from './contexts/GitHubContext/GitHubContext';
import IssueList from './components/IssueList/IssueList';
import IssueDetail from './components/IssueDetail/IssueDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <GithubProvider>
          <Routes>
            <Route path="/" Component={IssueList} />
            <Route path="/issue/:issueNumber" Component={IssueDetail} />
          </Routes>
        </GithubProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
