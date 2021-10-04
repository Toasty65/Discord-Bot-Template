const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pong"),

    async execute(client, interaction) {
        return interaction.reply("pong!")
    }
}