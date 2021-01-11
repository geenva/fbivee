exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    var responses = ["Will you shut up, man?", "Folks, do you have any idea what this clown is doing?", "And him, too.", "FLY WILL VOTE"]
    var pics = ["https://api.time.com/wp-content/uploads/2019/09/joe-biden-ukraine-fundraising.jpg?w=800&quality=85"]
    const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('Ask Biden')
	.setImage(pics[Math.floor(Math.random() * pics.length)]);

    message.channel.send(exampleEmbed);
}