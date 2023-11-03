## 나의 자산 정보 서비스

제가 가진 + / - 자산 항목을 요약해서 보여주고, 생성, 수정, 삭제할 수 있는 서비스 입니다.

### 프로젝트 실행

```
  yarn

  yarn start:server // json server 구동
  yarn dev // SPA 실행
  yarn storybook // 스토리북 확인
  yarn test // 테스트
  yarn build // 빌드
  yarn preview // 빌드한것을 로컬에서 확인. server 구동을 미리 해야 합니다.


```

<br />

### 프로젝트 폴더 구조

해당 프로젝트에서 풀어야 할 '자산 관리' 라는 도메인이 잘 보일 수 있도록 하는것이 목적인 폴더 구조입니다.

```
├── README.md
├── index.html
├── jest
│   ├── __mocks__
│   │   └── svg.js
│   └── setupTests.js
├── jest.config.cjs
├── yarn-lock.json
├── package.json
├── postcss.config.js // TailiwndCSS 를 위해 필요합니다.
├── public
│   └── vite.svg
├── server
│   ├── data.json
│   └── index.js
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── icons
│   │       ├── icon-asset.svg
│   │       ├── icon-back.svg
│   │       ├── icon-check.svg
│   │       ├── icon-clear-input.svg
│   │       ├── icon-close-round.svg
│   │       ├── icon-close.svg
│   │       ├── icon-down-arrow.svg
│   │       ├── icon-liability.svg
│   │       ├── icon-right-blue-arrow.svg
│   │       └── icon-up-arrow.svg
│   ├── config
│   │   └── index.ts
│   ├── features
│   │   ├── asset // asset 이라는 도메인에 관련된 코드들을 해당 폴더 아래에 두었습니다.
│   │   │   ├── api
│   │   │   │   ├── createAsset.ts
│   │   │   │   ├── deleteAsset.ts
│   │   │   │   ├── getAsset.ts
│   │   │   │   ├── getAssets.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── updateAsset.ts
│   │   │   ├── component
│   │   │   │   ├── AssetSummaryArcodion.tsx
│   │   │   │   ├── AssetSummaryItem.tsx
│   │   │   │   ├── CategoryBottomSheetContent.tsx
│   │   │   │   ├── CategoryBottomSheetTitle.tsx
│   │   │   │   ├── MemoCTAButton.tsx
│   │   │   │   ├── RegisterAssetForm.tsx
│   │   │   │   ├── RegisterCTAButton.tsx
│   │   │   │   ├── SummaryHeaderSection.tsx
│   │   │   │   └── tests
│   │   │   │       ├── AssetSummaryArcodion.test.tsx
│   │   │   │       ├── AssetSummaryItem.test.tsx
│   │   │   │       ├── RegisterAssetForm.test.tsx
│   │   │   │       └── RegisterCTAButton.test.tsx
│   │   │   ├── const
│   │   │   │   └── index.ts
│   │   │   ├── container
│   │   │   │   ├── AssetListContainer.tsx
│   │   │   │   ├── LiabilityListContainer.tsx
│   │   │   │   ├── TotalAssetSummaryContainer.tsx
│   │   │   │   └── index.ts
│   │   │   ├── dto // api layer, 비즈니스 layer 간 data transfer object 입니다.
│   │   │   │   ├── request
│   │   │   │   │   └── index.ts
│   │   │   │   └── response
│   │   │   │       └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── model
│   │   │   │   └── index.ts
│   │   │   ├── type
│   │   │   │   └── index.ts
│   │   │   └── util
│   │   │       └── index.ts
│   │   └── ui
│   │       └── components // 공통으로 사용되는 UI 컴포넌트들입니다.
│   │           ├── AlertPopup.tsx
│   │           ├── BottomSheet.tsx
│   │           ├── DimmedBackground.tsx
│   │           ├── ErrorBoundary.tsx
│   │           ├── Fallback.tsx
│   │           ├── Input.tsx
│   │           ├── InputButton.tsx
│   │           ├── MoneyInput.tsx
│   │           ├── Navigation.tsx
│   │           ├── Title.tsx
│   │           ├── Tooltip.tsx
│   │           ├── arcodion
│   │           │   ├── ArcodionDetail.tsx
│   │           │   ├── ArcodionSummary.tsx
│   │           │   └── index.tsx
│   │           ├── buttons
│   │           │   ├── Button.tsx
│   │           │   ├── NavigationButton.tsx
│   │           │   ├── RoundButton.tsx
│   │           │   ├── SubmitButton.tsx
│   │           │   └── TextButton.tsx
│   │           ├── icons
│   │           │   ├── ArrowDownIcon.tsx
│   │           │   ├── ArrowRightBlueIcon.tsx
│   │           │   ├── ArrowToggleIcon.tsx
│   │           │   ├── ArrowUpIcon.tsx
│   │           │   ├── AssetIcon.tsx
│   │           │   ├── BackButtonIcon.tsx
│   │           │   ├── CloseButtonIcon.tsx
│   │           │   ├── CloseButtonRoundIcon.tsx
│   │           │   ├── InputClearButtonIcon.tsx
│   │           │   ├── LiabilityIcon.tsx
│   │           │   └── index.ts
│   │           └── index.ts
│   ├── index.css
│   ├── lib
│   │   ├── axios.ts
│   │   └── react-query.ts
│   ├── main.tsx
│   ├── pages  // 화면 컴포넌트들입니다. route 와 연동됩니다.
│   │   ├── AssetDetail.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── RegisterAsset.tsx
│   │   ├── index.ts
│   │   └── tests
│   │       └── AssetDetail.test.tsx
│   ├── routes.tsx
│   ├── stories // UI 컴포넌트 재사용 및 테스트를 위한 storybook 폴더입니다.
│   │   ├── components
│   │   │   ├── BottomSheet.stories.tsx
│   │   │   ├── Input.stories.ts
│   │   │   ├── InputButton.stories.ts
│   │   │   ├── Navigation.stories.tsx
│   │   │   ├── Title.stories.ts
│   │   │   ├── buttons
│   │   │   │   ├── SubmitButton.stories.tsx
│   │   │   │   └── TextButton.stories.ts
│   │   │   └── icons
│   │   │       ├── AssetIcon.stories.ts
│   │   │       ├── BackButtonIcon.stories.ts
│   │   │       ├── CloseButtonIcon.stories.ts
│   │   │       ├── CloseButtonRoundIcon.stories.ts
│   │   │       ├── InputClearButtonIcon.stories.ts
│   │   │       └── LiabilityIcon.stories.ts
│   │   └── features
│   │       ├── SummaryHeaderSection.stories.ts
│   │       └── asset
│   │           └── component
│   │               ├── AssetSummaryArcodion.stories.ts
│   │               ├── AssetSummaryItem.stories.ts
│   │               ├── RegisterAssetForm.stories.ts
│   │               └── RegisterCTAButton.stories.ts
│   ├── test-util // test 에 필요한 util 입니다.
│   │   └── mocks
│   │       ├── handlers.js
│   │       └── server.js
│   ├── utils
│   │   ├── jest.tsx
│   │   └── twClassMerge.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── types.d.ts
└── vite.config.ts
```
