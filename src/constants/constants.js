const CONSTANTS = {
  PUBLIC_ROUTES: ['/auth/signup', '/auth/login', '/invites/accept-invite', '/resend-invite/:email', '/verify-code/:code'],
  ROLES: {
    SUPER_ADMIN: 'Super Admin',
    ADMIN: 'Admin',
    VENDOR_MANAGER: 'Vendor Manager',
    PROJECT_MANAGER: 'Project Manager',
    MEMBER: 'Member',
  },
  InviteStatus: { PENDING: 'pending', APPROVED: 'approved' },
  UserStatus: { ACTIVE: 'active', PENDING: 'pending', DELETED: 'deleted' }
}

module.exports = CONSTANTS