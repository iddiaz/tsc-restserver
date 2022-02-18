import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async (req: Request, res: Response )=>{

   const usuarios = await Usuario.findAll();

   res.json({
      msg: 'getUsuarios',
      usuarios
   })

}

export const getUsuario = async (req: Request, res: Response )=>{

   try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
         res.status(404).json({
            msg: `No existe el usuario con el id ${id}`,
         });
      }

      res.json({
         msg: "getUsuario",
         usuario,
      });
   } catch (error: any) {
      // throw new Error(error);
      console.log(error)    
      res.status(500).json({
         msg: 'Hable con el administrador',

      });  
   }

 
}


export const postUsuario = async(req: Request, res: Response )=>{

   const { body } = req;

   try {

      const existeEmail = await Usuario.findOne({
         where: {
            email: body.email
         }
      });

      if(existeEmail){
         return res.status(400).json({
            msg: `Ya existe un usuairo con este email ${body.email}`
         })
      }

      // const usuario = new Usuario(body); 
      // const usuario = Usuario.create(body); 
      const usuario = Usuario.build(body); 
      await usuario.save();



      res.json({
         msg: 'postUsuario',
         usuario
      });
      
   } catch (error: any ) { 
      
      console.log(error)    
      res.status(500).json({
         msg: 'Hable con el administrador',

      });  
   }


}

export const putUsuario = async(req: Request, res: Response )=>{

   const { id } = req.params;
   const { body } = req;

   try {

     const usuario = await Usuario.findByPk( id );

     if( !usuario ){
        return res.status(404).json({
           msg: `No existe un usuaro con este id ${id}`
        })
     }

     await usuario.update( body );

     res.json({
        msg: 'putUsuario',
        usuario
     })

   
   } catch (error: any ) { 
      
      console.log(error)    
      res.status(500).json({
         msg: 'Hable con el administrador',

      });  
   }

}

export const deleteUsuario = async(req: Request, res: Response )=>{

   const { id } = req.params;

   try {

      const usuario = await Usuario.findByPk( id );

      if( !usuario ){
         return res.status(404).json({
            msg: `No existe un usuaro con este id ${id}`
         })
      }

      //borrado físico de bd
      // await usuario.destroy();

      await usuario.update({estado: false });


      res.json( usuario );

      



      
   } catch (error) {

      console.log(error)    
      res.status(500).json({
         msg: 'Hable con el administrador',

      }); 
      
   }

   res.json({
      msg: 'deleteUsuario',
      id
   })

}