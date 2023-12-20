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
    SELECT category_id as id, category_name as name 
    FROM categories
    WHERE category_id = ?
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

module.exports = {
    getChildren,
    getParentsCategories,
    addCategory,
    updateCategory,
    getCategory
}