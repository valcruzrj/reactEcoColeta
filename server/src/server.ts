import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();
    const users = [
        'Val',
        'Monica',
        'Tom'
    ];

    
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    

app.listen(3333);