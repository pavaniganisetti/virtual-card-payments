curl --location --request POST 'http://127.0.0.1:8080/ng/payouts/v1/payees/943755/tmpcreditaccounts' \
 -v --cookie "AFCUSEREUSCONAB=8YTfDRB7kJ8JXaq3PACMiI1HCSV43D" \
--header 'Content-Type: application/json' \
--header 'client_key: 2566389040' \
--header 'product: orbipay_payouts' \
--header 'channel: 13' \
--data '{  
   "comments":"Account for GBR",
   "accountHolderName":"GBR1.16",
   "nickname":"GBR1.16",
   "accountNumber":"35542354",
   "acctCurrency":"GBP",
  "address":{  
      "addressCountry":"GBR"
   },   
   "bankName":"Bank of London",
   "accountType":"bank",
   "accountSubtype":"savings",
   "accountHolderType":"personal",
   "routingCodeType1":"sort_code",
   "routingCodeValue1":"100000",
   "beneficiaryIdentificationType":"green_card",
   "beneficiaryIdentificationValue":"12356"
}'


