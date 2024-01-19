package main

import "fmt"

func main() {
	type NoKTP string
	type Married bool

	var noKtpAlfan NoKTP = "000292323884499"
	var marriedStatus Married = true

	fmt.Println(noKtpAlfan)
	fmt.Println(marriedStatus)
}
