GUÍA GIT + GITHUB 👨‍💻👩‍💻

Regla de Oro: NUNCA se trabaja directamente en la rama main. Siempre en una rama nueva para cada tarea.
________________________________________
🚀 PUESTA EN MARCHA
Descargar el proyecto con git clone. 
•	En la terminal, escribir solo el comando: git clone y el link del repositorio. Por ejemplo: git clone https://github.com/europons/retoNTTGrupo1.git

________________________________________
▶️ A) Para EMPEZAR una Tarea Nueva
Cada vez que vayas a hacer algo nuevo (un botón, una pantalla, un arreglo...), sigue estos 3 pasos en tu terminal:
1.	Primero, ve a la rama principal escribiendo git checkout main.
2.	Luego, descarga la última versión del proyecto con git pull origin main.
3.	Ahora, crea tu propia rama de trabajo con git checkout -b seguido del nombre de tu tarea. Por ejemplo: git checkout -b home.
Ya estás en tu rama, aislado y seguro para trabajar.
________________________________________
💾 B) Mientras TRABAJAS en tu Tarea/Rama
1.	Añade tus cambios escribiendo git add . (muy importante el punto al final).
2.	Guarda los cambios con un mensaje, escribiendo git commit -m "un mensaje que describa lo que has hecho". Por ejemplo: git commit -m "añadido el logo a la cabecera".
Puedes repetir estos dos pasos tantas veces como quieras. Si no hay tiempo tampoco hace falta hacer muchos commits.
________________________________________
✅ C) Para TERMINAR y Entregar la Tarea finalizada
Has acabado tu parte, la has probado en tu rama y funciona bien. Ten en cuenta de tener hecho el git add . y git commit -m de todo lo hecho.
1.	Sube tu rama a GitHub. Escribe git push origin seguido del nombre de tu rama. Por ejemplo: git push origin home.
2.	Ve a la página web de GitHub. Verás un aviso en amarillo. Pulsa el botón verde para crear un Pull Request. Pon un nombre y una descripción breve si lo deseas. No hace falta que nadie revise el Pull Request debido al poco tiempo.
3.	📢 Avisa al equipo: "¡Equipo, voy a subir la cabecera!"
4.	En la web, pulsa el botón verde Merge pull request y luego el botón Delete branch.
5.	📢 Vuelve a avisar: "¡Listo, la cabecera ya está en main! ¡Haced todos pull para actualizar!"
6.	Vuelta a empezar con el paso A.
