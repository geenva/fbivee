exports.run = (client, message, args) => {
    var ping = Date.now() - message.createdTimestamp;
    message.channel.send(`Pong! \`${ping}ms\``);
}