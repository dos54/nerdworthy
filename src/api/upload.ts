import { NextApiRequest, NextApiResponse } from "next";
import {supabase} from '@/lib/supabase';
import {query} from '@/lib/neon';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const {fileName, imageFile, title, description} = req.body;

            const {data, error} = await supabase.storage
                .from('gallery')
                .upload(fileName, Buffer.from(imageFile, 'base64'), { 
                    contentType: 'image/jpeg',
                });
            
            if (error) {
                throw new Error(`Supabase upload error: ${error.message}`);
            }

            const { data: publicUrl } = supabase.storage.from('gallery').getPublicUrl(data.path);

            const result = await query(
                `INSERT INTO gallery (title, description, image_url) VALUES ($1, $2, $3) RETURNING id`,
                [title, description, publicUrl]
            );

            res.status(200).json({ id: result.rows[0].id, message: 'Upload successful'});
        } catch (error: any) {
            console.error(error);
            res.status(500).json({error: error.message});
        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}