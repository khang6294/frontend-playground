import express, { Request, Response, NextFunction } from 'express';
import { AxiosError } from 'axios';
import cors from 'cors';
import routes from 'routes';
import compression from 'compression';
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(cors());

app.use(helmet()); //secure response header
app.use(compression()); // compressing assests

// Allow cross-origin requests
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// api routes
app.use('/api/v1', routes);

// Errors handling middleware
app.use((error: AxiosError, req: Request, res: Response, next: NextFunction) => {
    const status = error.response?.status || 500;
    const message = error.message;
    res.status(status).json({message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});