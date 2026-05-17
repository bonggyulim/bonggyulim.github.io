---
title: PPE Guard
slug: ppe-guard
description: On-premise AI inspection system for checking worker PPE compliance and storing operational results.
image: placeholder.png
date: 2026-05-15
---

## Overview

PPE Guard is an internal AI inspection system that checks whether workers are wearing required protective equipment and stores the inspection results for later review.

## Role

I designed the backend structure, connected the AI inference flow, defined the customer DB integration approach, and organized the Docker runtime and environment-based configuration.

## Tech Stack

- Flask
- Python
- Docker
- Customer DB
- OpenCV

## Key Features

- Webcam and video-based inspection input
- AI inference result storage and retrieval
- Backend-mediated DB access control
- `.env`-based environment configuration
- On-premise deployment model

## Architecture

The frontend sends requests to a Flask API, and the backend controls both AI inference and result persistence for better security and operations.

<div class="hyde media-placeholder">Architecture image placeholder</div>

## Demo

<div class="hyde media-placeholder">Demo video placeholder</div>

<!--
<video controls width="100%">
  <source src="{{ site.baseurl }}/assets/videos/ppe-guard-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
-->

## Result

The system adopted a backend-centered DB access model that fits internal deployment environments where security and operational control are important.

## What I Learned

I learned that practical internal systems require strong attention to access control, configuration isolation, and deployment constraints in addition to model accuracy.
