import * as Discord from 'discord.js'
import { command} from '../types'

export class CustomClient extends Discord.Client {
    comandos: Discord.Collection<string, any> = new Discord.Collection()
}