# NFT 마켓 플레이스, DeepSea

## Deepsea 소개
- Deepsea는 이더리움 체인에서 개발된 NFT Marketplace입니다.
- ERC-721 토큰을 사용합니다.
- Front에서 사용자 지갑과 연동한 후 NFT 발행 트랜잭션을 기록합니다.
- NFT metadata는 NFT.storage를 통해 발행됩니다.
- NFT 정보는 이더리움 테스트넷(Ropsten)에 저장됩니다.
- Backend에서는 블록체인 네트워크에 RPC call을 통해 발행된 NFT 정보를 DB에 저장합니다.
- Front에서는 현재 전체 사용자들이 발행한 NFT를 리스팅합니다.

## Architeture

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDHrRq%2FbtrJEKFc5da%2FWd3N9KEKDegPgmkAoQ5pAK%2Fimg.png)


## 구현 목표

**1. Bare-Minimum(**완료**)**
    - 지갑 연결하기
    - 컨트랙트 내 NFT 디스플레이
    - NFT 민팅

**2. Advanced**
    - NFT Sell & Buy(구현 예정)

## 실제 구현 화면

**1. 전체 NFT 화면**

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFfId3%2FbtrJCov9xgH%2F0KuvSCJme1JqxdoGZu1aL0%2Fimg.png)

**2. NFT 정보 입력**

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3DHjs%2FbtrJC5b1rSq%2F0FKiTlQm4ZUvSceUfkPdK0%2Fimg.png)

## Tech Stack
![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/Solidity-363636.svg?style=for-the-badge&logo=Solidity&logoColor=white)
![](https://img.shields.io/badge/Web3.js-F16822.svg?style=for-the-badge&logo=web3dotjs&logoColor=white)
![](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)
![](https://img.shields.io/badge/Insomnia-4000BF.svg?style=for-the-badge&logo=Insomnia&logoColor=white)
![](https://img.shields.io/badge/IPFS-65C2CB.svg?style=for-the-badge&logo=IPFS&logoColor=white)
![](https://img.shields.io/badge/Mocha-8D6748.svg?style=for-the-badge&logo=Mocha&logoColor=white)
![](https://ethereum.stackexchange.com/help/badges/137/truffle)



## 힘들었던 점

- 프로젝트 진행 도중 Infura에서 지원하던 IPFS 서비스가 종료됨
- IPFS에 접근할 수 있는 유틸리티 중 NFT.storage를 찾아 적용함.
- Truffle 프레임워크로 컨트랙트 개발 및 배포 진행(Verifiy를 위한 truffle plugin verify 사용)

## 담당했던 파트

- 프론트, 백엔드, 컨트랙트 개발 리딩

