import * as Discord from 'discord.js'
import { CustomClient } from '../../util/classes'
export type command={
    data: Discord.ChatInputCommandInteraction,
    run: (client: CustomClient, interaction: Discord.ChatInputCommandInteraction) => void
} 