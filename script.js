// Make an object that has objects of computer RAM CPU and maker of the computer and try to output the object of preferred method

const computers = [
      {
      //   Get specifications of the current object values
        manufacturer: "Dell",
        processor: "Intel Core i7",
        RAM: "16GB",
        getSpecifications() {
          return `Manufacturer: ${this.manufacturer}, Processor: ${this.processor}, RAM: ${this.RAM}`;
        }
      },
      {
        manufacturer: "Apple",
        processor: "M1",
        RAM: "8GB",
        getSpecifications() {
          return `Manufacturer: ${this.manufacturer}, Processor: ${this.processor}, RAM: ${this.RAM}`;
        }
      },
      {
        manufacturer: "HP",
        processor: "AMD Ryzen 5",
        RAM: "12GB",
        getSpecifications() {
          return `Manufacturer: ${this.manufacturer}, Processor: ${this.processor}, RAM: ${this.RAM}`;
        }
      }
    ];
//     Loop trough all objects available
    computers.forEach((computer, index) => {
      console.log(`Computer ${index + 1}: ${computer.getSpecifications()}`);
    });
    
// const getComputerObj = () => {
//       return `${computer.maker.computerMaker}'s computer with ${computer.CPU.model} CPU with ${computer.CPU.cores} cores ${computer.CPU.threads} threads and ${computer.RAM.capacity} RAM`;
// }

// console.log(getComputerObj()); 




