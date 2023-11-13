# NOTAS

## Backend
Para complementar este ejemplo, se usó el backend que se encuentra en:
<br/><a href="https://github.com/fullstack-hy2020/rate-repository-api">BACKEND</a>

## Componentes básicos
1. View
2. Text

## Estilos
```js
// Importacion
import { StyleSheet } from "react-native"

// Creacion
const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    strong:{
        fontWeight:"bold"
    }
})

// Uso
<Text style={styles.container}>  </Text>

// Recomendación: crear componentes que admitan estilos
const StyledText = () =>{ 
    ...
}
```

## Solución a problema con 'react-router-native' en Web Browser
Se debe instalar:
```bash
npm i @expo/webpack-config -D
```
Luego se crea en la carpeta raiz el archivo _webpack.config.js_, donde insertamos el código:
```javascript
const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv){
    const config = await createExpoWebpackConfigAsync(env, argv)

    config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
            path.join(__dirname, 'node_modules/react-router-native')
        ]
    })

    return config
}
```

## Componentes según la plataforma
Modificar un componente según la plataforma puede realizarse mediante estos metodos (al día de hoy):
1. Realizar condicionales, basados en el componete Platform de react-native
2. Crear el mismo componente modificando la extensión intermedia, e importarlos sin indicar extensión:
<br/> _MyComponent.ios.jsx_
<br/> _MyComponent.android.jsx_
```js 
import MyComponent from "./MyComponent"
```
De esta forma, se importará según lo indicado. En caso de tener otro _MyComponent.jsx_, este será aplicado por default a toda plataforma no especificada.