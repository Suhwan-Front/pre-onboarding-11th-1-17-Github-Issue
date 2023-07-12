# pre-onboarding-11th-3-17th (Github API Project)

| 맴버   | 특이사항 |
| ------ | -------- |
| 김수환 |          |
| 김하연 |          |
| 전서연 |          |
| 최종현 |          |
| 변성진 |          |
| 윤지영 |          |

#### 폴더 구조

```bash
src/
|--components/
    |--IssueList/
    |--IssueDetail/
|--contexts/
    |--GithubContext/
|--services/
    |--githubServices
|--utils/
    |--apiUtils
|--App.tsx
|--index.tsx
```

`components/`: 재사용 가능한 UI 컴포넌트들을 담는 폴더입니다. 각 컴포넌트는 해당 폴더 내에 `.tsx` 파일로 구현되고, 필요한 경우 `.css` 파일로 스타일을 분리하여 관리할 수 있습니다. 예를 들어, IssueList 컴포넌트는 IssueList.tsx와 IssueList.css 파일로 구성될 수 있습니다.

`contexts/`: 애플리케이션의 전역 상태와 로직을 관리하기 위한 `Context` 관련 파일들을 담는 폴더입니다. `GitHubContext` 폴더는 `GitHub API`와 관련된 상태와 함수를 관리하는 `Context`를 구현합니다. `GitHubContext.tsx` 파일은 `GitHub API` 요청을 위한 `Context Provider` 컴포넌트를 구현하고, `useGitHub.ts` 파일은 `Context`를 사용하여 `GitHub API`와 관련된 로직을 처리하는 `Custom Hook`을 구현합니다.

`services/`: `GitHub API`와의 데이터 통신을 담당하는 서비스 관련 파일들을 담는 폴더입니다. `githubService.ts` 파일은 `GitHub API`와의 통신을 처리하는 함수들을 포함합니다.

`utils/`: 유틸리티 함수, 헬퍼 함수, 상수 등의 유틸리티 관련 파일들을 담는 폴더입니다. `apiUtils.ts` 파일은 `API` 호출에 관련된 유틸리티 함수들을 포함할 수 있습니다.

> **Redux를 사용하지 않은 이유?**  
> middleware 관여도가 낮다고 판단 Context API로 api를 연결해야하는 상황이기 때문에 Context API면 충분하다고 판단
