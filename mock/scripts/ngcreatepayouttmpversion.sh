curl --location --request POST 'http://127.0.0.1:8080/ng/payouts/v1/payees/943755/payouts/616425/tmpversions' \
 -v --cookie "AFCUSEREUSCONAB=8YTfDRB7kJ8JXaq3PACMiI1HCSV43D" \
--header 'Content-Type: application/json' \
--header 'client_key: 2566389040' \
--header 'product: orbipay_payouts' \
--header 'channel: 13' \
--data '{  
  "payoutReference":"1111111119",
  "amount":"9000",
  "payoutDate":"2020-05-15",
  "fixedSide":"1",
"reason" : "myreason2",
"paymentType":"1",
  "payee":{  
     "id":"943755"
  },
  "creditAccount":{  
     "id":"985434"
  },
  "payeeAccount":{  
     "id":"985433"
  },
  "comments":"Payout for  964941"
}'


