import axios from "axios"
const tstaldoradodevAPI = axios.create({
  baseURL: "https://tst-al-dorado1-dev-88546.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return tstaldoradodevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return tstaldoradodevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_monster_list(payload) {
  return tstaldoradodevAPI.get(`/api/v1/monster/`)
}
function api_v1_monster_create(payload) {
  return tstaldoradodevAPI.post(`/api/v1/monster/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return tstaldoradodevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstaldoradodevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return tstaldoradodevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return tstaldoradodevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return tstaldoradodevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return tstaldoradodevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstaldoradodevAPI.post(`/rest-auth/logout/`)
}
function api_v1_monster_retrieve(payload) {
  return tstaldoradodevAPI.get(`/api/v1/monster/${payload.id}/`)
}
function api_v1_monster_update(payload) {
  return tstaldoradodevAPI.put(`/api/v1/monster/${payload.id}/`, payload.data)
}
function api_v1_monster_partial_update(payload) {
  return tstaldoradodevAPI.patch(`/api/v1/monster/${payload.id}/`, payload.data)
}
function api_v1_monster_destroy(payload) {
  return tstaldoradodevAPI.delete(`/api/v1/monster/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return tstaldoradodevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return tstaldoradodevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return tstaldoradodevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstaldoradodevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return tstaldoradodevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_monster_list,
  api_v1_monster_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_monster_retrieve,
  api_v1_monster_update,
  api_v1_monster_partial_update,
  api_v1_monster_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
