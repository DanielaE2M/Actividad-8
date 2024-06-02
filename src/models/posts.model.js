const selectPosts = () => {
    return db.query('select * from posts');
} 

const selectById = (postsId) => {
    return db.query('select * from posts where id = ?', [postsId])
}

const insertPosts = ({ titulo, descripcion, fecha_creacion, categoria, autores_id}) => {
    return db.query('insert into posts (titulo, descripcion, fecha_creacion, categoria, autores_id) values (?,?,?,?,?)', [titulo, descripcion,fecha_creacion,categoria,autores_id] )
}




module.exports = {
    selectPosts, selectById, insertPosts
}