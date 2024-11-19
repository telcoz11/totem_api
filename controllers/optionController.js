const sql = require('mssql');
const dbConfig = require('../config/dbConfig');

async function getOptions(req, res) {
  try {
    await sql.connect(dbConfig);

    const result = await sql.query('SELECT Nombre_Proceso FROM Procesos');

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error al obtener las opciones:', error);
    res.status(500).send('Error al obtener las opciones');
  }
}

module.exports = { getOptions };
