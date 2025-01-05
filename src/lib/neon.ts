import { Client } from "@neondatabase/serverless";

const client = new Client(process.env.DATABASE_URL!);

export const query = async (text: string, params?: any[]) => {
    try {
        await client.connect();
        const result = await client.query(text, params);
        return result;
    } catch (error) {
        console.error('Error querying Neon: ', error);
        throw error;
    } finally {
        await client.end();
    }
};