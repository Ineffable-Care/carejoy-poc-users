import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface LyftApiResponse {
  // Define the structure of the Lyft API response here
  // Example: 
  data: {
    // ...
  };
}

const app = express();
const port = 3000;

app.use(express.json());

// Define your REST API endpoints here
app.get('/api/users', (req: Request, res: Response) => {
  // Handle GET request for /api/users
  // Your logic here
  res.send('GET /api/users');
});

app.post('/api/users', (req: Request, res: Response) => {
  // Handle POST request for /api/users
  // Your logic here
  res.send('POST /api/users');
});

app.get('/api/lyft', async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse<LyftApiResponse> = await axios.get('https://api.lyft.com/v1/endpoint');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error connecting to Lyft API');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
