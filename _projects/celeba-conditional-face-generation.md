---
title: CelebA Conditional Face Generation
slug: celeba-conditional-face-generation
description: Comparative experiment between a Conditional DCGAN baseline and an improved condition-control architecture.
image: placeholder.png
date: 2026-05-15
---

## Overview

An image generation experiment on CelebA 64x64 comparing a Conditional DCGAN baseline with a ControlGAN-style auxiliary classifier approach for better condition control.

## Role

I designed the experiment setup, organized the label conditions, structured the training pipeline, and prepared the comparison format for generated outputs.

## Tech Stack

- PyTorch
- Conditional DCGAN
- Auxiliary Classifier
- CelebA

## Key Features

- Attribute-conditioned face generation
- Baseline versus improved architecture comparison
- Fixed sample tracking during training
- Condition-wise output comparison
- Training log and generation result review

## Architecture

The experiment organizes the condition input, generator, discriminator, and auxiliary classifier so repeated comparisons are easier to run and analyze.

<div class="hyde media-placeholder">Architecture image placeholder</div>

## Demo

<div class="hyde media-placeholder">Demo video placeholder</div>

<!--
<video controls width="100%">
  <source src="{{ site.baseurl }}/assets/videos/celeba-conditional-face-generation-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
-->

## Result

The setup created a repeatable comparison base for conditions such as `Male`, `Eyeglasses`, `Young`, `Black_Hair`, `Blond_Hair`, and `Brown_Hair`.

## What I Learned

I learned that conditional generation experiments are easier to interpret when condition consistency and comparison criteria are designed from the beginning.
