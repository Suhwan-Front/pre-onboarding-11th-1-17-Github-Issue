import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListProvider } from './contexts/provider/ListProvider';
import { DetailProvider } from './contexts/provider/DetailProvider';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';
import Header from './components/Header/Header';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <ListProvider>
          <DetailProvider>
            <Header />
            <Routes>
              <Route path="/" Component={IssueListPage} />
              <Route path="/issue/:issueNumber" Component={IssueDetailPage} />
            </Routes>
          </DetailProvider>
        </ListProvider>
      </BrowserRouter>
      <LoadingScreen />
    </>
  );
}

export default App;
