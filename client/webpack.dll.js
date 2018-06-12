const path = require('path');
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
	entry: {
		vendor: [
			'axios',
			'classnames',
			'react',
			'react-dom',
			'react-redux',
			'react-router-dom',
			'redux',
			'redux-thunk'
		],


	},

	output:{
		path: path.join(__dirname, 'build'), //La carpeta donde queremos generar el Output.
		filename: 'js/[name].[hash].js', //El nombre del archivo generado por Webpack con el Build.

		//Liberamos un archivo con una referencia global en el navegador para que
		//el plugin (webpack.DllReferencePlugin) lo pueda enlazar y entender.
		library: '[name]' //Variable Global en el Navegador.
	},

	plugins:[
		new webpack.DllPlugin({
			//Donde vas a exportar el JSON que genera DllPlugin y que nombre tiene.
			//Un JSON con las rutas para que no se rompan las dependencias que es requerido
			//por el plugin (webpack.DllReferencePlugin)
			path: path.join(__dirname, '[name]-dll-manifest.json'),
			//Que nombres vamos a exportar que serviran como referencias al
			//otro archivo.
			name: '[name]'
		}),

		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|css|ttf|svg|eot)$/,
			threshold: 0, //Tamaño minimo en bytes para que un archivo se comprima
			minRatio: 0.8, //Ratio de compresion
		})

	]
}