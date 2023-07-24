export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lVPGdrpOBkkzG4VESOc5GdER1bDQjuZX&q=${category}&limit=20`
    const response = await fetch(url);
    const data   = await response.json();
    
    //Esto lo que hace es recorrer la data y por cada uno retorna un objeto solo con id, tittle,url ya que la api trae mucha informacion pero solo me importa esas 3
    const gifs = data.data.map(img => {
        return (
            {
                id: img.id,
                title: img.title,
                url:img.images.downsized.url
            }
        )
    })
    console.log(gifs)
    return gifs
}

