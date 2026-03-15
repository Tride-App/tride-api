import {
    apiEndpoints,
    createHealthPayload,
    createVersionPayload,
    serviceInfo,
} from '../src/core/service-info'
import { describe, expect, it } from 'vitest'

describe('service info', () => {
    it('exposes stable public metadata', () => {
        expect(serviceInfo.name).toBe('tride-api')
        expect(serviceInfo.status).toBe('ok')
        expect(apiEndpoints).toEqual(['/api', '/api/health', '/api/version'])
    })

    it('creates a health payload with an ISO timestamp', () => {
        const timestamp = new Date('2026-03-15T12:00:00.000Z')

        expect(createHealthPayload(timestamp)).toEqual({
            ...serviceInfo,
            timestamp: '2026-03-15T12:00:00.000Z',
        })
    })

    it('creates a minimal version payload', () => {
        expect(createVersionPayload()).toEqual({
            name: 'tride-api',
            version: serviceInfo.version,
        })
    })
})