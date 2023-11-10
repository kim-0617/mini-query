# mini query 만들기

## 설명

- 루트 path에 있는 package.json은 packages 폴더에 있는 package.json들을 관리하기 위한 용도 => 따라서 private : true, (배포 되는게 아니다)

- library 이름 짓기 규칙 : @단체(개인)이름/라이브러리이름 => 이런걸 scoped name 이라고 한다
- 나중에 npm pubilsh 했을 때, scoped 된 것은 private 하게 배포되는게 default
- 그렇기 때문에 npm pubilsh --access pubilc 붙여줘야 접근이 가능

- "files" 속성은 [] 내부에 있는 목록들이 npm에 배포되는 것들이라고 명시

- yarn workspace를 사용할 때는, 루트에서 yarn install 을 실행하면 하위의 모든 폴더의 의존성을 설치한다.

## 구현 예시

```js
import { $ } from "@sh-kim/mini-query";

$(".btn").click((e) => {
  console.log("this is clicked", e.targe);
});
```
