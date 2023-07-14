# 원티드 프론트엔드 인턴십 - 17 팀

3주차 과제 프로젝트

## 프로젝트 소개

[특정 github 레포지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## 프로젝트 기간

23.07.11 ~ 23.07.14

## 팀 소개

<table> 
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Final-hyen"><img src="https://avatars.githubusercontent.com/u/120147782?v=4"width=100px;" alt=""/><br /><sub><b>최종현 (팀장)</b></sub></a><br /></td>
      <td align="center";><a href="https://github.com/Suhwan0818"><img src="https://avatars.githubusercontent.com/u/48269420?v=4" width="100px;" alt=""/><br /><sub><b>김수환</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hayeonn2"><img src="https://avatars.githubusercontent.com/u/111109573?v=4" width="100px;" alt=""/><br /><sub><b>김하연</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/wjstjdus96"><img src="https://avatars.githubusercontent.com/u/77755620?v=4" width="100px;" alt=""/><br /><sub><b>전서연</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seounjin"><img src="https://avatars.githubusercontent.com/u/39517396?v=4" width="100px;" alt=""/><br /><sub><b>변성진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Yoonjyjy"><img src="https://avatars.githubusercontent.com/u/41252790?v=4" width="100px;" alt=""/><br /><sub><b>윤지영</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 실행방법

```
$ npm install
$ process.env.REACT_APP_GIT_ISSUE_ACCESS_TOKEN="<개인Token>"
$ npm run start
```

## 프로젝트 링크

[프로젝트 바로가기](https://master--bejewelled-beignet-535e27.netlify.app/)

## 전체 구동 화면

![실행결과](/etc/실행결과.gif)

## 개발환경

- 언어 : typescript
- 라이브러리 및 프레임워크: react, axios, styled-components, react-router-dom, react-markdown
- 배포 : netlify

## 폴더구조

```
/src
┣ 📁components
  ┣ 📁Advertisement
  ┣ 📁constants
  ┣ 📁Header
  ┣ 📁IssueDetail
  ┣ 📁IssueList
  ┣ 📁LoadingScreen
  ┣ 📁ScrollObserver
  ┣ 📁ShadeScreen
┣ 📁contexts
  ┣ 📁provider
┣ 📁hooks
┣ 📁pages
┣ 📁utils
```

---

## 기능 별 Best Practice

### API 처리

- api 처리 함수 따로 분리
- axios 인스턴스를 만들어 사용 => 중복되는 부분 최소화

### Context API 연동

- 이슈 리스트와 이슈 디테일 나누어서 context 생성
- 리스트 context는 issueList, fetchError 값과 fetchIssueList, setIssueList 함수를 관리
- 디테일 context는 개별 issue, fetchError 값과 fetchIssue 함수를 관리
- 로딩 context는 loading값과 setLoading 함수를 관리

### 이슈 목록 구현

- 하나의 이슈를 구성하는 IssueItem 컴포넌트를 생성
- 리스트를 구현할 때 div 태그 말고 ul-li 태그 사용 => 리스트임이 좀 더 분명하게 보여짐

### 인피니티 스크롤 구현

- intersection-observer를 사용하여 별도의 useInfiniteScroll 훅 생성
- 특정 요소를 관찰자로 두고 이슈 리스트의 끝에서 교차하는 시점을 감지하게 함. 리스트 끝에 도달했을 때 이슈 데이터를 요청

  ```typescript
  const useInfiniteScroll = (target: RefObject<Element>) => {
    const [Intersecting, setIntersecting] = useState(false);
    const oberverRef = useRef<IntersectionObserver | null>(null);

    const getObserver = useCallback(() => {
      if (!oberverRef.current) {
        oberverRef.current = new IntersectionObserver((entries) =>
          setIntersecting(entries.some((entry) => entry.isIntersecting))
        );
      }
      return oberverRef.current;
    }, [oberverRef.current]);

    useEffect(() => {
      if (target.current) {
        getObserver().observe(target.current);
      }
      return () => {
        getObserver().disconnect();
      };
    }, [target.current]);

    return Intersecting;
  };
  ```

### 광고 이미지 출력

- Advertisement로 광고 출력 컴포넌트 분리
- issueListPage에서 `map`을 사용하여 issue를 그려줄 때 index값을 확인하고 특정 index일 경우 Advertisement 컴포넌트를 렌더링함
  ```typescript
   {(index + 1) % 4 === 0 && (
            <a href="https://www.wanted.co.kr/">
              <Advertisement />
            </a>
          )
  ```

### 데이터 요청 중 로딩 표시

- `keyframe` 사용하여 회전하는 Loading 컴포넌트 생성
- 전역적으로 사용하는 로딩 컴포넌트는 최상위 컴포넌트인 App에 위치시킴
- 로딩 상태값은 context를 사용하여 전역적으로 관리함

### 상세 화면 구현

- `useParams` 훅을 사용해 url의 파라미터를 받아 issueNumber로 변수 할당
- issueNumber를 사용하여 해당 숫자의 issue를 `fetch`함

  ```typescript
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const { issue, fetchIssue, fetchError } = useContext(DetailContext);

  useEffect(() => {
    fetchIssue(parseInt(issueNumber || '', 10));
  }, []);
  ```

- `react-markdown` 라이브러리를 사용하여 마크다운언어를 렌더링함

### 에러 화면 구현

- ErrorPage 컴포넌트 생성하고 에러 메세지를 `props`로 받음
- 에러 메세지가 담긴 context의 `fetchError`값을 사용하여 값이 있을 경우 ErrorPage 렌더링함

### React.memo를 사용한 렌더링 최적화

- props 변경이 없는 IssueListItem 컴포넌트에 React.memo 적용

```typescript
const IssueListItem = ({ issue }: { issue: any }) => (
  <IssueListItemBox>
    <IssueTitleWrapper>
      <Link to={`/issue/${issue.number}`}>
        <IssueNumber># {issue.number}</IssueNumber>
        <IssueTitle>{issue.title}</IssueTitle>
      </Link>
    </IssueTitleWrapper>
    <IssueUser>작성자 : {issue.user.login}</IssueUser>
    <IssueDate>작성일 : {calculateDate(issue.created_at)}</IssueDate>
    <IssueComments>코멘트 : {issue.comments}</IssueComments>
  </IssueListItemBox>
);
export default React.memo(IssueListItem);
```

---
