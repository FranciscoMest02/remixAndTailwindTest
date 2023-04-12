import { useLoaderData } from "@remix-run/react";

class NasaImage{
    id: number;
    img_src: string;
    earth_date: string;

    constructor({ id, img, date }: any) {
        this.id = id;
        this.img_src = img;
        this.earth_date = date;
    }
}

export default function NasaImagesPAge() {
    const images = useLoaderData()
    //console.log(images)
    return(
        <>
            <h1 className="text-3xl font-bold">Imagenes de la api</h1>
            
            {images.map((image:any) => (
                <div key={image.id} className="flex max-w-xl flex-col items-start justify-between border-8">
                    <p>Fecha de la imagen</p>
                    <p>{image.earth_date}</p>
                    <img src={image.img_src}/>
                </div>
            ))}
        </>
    );
} 

export async function loader(){
    try {
		const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY`);
		const data = await res.json();
		//console.log(data);
        return data['photos'];
	} catch (err) {
		console.log(err);
	}
}