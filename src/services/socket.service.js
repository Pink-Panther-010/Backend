const detectionController = require('../controllers/detection.controller')
const UDP = require('dgram')
const port = 82002
const server = UDP.createSocket('udp4')



server.on('listening',() => {
    const address = server.address()
    console.log("listening to", "address:", address.address, "prt:", address.port)
});

const initializeSocket = () => {
    server.on("message", (message, info) => {
        try{
            const ParsedData = JSON.parse(message.toString());
            detectionController.detectionFromBodel(ParsedData);
        } catch(error){
            console.error("Failed to save suspecct in data base");
        }
        const response = Buffer.from("Message received")
        server.send(response,info.port,info.address,(err)=>{
            if(err){
                console.error('failed to send response')
            }
            else{
                console.log('response sent successfully ')
            }
        })
    })
    server.bind(port)
}
 module.exports = {initializeSocket}