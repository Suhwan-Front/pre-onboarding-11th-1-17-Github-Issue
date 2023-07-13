import React, { useContext, useEffect, useState } from 'react';
import { GitHubContext } from '../../contexts/GitHubContext/GitHubContext';
import { Link } from 'react-router-dom';
import { getIssueList } from '../../utils/apiUtils';

const IssueList = () => {
  const { issueList, fetchIssueList, setIssueList } = useContext(GitHubContext);
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
      const currentPage = Math.ceil(issueList.length / 10) + 1;
      const newIssueList = await getIssueList(currentPage, 10);
      setIssueList((prevList) => [...prevList, ...newIssueList]);
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
              <button
                onClick={() => (location.href = 'https://www.wanted.co.kr/')}
              >
                광고입니다.
              </button>
            </div>
          )}
        </div>
      ))}
      {loading && <div>이슈를 불러오는 중입니다...</div>}
    </>
  );
};

export default IssueList;
