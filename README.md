# Customizing_Webpack_without_CRA

## 소개

이 프로젝트는 Create React App(CRA) 없이 Webpack을 직접 설정하고 커스터마이징하는 방법을 다룹니다. <br/>
Webpack을 활용한 React 애플리케이션을 빌드하는 과정을 단계별로 설명하며, <br/>
Vite 수준의 성능 최적화를 목표로 다양한 최적화 기법을 적용합니다. <br/>

자세한 내용은 블로그에서 확인하세요! <br/>
🔗 [[⚓️Webpack] CRA 없이 웹팩 프로젝트 만들기 | 웹팩의 시대는 끝났나 ? | 웹팩 커스터마이징](https://hyorish03.tistory.com/44) <br/>
🔗 [[⚓️Webpack] Webpack 커스터마이징을 통해 Vite 속도 따라잡기](https://hyorish03.tistory.com/45)

<br/>
<br/>

## ⚙️ CRA 없이 Webpack 설정해보기

### 주요 기능

- **JSX 및 JavaScript 파일 번들링**: Babel을 사용하여 최신 JavaScript 문법과 JSX를 브라우저에서 호환되도록 변환합니다.
- **CSS 파일 처리**: CSS 로더와 활용하여 스타일시트를 모듈화합니다.
- **개발 서버 설정**: Webpack DevServer를 사용하여 개발 중 실시간 리로딩과 빠른 피드백을 제공합니다.

<br/>

### 주요 의존성

- **react & react-dom**: React 라이브러리
- **webpack**: 모듈 번들러
- **webpack-cli**: Webpack 명령어 인터페이스
- **webpack-dev-server**: 개발 서버
- **babel-loader, @babel/core, @babel/preset-env, @babel/preset-react**: Babel 설정 및 로더
- **css-loader, style-loader**: CSS 및 SCSS 처리 로더

<br/>
<br/>

## 🚀 Webpack 커스터마이징을 통해 Vite 속도 따라잡기

Webpack의 기본 빌드 속도(16.38초)를 Vite 수준(3.33초)으로 최적화하는 과정을 실험했습니다.
결과적으로 **Webpack의 빌드 속도를 3.016초까지 단축**하는 데 성공했습니다.

### 목표

Webpack의 빌드 속도 16.38초를 Vite의 빌드 속도 3.33초까지 따라잡아보자

<br/>

### 최적화 과정

1️⃣ esbuild-loader 적용 (기존 ts-loader / babel-loader / TerserPlugin 제거)

- 결과: 16.38초 → 10.43초
- 이유: 기존 TerserPlugin(3.043초), babel-loader(3.2초), ts-loader(2.95초)의 속도를 esbuild-loader(0.961초)로 대체하여 개선

2️⃣ UglifyJSPlugin 제거 → esbuild-loader minify 적용

- 결과: 10.43초 → 3.015초
- 이유: esbuild의 빠른 minification을 활용하여 빌드 시간 대폭 단축

<br/>

### 최종 성과

| 최적화 단계             | 빌드 시간 | 개선율                    |
| ----------------------- | --------- | ------------------------- |
| **최적화 전**           | 16.38초   | -                         |
| **esbuild-loader 적용** | 10.43초   | 36% 향상                  |
| **esbuild minify 적용** | 3.016초   | 443% 향상                 |
| **Vite 빌드 속도 비교** | ⏳ 3.33초 | Webpack이 0.314초 더 빠름 |

<br/>

> Webpack 최적화 후 Vite와 비슷한 속도(3.016초 vs 3.33초)까지 도달!

<br/>

### 느낀점

Webpack과 Vite는 빌드 최적화 방식이 다르지만, 핵심은 최적화 전략에 달려 있다는 점을 깨달았습니다.

- 초기 빌드 속도는 Vite가 Webpack보다 약 3배 빠름
- 하지만 Webpack을 esbuild로 최적화하면 Vite와 비슷한 속도까지 단축 가능
- Webpack도 커스터마이징을 통해 충분히 빠른 빌드 성능을 낼 수 있음
