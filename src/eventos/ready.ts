import { CustomClient } from '../util/classes'
import * as Discord from 'discord.js';

export const name: string = 'ready';

export const run = (client: CustomClient): void => {
    console.log(`✅ | ${client.user?.username} encendido en ${client.guilds.cache.size} servidores`.green);
}
