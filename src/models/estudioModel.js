import conexao from "../../db.js";

export function listar(callback){
    const sql = "SELECT * FROM estuidos ORDER BY id";
    conexao.queryObjects(sql, [id], callback);
}

export function buscarPorId(id, callback){
 const sql = "SELECT * FROM estuidos WHERE id = ?";
    conexao.queryObjects(sql, [id], callback);
}

export function criar(dados, callback){
     const sql = "INSERT INTO estudios (nome, pais) VALUES (?, ?)";
    conexao.queryObjects(sql, [dados.nome, dados.pais, id], callback);
}

export function atualizar(id, dados, callback){
     const sql = "UPDATE estudios SET nome = ?, pais = ? WHERE id = ?";
    conexao.queryObjects(sql, [id], callback);
}

export function excluir(id, callback){
     const sql = "DELETE FROM estudios WHERE id = ?";
    conexao.queryObjects(sql, [id], callback);
}