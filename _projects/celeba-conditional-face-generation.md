---
title: CelebA 조건부 얼굴 이미지 생성
slug: celeba-conditional-face-generation
type: experiment
description: Conditional DCGAN baseline과 조건 제어 개선 구조를 비교한 딥러닝 생성 모델 실험입니다.
image: celeba-preview.png
date: 2026-05-15
tech:
  - PyTorch
  - Conditional DCGAN
  - Attribute Classifier
  - CelebA
demo_url:
github_url:
overview: CelebA 64x64 데이터셋을 기반으로 조건부 얼굴 생성 실험을 구성하고, baseline과 개선 구조의 조건 반영 성능을 비교한 프로젝트입니다. 생성 품질보다 조건 제어 정확도를 함께 평가하는 데 초점을 맞췄습니다.
role:
  - 실험 구조 설계
  - 조건 속성 정의 및 데이터 구성
  - 학습 파이프라인 정리
  - 결과 비교 기준 설계
experiment_summary:
  - CelebA 64x64 데이터 기반 실험 구성
  - Conditional DCGAN baseline 구축
  - 개선 구조와 제어 성능 비교
  - 속성별 결과 비교 기준 설계
experiment_design:
  - CelebA 64x64 이미지를 사용했습니다.
  - 조건 속성은 Male, Eyeglasses, Young, Black_Hair, Blond_Hair, Brown_Hair로 구성했습니다.
  - Conditional DCGAN baseline을 구축했습니다.
  - WeightedRandomSampler, TTUR, Attribute Classifier를 반영한 improved 구조를 비교했습니다.
  - exact match, mean attribute accuracy, 속성별 accuracy 기준으로 평가했습니다.
metrics:
  - exact match rate
  - mean attribute accuracy
  - attribute-wise accuracy
  - fixed sample comparison
major_results:
  - baseline 대비 improved 모델에서 exact match rate가 개선됐습니다.
  - 조건 속성 반영 성능이 전반적으로 향상됐습니다.
  - 희소 조건 조합에서 sampler와 classifier 보조 효과를 확인했습니다.
  - fixed sample 비교에서 조건 일관성이 더 안정적으로 나타났습니다.
troubleshooting:
  - 조건 조합 불균형 문제를 sampler 기반으로 완화했습니다.
  - G/D 학습 불균형을 TTUR 조정으로 완화했습니다.
  - 특정 속성이 반영되지 않는 문제를 classifier 보조 신호로 보완했습니다.
  - sparse condition sampling으로 인한 불안정성을 데이터 구성 방식으로 조정했습니다.
improvements:
  - diffusion 기반 조건부 생성 모델과 비교할 계획입니다.
  - 조건 제어 성능 평가 자동화를 더 정교하게 만들 예정입니다.
  - classifier guidance 계열 접근을 추가 실험할 계획입니다.
---
