# Customizing_Webpack_without_CRA

## 소개

본 프로젝트는 Create React App (CRA)을 사용하지 않고 Webpack 설정을 커스터마이징하는 방법을 보여줍니다. <br/>
React 애플리케이션을 위해 Webpack을 설정하고 수정하는 단계별 가이드를 제공합니다.

자세한 과정은 [[⚓️Webpack] CRA 없이 웹팩 프로젝트 만들기 | 웹팩의 시대는 끝났나 ? | 웹팩 커스터마이징](https://hyorish03.tistory.com/44) 에 담겨 있습니다 !

## 주요 기능

- **JSX 및 JavaScript 파일 번들링**: Babel을 사용하여 최신 JavaScript 문법과 JSX를 브라우저에서 호환되도록 변환합니다.
- **CSS 및 SCSS 파일 처리**: CSS 로더와 Sass 로더를 활용하여 스타일시트를 모듈화하고, SCSS 문법을 지원합니다.
- **개발 서버 설정**: Webpack DevServer를 사용하여 개발 중 실시간 리로딩과 빠른 피드백을 제공합니다.

## 주요 의존성

- **react & react-dom**: React 라이브러리
- **webpack**: 모듈 번들러
- **webpack-cli**: Webpack 명령어 인터페이스
- **webpack-dev-server**: 개발 서버
- **babel-loader, @babel/core, @babel/preset-env, @babel/preset-react**: Babel 설정 및 로더
- **css-loader, style-loader, sass-loader, node-sass**: CSS 및 SCSS 처리 로더
