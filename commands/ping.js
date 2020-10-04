exports.run = async(client, message, args) => {
    message.channel.send("Ping!").then(message => {
        message.edit(`Pong! ${client.ws.ping}ms`)
    })
}