curl -X 'POST' \
  'https://api.baobab.klaytn.net:8651/klay/accountCreated' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "method": "klay_accountCreated",
  "params": [
    "0xa4f42d4d2a3a13874406435500950c9bf2d783db",
    "latest"
  ]
}'
