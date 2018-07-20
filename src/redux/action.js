

function changeNavTitle(navTitle){
    return {
        type:'changeNavTitle',
        payload:{
            navTitle:navTitle
        }
    }
}

module.exports = {
    changeNavTitle
}