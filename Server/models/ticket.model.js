'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetTicket: fnGetTicket,
    setTicket:setTicket,
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetTicket(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT t.*, u.nombre,f.num_folio,tip.descripcion, sta.Descripcion as estado_ticket,areas.nombre_area, lugares.ubicacion FROM 
    ticket t,
    usuarios u,
    folios f,
    tipo_servicio tip,
    statusticket sta,
    area areas,
    lugar lugares
     WHERE 
     t.idusuarios = u.idusuarios and  t.idfolios = f.idfolios and t.idtipo_servicio = tip.idtipo_servicio and
     t.idstatusTicket = sta.idstatusTicket and t.idarea = areas.idarea and t.idlugar = lugares.idlugar;`
    )
}
function setTicket(datos) {
    console.log("Funcion existNomTicket",datos)
    return helpers.mysqlQuery('POST', conn_mysql,
    `INSERT INTO ticket (idfolios,fecha_registro,idusuarios,idtipo_servicio,asunto,mensaje,foto1,foto2,foto3,foto4,solucion,firma,idstatusTicket)
    VALUES (@idfolios,@fecha_registro,@idusuarios,@idtipo_servicio,@asunto,@mensaje,@foto1,@foto2,@foto3,@foto4,@solucion,@firma,@idstatusTicket)`
    ,datos)
}