import { event } from '../util/types'
import { CustomClient } from '../util/classes'
import * as Discord from 'discord.js';
import * as fs from 'fs'
require('colors')
const eventosDir = `${process.cwd()}/build/eventos`;

module.exports = (client: CustomClient) => {
    const eventos: string[] = fs.readdirSync(eventosDir).filter(archivo => archivo.endsWith('.js'));
    for (const archivo of eventos) {        
        const evento: event= require(`${eventosDir}/${archivo}`);
        client.on(evento.name, (...args) => evento.run(client, ...args));
        console.log(`✅ | Evento ${archivo.replace(/.js/, '')} cargado`);
    }
}