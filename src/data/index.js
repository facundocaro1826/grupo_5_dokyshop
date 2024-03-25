const fs = require('fs');
const path = require('path')
module.exports = {
   loadData: (filenameJSON = 'product') => {
    const pathJson = path.join(__dirname, `./${filenameJSON}.json`);   //cargar datos al json

    if(!fs.existsSync(pathJson)){
      fs.writeFileSync(pathJson, '[]', 'utf-8')  // lee si existe el archivo, si no existe te lo crea al json [{}].-
    }

    const dataJson = fs.readFileSync(pathJson, 'utf-8');               // guardar datos
    const dataJs = JSON.parse(dataJson);
    return dataJs;
   },
   saveData: (data, filenameJSON = 'product')=>{
    const pathJson = path.join(__dirname, `./${filenameJSON}.json`);
    const dataString = JSON.stringify(data, null, 3)
    fs.writeFileSync(pathJson, dataString, 'utf-8')
   }
}