import * as Discord from 'discord.js'
import { CustomClient } from '../../util/classes'


export const data: Discord.SlashCommandBuilder = new Discord.SlashCommandBuilder()
    .setName('ping')
    .setDescription('Sirve para ver la latencia del bot');

export async function run(client: CustomClient, interaction: Discord.ChatInputCommandInteraction) {
    await interaction.deferReply({ ephemeral: false });

    interaction.editReply({ content: `🏓 | El ping del bot es de \`${client.ws.ping}ms\`\n` });
}
