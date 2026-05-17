---
title: 웨어러블 센서 행동 분류
slug: smartwatch-activity-classification
type: experiment
description: 스마트워치 가속도계·자이로스코프 시계열 데이터를 기반으로 Walking, Sitting, Standing 활동을 분류한 머신러닝 프로젝트입니다.
image: activity-classification-preview.png
date: 2026-05-15
tech:
  - Python
  - Pandas
  - Scikit-learn
  - Streamlit
demo_url:
github_url:
overview: UCI WISDM 스마트워치 센서 데이터를 활용해 Walking, Sitting, Standing 활동을 분류하고, 시계열 특징 기반 머신러닝 파이프라인을 구성한 프로젝트입니다. baseline과 2-stage 분류 전략을 비교해 클래스 혼동 문제를 분석했습니다.
role:
  - 센서 데이터 전처리
  - sliding window 샘플 생성
  - 특징 추출 및 분류 실험
  - Streamlit 시각화 프로토타입 구현
experiment_summary:
  - accel / gyro 시계열 전처리
  - sliding window 기반 샘플 생성
  - Random Forest baseline 구성
  - 2-stage 분류 구조 비교
experiment_design:
  - UCI WISDM 스마트워치 accel/gyro 데이터를 사용했습니다.
  - Walking, Sitting, Standing 3-class 분류 문제로 구성했습니다.
  - sliding window 기반 샘플을 생성했습니다.
  - magnitude 및 통계 특징을 추출했습니다.
  - Random Forest baseline과 Walking vs Static, Sitting vs Standing 2-stage 구조를 비교했습니다.
  - Streamlit 기반 예측/시각화 프로토타입을 구현했습니다.
metrics:
  - accuracy
  - confusion matrix
  - class-wise classification result
  - baseline vs 2-stage comparison
major_results:
  - baseline 3-class 분류 결과를 기준선으로 확보했습니다.
  - Walking 분류는 비교적 양호했지만 Sitting/Standing 혼동이 확인됐습니다.
  - 2-stage 구조에서 Walking/Static 구분은 개선됐지만 전체 정확도는 감소했습니다.
  - 클래스 분리 전략이 성능과 해석에 직접 영향을 주는 것을 확인했습니다.
troubleshooting:
  - Sitting/Standing 혼동이 커서 특징 구성을 다시 조정했습니다.
  - 센서 방향과 착용 각도 차이가 분류 결과에 영향을 주는 문제를 확인했습니다.
  - 이상치 window가 결과를 흔드는 문제를 샘플 정제 기준으로 완화했습니다.
  - 2-stage 구조가 기대보다 성능이 낮아 단계별 오류 전파를 분석했습니다.
improvements:
  - LSTM, 1D-CNN 등 시계열 모델과 비교할 계획입니다.
  - 활동 클래스 수를 확대해 일반화 성능을 확인할 예정입니다.
  - 실시간 예측 안정성을 개선하는 후처리 전략을 검토할 예정입니다.
---
