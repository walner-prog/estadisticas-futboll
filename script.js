document.addEventListener('DOMContentLoaded', function () {
    const futbolistasList = document.querySelector('.futbolistas-list');

    // Datos de ejemplo con imágenes de internet
    //const futbolistas = [
    //    { nombre: 'Lionel Messi', imagen: 'https://i.imgur.com/1.jpg', estadisticas: ['Goles: 3009', 'Asistencias: 890', 'Partidos: 2000'] },
      //  { nombre: 'Cristiano Ronaldo', imagen: 'https://i.imgur.com/2.jpg', estadisticas: ['Goles: 2999', 'Asistencias: 840', 'Partidos: 2300'] },
        // Agrega más futbolistas aquí
   ;const futbolistas = [
        { nombre: 'Erling Haaland', imagen: 'img/halan.jpg', estadisticas: ['Goles: 25', 'Asistencias: 10', 'Partidos: 30'] },
        { nombre: 'Cristiano', imagen: 'img/cr7.jpg', estadisticas: ['Goles: 878', 'Asistencias: 237', 'Partidos: 400'] },
        { nombre: 'Lewandowski', imagen: 'img/09-ROBERT_LEWANDOWSKI.jpg', estadisticas: ['Goles: 30', 'Asistencias: 12', 'Partidos: 28'] },
        { nombre: 'Kylian Mbappe', imagen: 'img/embapppe.jpeg', estadisticas: ['Goles: 20', 'Asistencias: 18', 'Partidos: 32'] },
        { nombre: 'Pedri', imagen: 'img/Pedri.jpeg', estadisticas: ['Goles: 5', 'Asistencias: 20', 'Partidos: 29'] },
        { nombre: 'Lionel Messi', imagen: 'img/messi-argentina.jpg', estadisticas: ['Goles: 1000', 'Asistencias: 690', 'Partidos: 399'] },
        { nombre: 'Bernardo Silva', imagen: 'img/bernardo.jpg', estadisticas: ['Goles: 12', 'Asistencias: 8', 'Partidos: 27'] },
        { nombre: 'Kevin De Bruyne', imagen: 'img/kevin.jpg', estadisticas: ['Goles: 10', 'Asistencias: 22', 'Partidos: 30'] },
        { nombre: 'Ilkay Gündogan', imagen: 'img/jugador_fitxa-gundogan.jpg', estadisticas: ['Goles: 8', 'Asistencias: 15', 'Partidos: 27'] },
          { nombre: 'Sadio Mane', imagen: 'img/221117-sadio-mane-get.jpg', estadisticas: ['Goles: 8', 'Asistencias: 15', 'Partidos: 25'] },
          { nombre: 'Toni Kros', imagen: 'img/kros.jpg', estadisticas: ['Goles: 8', 'Asistencias: 15', 'Partidos: 25'] },
          { nombre: 'Modric', imagen: 'img/modric.jpg', estadisticas: ['Goles: 8', 'Asistencias: 15', 'Partidos: 25'] },
       // { nombre: 'Harry Kane', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 30', 'Asistencias: 12', 'Partidos: 28'] },
       // { nombre: 'Mohamed Salah', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 28', 'Asistencias: 15', 'Partidos: 33'] },
      //  { nombre: 'Antoine Griezmann', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 18', 'Asistencias: 10', 'Partidos: 26'] },
      //  { nombre: 'Vinicius Jr', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 15', 'Asistencias: 12', 'Partidos: 29'] },
      //  { nombre: 'Bukayo Saka', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 10', 'Asistencias: 20', 'Partidos: 31'] },
      //  { nombre: 'Jamal Musiala', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 7', 'Asistencias: 10', 'Partidos: 22'] },
       
      //  { nombre: 'Victor Osimhen', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 14', 'Asistencias: 8', 'Partidos: 24'] },

      //  { nombre: 'William Saliba', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 2', 'Asistencias: 5', 'Partidos: 20'] },
      //  { nombre: 'Trent Alexander-Arnold', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 5', 'Asistencias: 18', 'Partidos: 32'] },
      //  { nombre: 'John Stones', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 3', 'Asistencias: 10', 'Partidos: 26'] },
      //  { nombre: 'Rafael Leao', imagen: 'URL_de_la_imagen', estadisticas: ['Goles: 13', 'Asistencias: 7', 'Partidos: 23'] },
       // { nombre: 'Declan Rice', imagen: 'img/', estadisticas: ['Goles: 5', 'Asistencias: 10', 'Partidos: 28'] },
    ];
    

    futbolistas.forEach(futbolista => {
        const futbolistaDiv = document.createElement('div');
        futbolistaDiv.classList.add('futbolista');

        const imagen = document.createElement('img');
        imagen.src = futbolista.imagen;
        imagen.alt = futbolista.nombre;

        const estadisticasDiv = document.createElement('div');
        estadisticasDiv.classList.add('estadisticas');

        futbolista.estadisticas.forEach(estadistica => {
            const p = document.createElement('p');
            p.textContent = estadistica;
            estadisticasDiv.appendChild(p);
        });

        futbolistaDiv.appendChild(imagen);
        futbolistaDiv.appendChild(document.createElement('h2')).textContent = futbolista.nombre;
        futbolistaDiv.appendChild(estadisticasDiv);

        futbolistasList.appendChild(futbolistaDiv);
    });
});

