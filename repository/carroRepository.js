import con from './connection.js'


export  async function Buscar (carro) {
    const comando = 'select * from tb_vrum where placa = ?'
    
    let resposta = await con.query(comando, [carro]);
    let registros = resposta[0]
    return registros;
}

export  async function BuscarAll () {
    const comando = 'select * from tb_vrum'
    
    let resposta = await con.query(comando);
    let registros = resposta[0]
    return registros;
}

export  async function AddCarro (vrum) {
    const comando =  `
        insert into tb_vrum (modelo,ano, marca, cor, placa ) values (?,?,?,?,?)
    `

    let resposta = await con.query (comando, [vrum.modelo, vrum.ano, vrum.marca, vrum.cor, vrum.placa])
    let info = resposta[0]
    return info.insertId;
}

export async function DeletarCarro (id) {

    const comando = `
    delete from tb_vrum where id = ?
    `
let resposta = await con.query (comando, [id])
let info = resposta[0]

return info.affectedRows;
}

export async function modificarCarro(vrum, idcarro){
    let comando = `
    update tb_vrum 
    set modelo = ?, ano = ?, marca = ?, cor = ?, placa = ?
    where id = ?
    `

    let resposta = await con.query(comando, [vrum.modelo,vrum.ano,vrum.marca,vrum.cor,vrum.placa, idcarro])

    let info = resposta[0]
    return info.affectedRows;
}

