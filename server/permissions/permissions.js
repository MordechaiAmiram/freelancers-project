function hasOwnerPermissions(user, userId){
    return user.id === userId
}

function hasAdminPermissions(user) {
    return user.role === 'admin'
}

function hasOwnerOrAdminPermissions(user, userId){
    return hasOwnerPermissions(user, userId) || hasAdminPermissions(user, userId)
}


module.exports = {
    hasOwnerPermissions,
    hasAdminPermissions,
    hasOwnerOrAdminPermissions
}