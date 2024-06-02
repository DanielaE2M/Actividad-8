const selectAutores = () => {
    return db.query('select * from autores');
} 

const selectById = (autoresId) => {
    return db.query('select * from autores where id = ?', [autoresId])
}

const insertAutor = ({nombre, email, foto}) => {
    return db.query('insert into autores(nombre, email, foto) values(?, ?, ?)'[nombre, email, foto])
}

module.exports = {
    selectAutores, selectById, insertAutor
}