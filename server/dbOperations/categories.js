const { pool } = require('../db')

async function getParentsCategories() {
    const sql = `
    SELECT category_id as id, category_name as name 
    FROM categories
    WHERE parent_id IS NULL
    `
    const [categories] = await pool.query(sql)
    return categories
}

async function getChildren(categoryId) {
    const sql = `
    SELECT category_id as id, category_name as name 
    FROM categories
    WHERE parent_id = ?
    `
    const [categories] = await pool.query(sql, [categoryId])
    return categories
}

async function getCategory(categoryId) {
    const sql = `
    SELECT c1.category_id as categoryId, c1.category_name as categoryName, c2.category_id as parentId, c2.category_name as parentName
    FROM categories c1
    LEFT JOIN categories c2 
    ON c1.parent_id = c2.category_id 
    WHERE c1.category_id = ?
    `
    const [category] = await pool.query(sql, [categoryId])
    return category
}

async function addCategory(name, parentId) {
    const sql = `
    INSERT INTO categories (category_name, parent_id)
    VALUES(?, ?)
    `
    const [{ affectedRows }] = await pool.query(sql, [name, parentId])
    return affectedRows
}

async function updateCategory(name, parentId, categoryId) {
    const sql = `
    UPDATE categories
    SET category_name = ?, parent_id = ?
    WHERE category_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [name, parentId, categoryId])
    return affectedRows
}

async function searchForCategory(text) {
    let like = `%${text}%`
    const sql = `
    SELECT category_name name, category_id id
    FROM categories
    WHERE category_name LIKE ?
    LIMIT 5;
    `
    const [data] = await pool.query(sql, [like])
    return data
}

module.exports = {
    getChildren,
    getParentsCategories,
    addCategory,
    updateCategory,
    getCategory,
    searchForCategory
}