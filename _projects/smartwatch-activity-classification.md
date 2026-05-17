---
title: Smartwatch Activity Classification
slug: smartwatch-activity-classification
description: Machine learning project that classifies Walking, Sitting, and Standing from smartwatch accelerometer and gyroscope time-series data.
image: placeholder.png
date: 2026-05-15
---

## Overview

This project uses UCI WISDM smartwatch sensor data to classify Walking, Sitting, and Standing activities. Accelerometer and gyroscope time-series signals are preprocessed, converted into sliding-window samples, and used for feature-based classification experiments.

## Role

I handled sensor preprocessing, feature engineering, experiment design, 2-stage classification strategy validation, and a Streamlit-based prediction and visualization prototype.

## Tech Stack

- Python
- Pandas
- Scikit-learn
- Streamlit

## Key Features

- UCI WISDM smartwatch sensor dataset
- `accel` / `gyro` x, y, z time-series preprocessing
- Sliding window sample generation
- Magnitude and statistical feature extraction
- Random Forest baseline experiment
- Walking vs Static, Sitting vs Standing 2-stage classification
- Streamlit-based prediction and visualization prototype

## Architecture

The pipeline converts raw sensor streams into windowed samples, extracts statistical and magnitude-based features, and feeds them into machine learning classifiers for activity recognition.

<div class="hyde media-placeholder">Architecture image placeholder</div>

## Demo

<div class="hyde media-placeholder">Demo video placeholder</div>

<!--
<video controls width="100%">
  <source src="{{ site.baseurl }}/assets/videos/smartwatch-activity-classification-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
-->

## Result

The project established a comparison structure for baseline and 2-stage classification approaches and packaged the outputs into a lightweight Streamlit prototype for quick inspection.

## What I Learned

I learned that in sensor-based activity recognition, window design, feature extraction, and class separation strategy often matter more than model complexity alone.
