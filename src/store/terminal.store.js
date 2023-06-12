import axios from 'axios'

const state = () => ({
    terminals: {}
})

const mutations = {
    _assign_data_terminals(state, payload) {
        state.terminals = payload
    }
}

const actions = {
    fetchDataTerminals,
    storeNewDataTerminal,
    getTerminalData,
    updateDataTerminal,
    deleteTerminalData
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

function fetchDataTerminals({commit},links){
    console.log(links)
    return new Promise(async(resolve,reject) => {
        try {
            let link = 'http://localhost:8000/api/terminals';
            if (links.prev != null) {
                link = links.prev
            } else if (links.next != null) {
                link = links.next
            }
            let network = await axios.get(link)
            commit('_assign_data_terminals', network.data)
            resolve(network.data)
        } catch (e) {
            console.log(e)
            reject(e)   
        }
    })
}


function storeNewDataTerminal({ commit }, terminal) {
    return new Promise(async function (resolve, reject) {
        try {
            let link = 'http://localhost:8000/api/terminals';
            let network = await axios.post(link, terminal);
            resolve(network.data)
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

function getTerminalData({ commit }, terminalId) {
    return new Promise(async function (resolve, reject) {
        try {
            let link = 'http://localhost:8000/api/terminals/' + terminalId;
            let network = await axios.get(link);
            resolve(network.data)
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

function updateDataTerminal({ commit }, terminal) {
    return new Promise(async function (resolve, reject) {
        try {
            let link = 'http://localhost:8000/api/terminals/' + terminal.id;
            let network = await axios.put(link, terminal);
            resolve(network.data)
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

function deleteTerminalData({ commit }, terminalId) {
    return new Promise(async function (resolve, reject) {
        try {
            let link = 'http://localhost:8000/api/terminals/' + terminalId;
            let network = await axios.delete(link);
            resolve(network.data)
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}