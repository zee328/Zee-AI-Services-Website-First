#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://127.0.0.1:8080}"
PATHS=("/" "/privacy-policy/" "/data-deletion/")

check_with_curl() {
  local path status
  for path in "${PATHS[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}${path}")
    if [[ "$status" == "200" ]]; then
      echo "PASS ${path} -> ${status}"
    else
      echo "FAIL ${path} -> ${status}"
      return 1
    fi
  done
}

check_with_python() {
  python3 - "$BASE_URL" <<'PY'
import sys
import urllib.request

base_url = sys.argv[1]
paths = ["/", "/privacy-policy/", "/data-deletion/"]
failed = False

for path in paths:
    url = f"{base_url}{path}"
    try:
        with urllib.request.urlopen(url) as response:
            status = response.status
        if status == 200:
            print(f"PASS {path} -> {status}")
        else:
            print(f"FAIL {path} -> {status}")
            failed = True
    except Exception as exc:
        status = getattr(exc, "code", "ERR")
        print(f"FAIL {path} -> {status}")
        failed = True

sys.exit(1 if failed else 0)
PY
}

if command -v curl >/dev/null 2>&1; then
  check_with_curl
elif command -v python3 >/dev/null 2>&1; then
  check_with_python
else
  echo "No supported HTTP client found. Install curl or python3, then re-run this script."
  exit 1
fi

echo "All required routes are reachable at ${BASE_URL}."
