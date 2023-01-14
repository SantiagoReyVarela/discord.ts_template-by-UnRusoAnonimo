import * as Discord from 'discord.js';
import {CustomClient} from './util/classes'

const client: Discord.Client<boolean> = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ],
    partials: [
        Discord.Partials.GuildMember,
    ]
});
const config = require(`${process.cwd()}/external/config/config.json`);
import * as colors from 'colors'

client.login(config.token);

let handlers = ['eventos', 'comandos'];
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client);
});