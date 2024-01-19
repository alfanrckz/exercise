package main

import "fmt"

func main() {
	var names [3]string

	names[0] = "alfan"
	names[1] = "syuri"
	names[2] = "ziaulhaq"

	fmt.Println(names[0])
	fmt.Println(names[1])
	fmt.Println(names[2])

	//cara yang lebih simpel
	var values = [3]int{
		89,
		90,
		95,
	}

	fmt.Println(values)
	fmt.Println(values[0])
	fmt.Println(values[1])
	fmt.Println(values[2])

	//function len untuk mengakses panjang array
	fmt.Println(len(names))
	fmt.Println(len(values))

	var baru [10]string
	fmt.Println(len(baru))

}
