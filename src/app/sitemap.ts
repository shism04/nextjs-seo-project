import { ProductsResponse } from "@/models/Products";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Realizamos una solicitud a la API para obtener los productos
    const response = await fetch("https://dummyjson.com/products");
    const { products }: ProductsResponse = await response.json();
    
    // Creamos una entrada de sitemap para cada producto
    const productsEntries: MetadataRoute.Sitemap = products.map(({ category, title }) => {
        return {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${category}/${title.toLowerCase().replace(/\s+/g, "-")}`,  // URL del producto
            // lastModified: new Date(),  // Indicar la fecha de la última modificación del producto (se puede descomentar si se desea usar)
            // changeFrequency: 'daily',   // Frecuencia de cambio (ej. diario, semanal, etc.)
            // priority: 0.8,             // Prioridad en el índice de rastreo (de 0.0 a 1.0, se puede ajustar)
        };
    });

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`, // URL para la página de productos
            // lastModified: new Date(),  // Fecha de la última modificación (puede activarse si es necesario)
            // changeFrequency: 'weekly',  // Indicar la frecuencia con que se actualiza la página de productos
            // priority: 1.0,             // Indicar la prioridad de rastreo
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,  // URL para la página de 'Acerca de'
            // lastModified: new Date(),  
            // changeFrequency: 'monthly'
            // priority: 0.5,       
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`, 
            // lastModified: new Date(),
            // changeFrequency: 'monthly',
            // priority: 0.5,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy`, 
            // lastModified: new Date(),
            // changeFrequency: 'yearly',  
            // priority: 0.3,             // Baja prioridad
        },
        ...productsEntries 
    ]
}
