package main

import "fmt"

func main() {
	person := map[string]string{
		"name":    "alfan",
		"address": "Tangsel",
	}

	person["title"] = "programmer"

	fmt.Println(person)
	fmt.Println(person["name"])
	fmt.Println(person["address"])

}
