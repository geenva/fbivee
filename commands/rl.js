exports.run = (client, message, args) => {
    const config = require("../config.json");
    if(message.member.id != config.ownerid) {
        return message.reply(`no u`), console.log(`${message.member.user.tag} (${message.member.user.id}) isnt the owner smfh`);
    }
    if(!args || args.length < 1) {
        return message.reply(`, fr?`), console.log(`${message.member.user.tag} (${message.member.user.id}), fr? gib me sth or die`);
    }
    const commandName = args[0];
    if(!client.commands.has(args)) {
        return message.reply(`gib me sth that actually exists smfh`), console.log(`${message.member.user.tag} (${message.member.user.id}), fr? gib me sth that exists`);
    }
    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`<@${message.member.id}>, *loads gun* got it`);
    console.log(`bui bui ${message.member.user.tag} (${message.member.user.id}) reloaded ${args}`);
    };