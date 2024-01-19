package main

import "fmt"

func main() {
	var name = "alfansyuriziaulhaq"

	if name == "alfan" {
		fmt.Println("Hello alfan")
	} else if name == "syuri" {
		fmt.Println("hallo syuri")
	} else {
		fmt.Println("kenalan dong")
	}

	var length = len(name)
	if length > 5 {
		fmt.Println("terlalu panjang")
	} else {
		fmt.Println("nama sudah benar")
	}

}
