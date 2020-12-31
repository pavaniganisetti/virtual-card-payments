curl --location --request POST 'http://127.0.0.1:8080/ng/payouts/v1/payees/' \
 -v --cookie "AFCUSEREUSCONAB=8YTfDRB7kJ8JXaq3PACMiI1HCSV43D" \
--header 'Content-Type: application/json' \
--header 'client_key: 2566389040' \
--header 'product: orbipay_payouts' \
--header 'channel: 13' \
--data '{  
   "payee_reference":"AP14ayo2323219001",
   "first_name":"GPAY2",
   "middle_name":"Sai",
   "last_name":"TEST",
   "date_of_birth":"1994-06-12",
   "ssn":"999999999",
   "locale":"af_ZA",
   "email":"gpay.test@alacriti.com",
   "home_phone":"1111111111",
   "work_phone":"2222222222",
   "mobile_phone":"9949688782",
   "gender":"male",
   "address":{  
      "address_line1":"1-46/A",
      "address_line2":"Indiranagar",
      "address_city":"Karimnagar",
      "address_state":"NJ",
      "address_country":"USA",
      "address_zip1":"12345",
      "address_zip2":"1234"
   },
   "payee_accounts":[  
      {  
         "account_holder_name":"Gpay Test",
         "nickname":"Health Insurance Policy",
         "account_number":"2009253131318192",
         "address":{  
            "address_line1":"1-46/A",
            "address_line2":"Indiranagar",
            "address_city":"Karimnagar",
            "address_state":"NJ",
            "address_country":"USA",
            "address_zip1":"12345",
            "address_zip2":"1234"
         },
         "payee_account_reference":"1684335799",
         "comments":"my account1"
        
      }
   ]
}'


