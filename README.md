# BEB-05-ON-DeepSea

## 프로젝트 Flow

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDHrRq%2FbtrJEKFc5da%2FWd3N9KEKDegPgmkAoQ5pAK%2Fimg.png)

1. ERC-721 스마트 컨트랙트를 컴파일+배포+Verify 합니다.
2. React에서 사용자 지갑과 연결합니다.
3. React에서 민팅할 `NFT 정보`를 입력받습니다.
4. 입력된 정보는 `NFT.Storage` 모듈을 통해 `IPFS`에 JSON 형식으로 `tokenURI`가 저장되고, **NFT Minting**이 완료됩니다.
5. 서버(express)에서는 주기적으로 Ethereum Ropsten Network로 RPC Call을 보냅니다. 받아온 정보는 JSON 형식으로 저장되어 있기 때문에 axios로 요청 후 파싱하여 DB(mongoDB)로 저장됩니다.
6. React에서 `/alltoken`로 GET 요청을 보내 현재 발행되어 있는 모든 NFT들을 받아와 렌더링 합니다.
7. 서버에서는 DB에 저장되어 있는 NFT 정보를 React로 전송합니다.


## 구현 목표

1. Bare-Minimum(**완료**)
    - 지갑 연결하기
    - 컨트랙트 내 NFT 디스플레이
    - NFT 민팅

2. Advanced
    - NFT Sell & Buy

## 실제 구현 화면

### 전체 NFT 화면

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFfId3%2FbtrJCov9xgH%2F0KuvSCJme1JqxdoGZu1aL0%2Fimg.png)

### NFT 정보 입력

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3DHjs%2FbtrJC5b1rSq%2F0FKiTlQm4ZUvSceUfkPdK0%2Fimg.png)


## 힘들었던 점

- 프로젝트 진행 도중 Infura에서 지원하던 IPFS 서비스가 종료되면서 IPFS로 tokenURI를 보내는 방법을 우회해야 해서 시간이 많이 걸림

