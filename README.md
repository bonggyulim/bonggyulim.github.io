# Bonggyu Lim Portfolio

Jekyll 기반 개인 포트폴리오 사이트입니다.

## Quick Start

이 프로젝트는 `git clone`만으로 바로 실행되지는 않습니다. 먼저 Ruby와 Bundler가 설치되어 있어야 합니다.

### Required Versions

- Ruby `3.3.x`
- Bundler `2.5.22`
- Jekyll `4.0.1`

현재 lockfile 기준으로 Windows `x64-mingw-ucrt` 환경에서 확인했습니다.

## Initial Setup

### 1. Clone

```bash
git clone https://github.com/bonggyulim/bonggyulim.github.io.git
cd bonggyulim.github.io
```

### 2. Check Ruby

```bash
ruby -v
bundle -v
```

권장 출력 예시:

```bash
ruby 3.3.x
Bundler version 2.5.22
```

### 3. Install Dependencies

프로젝트 내부에 gem을 설치하려면 아래처럼 실행합니다.

```bash
bundle config set path vendor/bundle
bundle install
```

### 4. Run Local Server

```bash
bundle exec jekyll serve
```

브라우저에서 확인:

- `http://127.0.0.1:4000/`
- `http://127.0.0.1:4000/projects/`

## Notes

- Windows에서는 RubyInstaller 사용을 권장합니다.
- 포트 `4000`이 이미 사용 중이면 다른 프로세스를 종료하거나 포트를 변경해 실행합니다.
- 자동 재생성이 과하게 반복되면 `_config.yml`의 `exclude` 설정을 확인하거나 `bundle exec jekyll serve --no-watch`로 실행할 수 있습니다.

## Structure

- Home: 소개, 핵심 역량, 기술 스택
- Projects: 프로젝트 목록
- Project Detail: 프로젝트 상세 설명

## Deployment

GitHub Pages:
https://bonggyulim.github.io

Original template:
ChemistryX/hyde

## License

원본 Hyde 템플릿의 MIT License를 유지합니다.
