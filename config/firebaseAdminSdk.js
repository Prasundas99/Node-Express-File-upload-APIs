export default {
  type: 'service_account',
  project_id: process.env.projectId,
  private_key_id: process.env.privateKeyId,
  private_key:process.env.privateKey,
  client_email:process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.client_x509_cert_url,
}
