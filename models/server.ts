import express, {Application} from 'express';
//Se puede importa con el nombre personlizado directamente al estar exportado por defecto en su archvio.
import userRoutes from '../routes/usuario';
import cors from 'cors';

import db from '../db/connection';


class Server {

   private app: Application;
   private port: string;
   private apiPaths = {
      usuarios: '/api/usuarios'
   }

   constructor(){
      this.app = express();
      this.port = process.env.PORT || '8000';

      this.dbConnection();

      //Métodos iniciales
      this.middlewares();
      this.routes();

   }

   //TODO: conectar bbdd 
   async dbConnection(){
      try {

         await db.authenticate();
         console.log('Database online')
         
      } catch (error: any) {

         throw new Error ( error );
         
      }
   }

   middlewares(){
      //cors
      this.app.use(cors());

      //lectura body
      this.app.use( express.json());

      //carpeta publica
      this.app.use( express.static('public'));

   }

   routes(){
      this.app.use( this.apiPaths.usuarios, userRoutes );
   }

   listen(){
      this.app.listen( this.port, ()=>{
         console.log('servidor corriendo en puerto'+ this.port );
      })
   }
}

export default Server;