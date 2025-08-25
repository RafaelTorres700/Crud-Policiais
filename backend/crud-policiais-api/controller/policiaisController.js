const db = require('../db')
const bcrypt = require('bcryptjs')

// Exibir os dados da tabela policiais
exports.getAll = (req, res) => {
    const sql = 'SELECT * FROM policiais'
    db.query(sql, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        res.status(200).json(resultado)
    })
}



// Criar registros na tabela policiais
exports.create = (req, res) => {
    const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = req.body
    if (!rg_civil || !rg_militar || !cpf || !data_nascimento || !matricula) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
    }
    const hashedMatricula = bcrypt.hashSync(matricula, 10)
    const sql = 'INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula) VALUES (?, ?, ?, ?, ?)'
    db.query(sql, [rg_civil, rg_militar, cpf, data_nascimento, hashedMatricula], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        res.status(201).json({ mensagem: 'Policiais cadastrados com sucesso!', id: resultado.insertId })
    })
}

// Atualizar registros da tabela policiais
exports.update = (req, res) => {
    const { id } = req.params
    const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = req.body
    if (!rg_civil || !rg_militar || !cpf || !data_nascimento || !matricula) {
        return res.status(400).json({ erro: 'Todos os campos são obrigatórios' })
    }
    const hashedMatricula = bcrypt.hashSync(matricula, 10)
    const sql = 'UPDATE policiais SET rg_civil = ?, rg_militar = ?, cpf = ?, data_nascimento = ?, matricula = ? WHERE id = ?'
    db.query(sql, [rg_civil, rg_militar, cpf, data_nascimento, hashedMatricula, id], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        if (resultado.affectedRows === 0) return res.status(404).json({ erro: 'Policial não encontrado' })
        res.status(200).json({ mensagem: 'Policial atualizado com sucesso!' })
    })
}

// Excluir registros da tabela policiais
exports.delete = (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM policiais WHERE id = ?'
    db.query(sql, [id], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro: 'Erro interno do servidor' })
        if (resultado.affectedRows === 0) return res.status(404).json({ erro: 'Policial não encontrado' })
        res.status(204).json({ mensagem: 'Policial excluído com sucesso!' })
    })
}