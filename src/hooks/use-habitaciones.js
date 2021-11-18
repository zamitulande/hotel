import {graphql, useStaticQuery} from 'gatsby';

const useHabitaciones = () => {

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacione{

        nodes{
			titulo
            id
            slug
            contenido
            imagen{
            fluid(maxWidth: 1200){
				...GatsbyDatoCmsFluid
           }
          }
         }
        }   
       }
      
    `);
    return  data.allDatoCmsHabitacione.nodes.map(habitacion=>({
            titulo: habitacion.titulo,
            contenido: habitacion.contenido,
            id: habitacion.id,
            imagen: habitacion.imagen,
            slug: habitacion.slug,
    }))
   
}
 
export default useHabitaciones;