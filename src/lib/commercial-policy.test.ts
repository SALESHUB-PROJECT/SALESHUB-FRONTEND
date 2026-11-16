import { describe, expect, test } from 'bun:test';
import { commercialPolicy as policy } from './commercial-policy';

describe('Validated offer entitlements', () => {
  test('Solo includes all options, API and 1000 contacts', () => {
    expect(policy.solo).toEqual({ optionsIncluded: true, apiIncluded: true, contacts: 1000 });
  });
  test('TPE includes everything without a record limit', () => {
    expect(policy.tpe).toEqual({ allIncluded: true, recordLimit: null });
  });
  test('Enterprise includes integration manager, independent server and free preliminary audit', () => {
    expect(policy.enterprise).toEqual({ dedicatedIntegrationManager: true, independentServer: true, preliminaryAuditFree: true });
  });
  test('AI agents are unlimited', () => { expect(policy.agents.limit).toBeNull(); });
  test('Partner training is free and unlimited', () => { expect(policy.partners.training).toEqual({ price: 0, limit: null }); });
  test('Partner certification is free and unlimited', () => { expect(policy.partners.certification).toEqual({ price: 0, limit: null }); });
  test('Partner access is free and unlimited', () => { expect(policy.partners.access).toEqual({ price: 0, limit: null }); });
});