import React, { useContext, useEffect, useState } from 'react';
import { GitHubContext } from '../../contexts/GitHubContext/GitHubContext';
import { Link } from 'react-router-dom';

const IssueList = () => {
  const { issueList, fetchIssueList } = useContext(GitHubContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchIssueList();
  }, []);

  const infinityScroll = async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
      setLoading(true);
      await fetchMoreIssueList();
      setLoading(false);
    }
  };

  const fetchMoreIssueList = async () => {
    try {
      await fetchIssueList();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', infinityScroll);
    return () => {
      window.removeEventListener('scroll', infinityScroll);
    };
  }, []);

  return (
    <>
      {issueList.map((issue: any, index: number) => (
        <div key={index}>
          <div>
            <h3>
              <Link to={`/issue/${issue.number}`}>
                # {issue.number} = {issue.title}
              </Link>
            </h3>
          </div>
          <div>작성자 : {issue.user.login}</div>
          <div>작성일 : {issue.created_at}</div>
          <div>코멘트 : {issue.comments}</div>
          {index % 4 === 3 && (
            <div>
              <br />
              <button>광고입니다.</button>
            </div>
          )}
        </div>
      ))}
      {loading && <div>Loading more issue...</div>}
    </>
  );
};

export default IssueList;
