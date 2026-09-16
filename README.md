# Bonggyu Lim Portfolio

## 방문 분석

GitHub Pages 배포 빌드에 GA4 측정 ID `G-P3WYBWSSYQ`가 설정되어 있습니다. React Router의 페이지 이동은 GA4 웹 스트림의 향상된 측정에서 브라우저 기록 기반 페이지 조회를 켜 두면 집계됩니다. 로컬 배포 빌드에서는 `VITE_GA4_MEASUREMENT_ID`를 별도로 설정해야 합니다.

내 브라우저의 방문을 제외하려면 배포된 사이트에서 한 번 `?exclude_analytics=true`를 붙여 접속합니다. 설정은 해당 사이트·브라우저의 `localStorage`에 저장되고 주소의 파라미터는 자동으로 제거됩니다. 다른 브라우저나 휴대폰은 각각 설정해야 합니다. 개발 서버(`localhost`)에서는 GA4 태그를 로드하지 않습니다.
