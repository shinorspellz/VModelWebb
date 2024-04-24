// pages/api/AssetLinks.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    try {
        const assetlinksPath = path.join(process.cwd(), 'public', '.well-known', 'assetlinks.json');
        const assetlinksContent = fs.readFileSync(assetlinksPath, 'utf-8');

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(assetlinksContent);
    } catch (error) {
        console.error('Error reading assetlinks.json:', error);
        res.status(500).end('Internal Server Error');
    }
}
