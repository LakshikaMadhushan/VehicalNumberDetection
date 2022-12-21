/**
 * @author Sahan Dinuka
 * @CreatedBy IntelliJ IDEA
 * @created 18/12/2021 - 8:48 PM
 */
import api from "./apiHandler";

export async function dashboardData() {
    let apiConfig = {}
    apiConfig.url = `dashboard`
    apiConfig.type = 'GET'
    apiConfig.body = null
    return await api(apiConfig)
}
