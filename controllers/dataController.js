const { sql } = require('../connection/db');

const getData = async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM your_table`;
    res.json(result.recordset);
  } catch (error) {
    console.error('Error en la consulta', error);
    res.status(500).send('Error al obtener datos');
  }
};

module.exports = { getData };
