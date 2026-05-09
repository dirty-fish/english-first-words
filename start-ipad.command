#!/bin/zsh
cd "$(dirname "$0")"
echo "English First Words"
echo
ip="$(ipconfig getifaddr en0 2>/dev/null)"
port=""

for candidate in 4174 4175 4176 4177 4178 4179 4180; do
  if ! lsof -nP -iTCP:"$candidate" -sTCP:LISTEN >/dev/null 2>&1; then
    port="$candidate"
    break
  fi
done

if [ -z "$port" ]; then
  echo "Could not find a free port from 4174 to 4180."
  echo "Close another server window and try again."
  read -r "?Press Enter to close."
  exit 1
fi

echo "Open this address on your iPad while it is on the same Wi-Fi:"
if [ -n "$ip" ]; then
  echo "http://$ip:$port/index.html"
else
  echo "Could not detect Wi-Fi IP. Check System Settings > Wi-Fi > Details."
  echo "This Mac-only address should still work here:"
  echo "http://127.0.0.1:$port/index.html"
fi
echo
echo "Keep this window open while the iPad uses the app."
echo
python3 -m http.server "$port" --bind 0.0.0.0
