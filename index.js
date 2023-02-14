const brain = require('brainjs')
// creating the NeuralNetworks

const network = new brain.NeuralNetwork()

//training the network

network.train([
  { input: [1, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [0, 0], output: [1] },
  { input: [1, 1], output: [0] },
])

const output = network.run([0, 0])
console.log(`probability : ${output}`)