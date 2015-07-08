# Filters

Este ejemplo se llama filters porque muestra el uso de algunos filtros provistos por AngularJS out-of-the-box, como date, uppercase, limitTo y currency. Aparte hay otras cosas interesantes como el uso del servicio $interval, el uso de tabs de Bootstrap, y algunos jueguitos de responsibilidad.

## ¿Cómo ejecutar el ejemplo?

Simplemente abriendo el index.html con un navegador web.

## ¿Cómo ejecutar los unit tests?

Si es la primera vez que se ejecutan, se deben bajar las dependencias con npm:
> npm install

Parado en el root del proyecto, ejecutar:
> node_modules/karma/bin/karma start

Si no queremos usar el cliente de karma que acaba de instalar NPM, podemos instalar karma-cli globalmente:
> npm install -g karma-cli

Y luego ejecutar:
> karma start
