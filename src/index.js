import app from './app.js'
import {PORT} from './config.js'
import cors from 'cors'

app.use(cors()); // Habilitar CORS para toas las rutas.
console.log('server running on port ', PORT);
app.listen(PORT);


