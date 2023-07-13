import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListProvider } from './contexts/provider/ListProvider';
import { DetailProvider } from './contexts/provider/DetailProvider';
import IssueListPage from './pages/IssueListPage';
import IssueDetail from './components/IssueDetail/IssueDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <ListProvider>
          <DetailProvider>
            <Header />
            <Routes>
              <Route path="/" Component={IssueListPage} />
              <Route path="/issue/:issueNumber" Component={IssueDetail} />
            </Routes>
          </DetailProvider>
        </ListProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
