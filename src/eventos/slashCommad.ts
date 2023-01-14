import * as Discord from 'discord.js'
import { CustomClient } from '../util/classes'
import { command} from '../util/types'

export const name: string = 'interactionCreate';
export const run = (client: CustomClient, interaction: Discord.ChatInputCommandInteraction): void => {
    if (!interaction.isCommand()) return;
    
    const comando: command = client.comandos.get(interaction.commandName);
    if (comando) {
        comando.run(client, interaction);
    } else {
        interaction.reply({ content: '❌ | ¡El comando no existe o está desactualizado!' });
    }
}
