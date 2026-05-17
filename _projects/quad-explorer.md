---
title: Quad-Explorer
slug: quad-explorer
description: Experimental robotics project connecting natural language commands, RAG-based coordinate search, and Go1 movement.
image: placeholder.png
date: 2026-05-15
published: false
---

## Overview

An experimental robotics project that interprets natural language commands with an LLM, retrieves coordinates through RAG, and sends movement instructions to a Go1 robot.

## Role

I designed the LLM interpretation flow, connected the RAG coordinate search pipeline, and integrated the overall robot control demonstration path.

## Tech Stack

- Streamlit
- PyBullet
- Go1 Bridge
- RAG / LLM
- GenLoco

## Key Features

- Natural language command interpretation
- Object-aware coordinate retrieval
- RAG-based location search
- Go1 movement control
- Simulation and real-device flow integration

## Architecture

The project reuses pretrained locomotion components where possible and focuses on connecting user input, coordinate retrieval, and motion execution into one flow.

<div class="hyde media-placeholder">Architecture image placeholder</div>

## Demo

<div class="hyde media-placeholder">Demo video placeholder</div>

<!--
<video controls width="100%">
  <source src="{{ site.baseurl }}/assets/videos/quad-explorer-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
-->

## Result

The project showed that LLMs, RAG, and robot control can be combined into a single demonstrable user flow instead of remaining separate experiments.

## What I Learned

I learned that leveraging existing control modules well can make complex robotics experiments more realistic and faster to iterate on.
