# 국립부경대학교 사회복지학 소개 홈페이지

설치 없이 실행할 수 있는 한국어 정적 홈페이지입니다. `dist/index.html`을 더블 클릭하면 열립니다. Windows의 Chrome 또는 Edge 최신 버전을 권장합니다.

## 구성

- 학부 사회복지학전공, 일반대학원(석사·박사), 글로벌정책대학원(석사) 구분
- 공식 홈페이지에서 확인한 교수진 5명: 연구 분야·이메일·전화번호
- 학생 동아리, 학과 인스타그램 연결, 다솜모임 소개 공간
- 공식 전공성과 게시판의 성과 소식
- 자격·실습·진로·복지서비스·자원봉사·학업 지원 정보
- 창 형태 상세 보기: 닫기, Esc, 배경 클릭, 확대·복원, 데스크톱에서 제목줄 드래그
- 모바일 메뉴, 반응형 화면, 키보드 접근, 움직임 줄이기 설정 지원

## 파일 수정

| 파일 | 역할 |
| --- | --- |
| `dist/index.html` | 전체 구조, 메인 소개문, 연락처 |
| `dist/style.css` | 색상, 글자, 레이아웃, 반응형 화면 |
| `dist/content.js` | 교수진, 성과, 정보 링크, 상세 창 콘텐츠 |
| `dist/app.js` | 상세 창과 모바일 메뉴 기능 |
| `dist/favicon.svg` | 브라우저 탭 아이콘 |

색상은 `style.css`의 `:root`에서 수정합니다. 다솜모임 내용은 `content.js`의 `windows.dasom`과 `index.html`의 다솜 카드를 수정하세요. 비밀키와 개인정보는 코드에 넣지 마세요.

## GitHub에 올리고 GitHub Pages로 공개하기

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 내용을 업로드합니다. `dist`와 `.github` 폴더를 포함하세요.
3. 저장소의 **Settings → Pages → Source**에서 **GitHub Actions**를 선택합니다.
4. `main` 브랜치에 업로드하면 포함된 `Publish GitHub Pages` 워크플로가 `dist`를 배포합니다.
5. Actions 실행이 완료되면 Pages 설정에서 주소를 확인합니다.

저장소에 바로 `index.html`을 놓고 싶다면 `dist` 폴더 안의 다섯 파일만 업로드한 뒤 Pages의 `Deploy from a branch`에서 해당 브랜치의 `/ (root)`를 선택해도 됩니다. 이때 Actions 파일은 필요하지 않습니다. GitHub에 실제 업로드하거나 저장소를 만들지는 않았습니다.

## 자료 확인과 제한

확인 날짜: 2026-10-01. 이 홈페이지는 요청에 따라 만든 소개 사이트이며 대학이 운영하는 공식 홈페이지를 대신하지 않습니다.

- [공식 학과 홈페이지](https://icms.pknu.ac.kr/ps1)
- [교수진](https://icms.pknu.ac.kr/ps1/6390)
- [학부 전공 소개](https://icms.pknu.ac.kr/ps1/6388)
- [학부 교육과정](https://icms.pknu.ac.kr/ps1/6929)
- [일반대학원 소개](https://icms.pknu.ac.kr/ps1/6927)
- [글로벌정책대학원 소개](https://icms.pknu.ac.kr/ps1/6928)
- [동아리](https://icms.pknu.ac.kr/ps1/6404)
- [전공성과](https://icms.pknu.ac.kr/ps1/6856)
- [자격증](https://icms.pknu.ac.kr/ps1/6487)
- [현장실습](https://icms.pknu.ac.kr/ps1/6397)
- [학과 인스타그램](https://www.instagram.com/pknu_ps1/)

인스타그램 게시물과 옥포복지관 참고 사이트는 접근이 되지 않아 내용을 가져오지 않았습니다. 다솜모임의 실제 활동·연혁·회원·사진·연락처는 확인되지 않아 추가하지 않았습니다. 공식 동아리 소개의 3개 모임과 다솜모임을 동일한 모임으로 추정하지 않았습니다. 대학원 세부 모집조건과 수업 시간은 해당 학기의 공식 안내를 확인해야 합니다.

디자인은 요청하신 [Awwwards](https://www.awwwards.com/)의 대형 타이포그래피와 카드 구성 방향을 참고해 자체 제작했습니다. Awwwards 메인 페이지는 접근이 되지 않아 해당 사이트의 정확한 복제는 아닙니다. 참고 가능한 Awwwards의 [디자인 자료](https://assets.awwwards.com/assets/files/live-presentation.pdf)와 [홈페이지 디자인 소개](https://www.awwwards.com/inspiration/impronta-homepage-impronta)를 확인했습니다. 교수·학생 사진은 임의 생성하지 않았으며 외부 이미지와 폰트에 의존하지 않습니다.

교수 직책과 모집·운영 정보는 변경될 수 있으므로 공개 전 다시 확인하세요. 성과의 세부 참여자와 수상 시점은 공식 게시판 원문으로 연결합니다. 자동 소식 수집이나 인스타그램 피드 연동은 포함하지 않습니다.
