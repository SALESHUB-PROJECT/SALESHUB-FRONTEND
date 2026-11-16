import { describe, it as test } from 'node:test';
import { deepStrictEqual } from 'node:assert/strict';
import { commercialPolicy as policy } from './commercial-policy';

describe('Validated offer entitlements', () => {
  test('Solo includes all options, API and 1000 contacts', () => {
    deepStrictEqual(policy.solo, { optionsIncluded: true, apiIncluded: true, contacts: 1000 });
  });
  test('TPE includes everything without a record limit', () => {
    deepStrictEqual(policy.tpe, { allIncluded: true, recordLimit: null });
  });
  test('Enterprise includes integration manager, independent server and free preliminary audit', () => {
    deepStrictEqual(policy.enterprise, { dedicatedIntegrationManager: true, independentServer: true, preliminaryAuditFree: true });
  });
  test('AI agents are unlimited', () => { deepStrictEqual(policy.agents.limit, null); });
  test('Partner training is free and unlimited', () => { deepStrictEqual(policy.partners.training, { price: 0, limit: null }); });
  test('Partner certification is free and unlimited', () => { deepStrictEqual(policy.partners.certification, { price: 0, limit: null }); });
  test('Partner access is free and unlimited', () => { deepStrictEqual(policy.partners.access, { price: 0, limit: null }); });
});