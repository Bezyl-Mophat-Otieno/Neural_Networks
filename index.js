const brain = require('brainjs')
const data = require('./data.json')
// creating the NeuralNetwork
const network = brain.recurrent.LTSM()

const trainingData = data.map((item =>{
 return  {
    input:item.text,
    output:item.category
  }
}))

//training the network
network.train(trainingData,{
  iterations:2000
});

//Testing the Model for a given input 

const output = network.run("I made corrections on the program flow")
console.log(`Category : ${output}`)