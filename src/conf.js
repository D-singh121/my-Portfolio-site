const conf = {
	emailJs_ServiceId: String(import.meta.env.VITE_SERVICE_ID),
	emailJs_TemplateId: String(import.meta.env.VITE_TEMPLATE_ID),
	emailJs_PublicKeyId: String(import.meta.env.VITE_PUBLIC_KEY_ID)
}
export default conf;