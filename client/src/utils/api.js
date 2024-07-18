import api from "../services/BaseURL"

const fetchData = async (url) => {
    try {
        const { data } = await api.get(url)
        return data
    } catch (err) {
        return err.message
    }
}

export default fetchData