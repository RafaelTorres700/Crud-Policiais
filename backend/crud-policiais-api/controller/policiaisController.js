const db = require('../db')

// Exibir os dados da tabela policiais
exports.getAll = (req, res) => {
    const sql = 'SELECT * FROM policiais'
    db.query(sql, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        res.status(200).json(resultado)
    })
}

// Buscar game por ID
// exports.getById = (req, res) => {
//     const { id } = req.params
//     const sql = 'SELECT * FROM policiais WHERE id = ?'
//     db.query(sql, [id], (erro, resultado) => {
//         if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
//         if (resultado.length === 0) return res.status(404).json({ erro: 'Game não encontrado' })
//         res.status(200).json(resultado[0])
//     })
// }

// Criar registros na tabela policiais
exports.create = (req, res) => {
    const { nome, tipo, ano } = req.body
    if (!nome || !tipo || !ano) {
        return res.status(400).json({ erro: 'Nome, tipo e ano são obrigatórios' })
    }
    const sql = 'INSERT INTO policiais (nome, tipo, ano) VALUES (?, ?, ?)'
    db.query(sql, [nome, tipo, ano], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        res.status(201).json({ mensagem: 'Game criado com sucesso!', id: resultado.insertId })
    })
}

// Atualizar registros da tabela policiais
exports.update = (req, res) => {
    const { id } = req.params
    const { nome, tipo, ano } = req.body
    if (!nome || !tipo || !ano) {
        return res.status(400).json({ erro: 'Nome, tipo e ano são obrigatórios' })
    }
    const sql = 'UPDATE policiais SET nome = ?, tipo = ?, ano = ? WHERE id = ?'
    db.query(sql, [nome, tipo, ano, id], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        if (resultado.affectedRows === 0) return res.status(404).json({ erro: 'Game não encontrado' })
        res.status(200).json({ mensagem: 'Game atualizado com sucesso!' })
    })
}

// Excluir registros da tabela policiais
exports.delete = (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM policiais WHERE id = ?'
    db.query(sql, [id], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        if (resultado.affectedRows === 0) return res.status(404).json({ erro: 'Game não encontrado' })
        res.status(204).send()
    })
}