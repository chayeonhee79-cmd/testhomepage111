# 새 스크롤형 홈페이지 올리기

1. `부경대사회복지홈페이지-스크롤형.zip`의 압축을 풉니다.
2. GitHub 새 공개 저장소를 만듭니다.
3. 압축을 푼 폴더 **안의 파일과 assets 폴더 전체**를 저장소 최상위에 올립니다.
4. 파일 목록에 `index.html`과 `assets`가 바로 보여야 합니다. 상위 폴더 안에 넣지 마세요.
5. `Settings → Pages`에서 `Source: Deploy from a branch`, `Branch: main`, `Folder: / (root)`를 선택하고 `Save`를 누릅니다.
6. 배포가 완료되면 Pages에 표시되는 주소로 접속합니다.

기존 저장소에 올릴 경우 기존의 `index.html`, `style.css`, `content.js`, `app.js`, `favicon.svg`를 이번 파일로 교체하고 `assets` 폴더도 올립니다. 새로운 디자인에는 이미지가 있으므로 다섯 파일만 올리면 이미지가 표시되지 않습니다.

기존에 `dist`와 `.github`를 함께 올려 GitHub Actions로 배포하고 있다면, 전체 소스 폴더 `pknu-welfare`의 새 `dist` 내용을 기존 저장소의 `dist`에 교체하세요. 기존 Actions 배포 방식은 그대로 사용할 수 있습니다.
