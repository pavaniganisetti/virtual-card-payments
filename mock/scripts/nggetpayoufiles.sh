curl --location --request POST 'http://127.0.0.1:8080/ng/payouts/v1/payoutfiles/lists' \
 -v --cookie "AFCUSEREUSCONAB=8YTfDRB7kJ8JXaq3PACMiI1HCSV43D" \
--header 'Content-Type: application/json' \
--header 'client_key: 2566389040' \
--header 'product: orbipay_payouts' \
--header 'channel: 13' \
--data '{
        "fromDate" : "2020-04-01",
	"toDate" : "2020-06-01"
}'


