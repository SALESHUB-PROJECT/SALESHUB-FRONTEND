/** Validated commercial entitlements; pricing remains in the existing offers. */
export const commercialPolicy = {
  agents: { limit: null },
  solo: { optionsIncluded: true, apiIncluded: true, contacts: 1000 },
  tpe: { allIncluded: true, recordLimit: null },
  enterprise: { dedicatedIntegrationManager: true, independentServer: true, preliminaryAuditFree: true },
  partners: {
    training: { price: 0, limit: null },
    certification: { price: 0, limit: null },
    access: { price: 0, limit: null },
  },
} as const;