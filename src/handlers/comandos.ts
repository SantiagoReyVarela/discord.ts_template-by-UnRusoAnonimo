import {CustomClient} from '../util/classes'
import * as Discord from 'discord.js';
import * as fs from 'fs'
const comandosDir = `${process.cwd()}/build/comandos`;
const config = require(`${process.cwd()}/external/config/config.json`);
require('colors')

module.exports = async (client: CustomClient) => {
    let arrayComandos: any = [];
    let comandosCargados = 0;

    client.comandos=new Discord.Collection()

    fs.readdirSync(comandosDir).forEach(async dir => {
        let loaded: number = 0;
        const comandos: string[] = fs.readdirSync(`${comandosDir}/${dir}`).filter(archivo => archivo.endsWith('.js'));
        for (const archivo of comandos) {

            const comando = require(`${comandosDir}/${dir}/${archivo}`);
            
            client.comandos.set(comando.data.name, comando);
            arrayComandos.push(comando.data.toJSON());
            console.log(`✅ | Comando ${archivo.replace(/.js/, '')} cargado`.yellow);
            comandosCargados++;
            loaded++;
        }

        (await client.guilds.fetch()).forEach(async server => {
            if (config.guildID!=="" && server.id !== config.guildID) return;
            
            await new Discord.REST({ version: '10' }).setToken(config.token).put(
                Discord.Routes.applicationGuildCommands(config.clienteID, server.id), {
                body: arrayComandos
            }
            );
        })

        return console.log(`✅ | Cargado ${loaded} comandos de ${dir}`.blue);;
    });

    console.log(`✅ | Se han cargado ${comandosCargados} comandos en total`.blue)
}