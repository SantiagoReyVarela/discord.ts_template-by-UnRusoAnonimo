import { CustomClient } from '../classes'
export type event = {
    name: string,
    run: (client: CustomClient, args?: any[]) => void
}