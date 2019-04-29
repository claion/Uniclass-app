# README

## Git
- 절대 master branch에 push하지 말 것.
- 브랜치 이름은 <본인이름/기능> 형태로 짓기 ex. `changhoi/login`
- 모이는 날 코드리뷰 후 merge함

## Design Pattern
- Screen은 데이터를 받아오는 Container와 보여주는 역할을 하는 Presenter로 구분해서 코딩할 것
- 중복되는 패턴은 모두 컴포넌트로 만들고 components에 넣을 것
- 함수 이름, 변수 이름은 camelCase로 작성하고 클래스 이름은 PascalCase로 작성할 것
- 함수는 한 번에 하나의 기능만 하는 함수로 만들 것.
- 함수 이름은 함수 기능을 잘 드러내야하고 동사 형태로 만들 것.
- 웬만하면 변수, 함수, 클래스 이름은 생략하거나 줄이지 말고 사용
- ES6+를 준수
- 중복되는 상수는 constants에 저장하고, import해서 사용할 것
- class component가 필요한 경우을 제외하고 functional component를 만들 것
- 민감한 정보에 대해서 상의하고 .env에 올릴 것