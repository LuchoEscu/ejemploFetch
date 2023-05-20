const mostrarPersonas = () => {
    fetch('data.json')
        .then(res => res.json())
        .then(res => {
            res.forEach(persona => {
                alert(persona.nombre);
            });
        }
            
            )
}