# TODO with Tests

Este ejemplo es el mismo de la TODO list, pero con Unit Tests escritos con Jasmine y configurados para correr con Karma y PhantomJS.

El ejemplo muestra cómo testear un Controller haciendo uso de angular-mocks.

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
