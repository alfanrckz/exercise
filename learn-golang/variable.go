package main

import "fmt"

func main() {
	var name string

	name = "alfansyuri ziaulhaq"
	fmt.Println(name)

	name = "alfansyuri kennedy"
	fmt.Println(name)

	//pembuatan variable tanpa keterangan string atau tipe nilai

	var friendName = "wilson"
	fmt.Println(friendName)

	var age = 30
	fmt.Println(age)

	//pembuatan variable tanpa tanda kunci var

	country := "wakanda"
	fmt.Println(country)

	//pembuatan variable lebih singkat

	var (
		firstName = "alfansyuri"
		lastName  = "ziaulhaq"
	)

	fmt.Println(firstName)
	fmt.Println(lastName)

}
