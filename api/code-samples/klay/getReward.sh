curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/getRewards' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_getRewards",
  "id": 1,
  "jsonrpc": "2.0",
  "params": [
    "latest"
  ]
}'
