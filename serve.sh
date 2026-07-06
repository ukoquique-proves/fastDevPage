#!/bin/bash
cd /root/aPROYECTOS/LANDING_PAGE/uko_WebSite
python3 -m http.server 8080 &
SERVER_PID=$!

# Wait until the server is actually accepting connections
for i in {1..10}; do
    if curl -s http://localhost:8080 > /dev/null 2>&1; then
        break
    fi
    sleep 0.5
done

xdg-open http://localhost:8080
wait $SERVER_PID
