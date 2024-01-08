tsc 라는 명령어는 ts => js 로 컴파일 해줌


@ type script npm 설치 모듈 (Tip)
npm i -D @types/node

npm i -D @tsconfig/node16

위 모듈들을 설치하면 tsconfig 에서 아래 옵션들을 추가할수 있다
"extends": "@tsconfig/node16/tsconfig.json",
"ts-node": {
"compilerOptions": {
"target": "ES6",
"module": "CommonJS",
}
}

해당 모듈을 설치를 하면 내부적으로 ts 를 컴파일하기 때문에 js 로 변환을 시켜도된다

기존 명령어 tsc intermediate-ts/deco.ts && node intermediate-ts/deco.js

설치후 명령어 ts-node intermediate/assert.ts


@type Script Dom 

typescript 에서 DOM을 사용할때 빨간줄이 뜬다 
tsconfig.json 에서 compilerOptions 에       "lib": ["DOM"], 를 추가하면 된다