---
title: 산업 AI 이상탐지 플랫폼
slug: industrial-ai-platform
type: service
description: 제조 이미지 기반 이상탐지, RAG 문서 검색, 모델 관리, 배포 인프라를 포함한 E2E AI 플랫폼입니다.
image: industrial-ai-preview.png
date: 2026-05-15
tech:
  - Spring Boot
  - FastAPI
  - MariaDB
  - Redis
  - ChromaDB
  - MinIO
  - Docker
  - Nginx
demo_url:
github_url:
overview: 제조 이미지 검사부터 결과 저장, 이상 위치 시각화, 문서 검색까지 하나의 흐름으로 연결한 산업 AI 플랫폼입니다. AI 실험 결과를 실제 서비스 구조로 옮기는 데 초점을 맞췄습니다.
role:
  - 기획 및 요구사항 정리
  - 시스템 구조 설계
  - 백엔드 주요 기능 구현
  - Docker 기반 실행 환경 구성
key_features:
  - 검사 요청 및 결과 저장 API 구현
  - 이미지 원본, 추론 결과, Heatmap 관리
  - 재검토 큐와 모델 버전 관리 흐름 구성
  - RAG 문서 검색과 운영형 API 연결
architecture_summary: Spring Boot 서비스, FastAPI 추론 서버, 저장소, 문서 검색 컴포넌트를 분리하고 각 역할을 명확히 나눈 운영형 구조로 설계했습니다.
decisions:
  - AI 추론 서버와 서비스 백엔드를 분리해 배포와 장애 영향을 구분했습니다.
  - 이미지 저장소와 메타데이터 저장소를 분리해 파일 관리와 조회 성능을 나눴습니다.
  - RAG 문서 검색 흐름을 별도 컴포넌트로 두어 운영 기능과 AI 질의 기능을 분리했습니다.
  - Docker 기반 실행 환경으로 설치와 운영 절차를 표준화했습니다.
troubleshooting:
  - 파일 저장 경로와 메타데이터 정합성 문제를 저장 규칙 통일로 해결했습니다.
  - AI 서버와 백엔드 간 응답 포맷 차이를 공통 응답 구조로 정리했습니다.
  - 모델 버전 변경 시 운영 데이터와 추론 결과 매핑 문제를 버전 필드로 관리했습니다.
  - 배포 환경의 환경변수 누락 문제를 Compose 기준 설정으로 통일했습니다.
achievements:
  - 검사 요청부터 결과 저장과 조회까지의 E2E 흐름을 구현했습니다.
  - AI 판정 결과와 시각화 산출물을 함께 관리하는 구조를 만들었습니다.
  - RAG 문서 검색과 응답 흐름을 운영 기능에 연결했습니다.
  - Docker 기반 실행 환경과 서비스 기동 절차를 정리했습니다.
---
