interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner'],
  tenantName: 'Organization',
  applicationName: 'CRM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View organization details', 'Update contact details', 'Delete contact details'],
  ownerAbilities: [
    'Manage the Organization',
    'Invite or remove users from the Organization',
    'Update user roles in the Organization',
    'View all users in the Organization',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e84e23c6-7e47-40bb-b183-cc7c1099b6da',
};
