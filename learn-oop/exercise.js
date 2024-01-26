class Computer {
    constructor(monitor, cpu) {
        this.monitor = monitor;
        this.cpu = cpu;
    }
    getInfo() {
        return `Monitor: ${this.monitor}, Processor: ${this.cpu}`
    }

    description(){
       console.log(`My monitor is ${this.monitor}`)
    }

}


const computer1 = new Computer ('MSI', 'icore 7')
const computer2 = new Computer ('MSi', 'icore 8')

console.log(computer1.getInfo() );
console.log(computer2.getInfo() );

computer1.description()
computer2.description()


