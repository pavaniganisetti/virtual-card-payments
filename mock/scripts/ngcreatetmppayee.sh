curl --location --request POST 'http://127.0.0.1:8080/ng/payouts/v1/tmppayees/' \
 -v --cookie "AFCUSEREUSCONAB=8YTfDRB7kJ8JXaq3PACMiI1HCSV43D" \
--header 'Content-Type: application/json' \
--header 'client_key: 2566389040' \
--header 'product: orbipay_payouts' \
--header 'channel: 13' \
--data '{  
   "payeeReference":"AP20ayo2323219001",
   "firstName" :"FIRST",
   "lastName":"LAST",
   "dateOfBirth":"1994-06-12",
   "gender":"male",
   "address":{  
      "addressLine1":"1-46/A",
      "addressZip2":"1234"
   },
   "payeeAccounts":[  
      {  
         "accountHolderName":"Gpay Test",
         "nickName":"Health Insurance Policy",
         "accountNumber":"2609253131318192",
         "address":{  
            "addressLine1":"1-46/A",
            "addressLine2":"Indiranagar"
         },
         "payeeAccountReference":"2184335799",
         "comments":"my account1"
      }
   ]
}'


