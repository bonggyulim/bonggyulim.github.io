---
title: Industrial AI Anomaly Detection Platform
slug: industrial-ai-platform
description: End-to-end AI platform covering anomaly detection, RAG search, model management, and deployment infrastructure.
image: placeholder.png
date: 2026-05-15
---

## Overview

An end-to-end AI platform built around manufacturing image anomaly detection, connecting inspection requests, image storage, AI inference results, heatmaps, review queues, model management, and RAG-based document search.

## Role

I planned the service flow, designed the system, implemented core backend features, organized the AI experiment structure, and set up the Docker-based deployment environment.

## Tech Stack

- Spring Boot
- FastAPI
- MariaDB
- MinIO
- ChromaDB
- Redis
- Docker

## Key Features

- Inspection request and result query APIs
- Image storage and inference result management
- Heatmap visualization for anomaly regions
- Review queue and model version management
- RAG-based internal document search

## Architecture

The platform separates manufacturing images, inference services, result storage, and document retrieval into an operational structure.

<div class="hyde media-placeholder">Architecture image placeholder</div>

## Demo

<div class="hyde media-placeholder">Demo video placeholder</div>

<!--
<video controls width="100%">
  <source src="{{ site.baseurl }}/assets/videos/industrial-ai-platform-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
-->

## Result

The project established a service-ready platform that goes beyond model experiments by integrating storage, inference results, search, and operational workflows.

## What I Learned

I learned that a usable AI service depends not only on model performance, but also on API contracts, storage design, operational flow, and deployment structure.
